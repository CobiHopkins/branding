import { render, screen } from "@testing-library/react";
import BannerWithSingleText from "../components/BannerWithSingleText/BannerWithSingleText";

/**
 * ✅ BannerWithSingleText Test Checklist
 *
 * Rendering & Structure
 * [x] Renders without issues
 * [x] Renders the passed `title` text inside the heading
 * [x] Renders an h3 heading (Typography with variant="h3")
 * [x] Does not crash when `title` is an empty string

 * Accessibility
 * [ ] Section contains a heading (for implicit `region` role)
 * [ ] Heading is accessible via `getByRole('heading', { level: 3 })`
 * [ ] Heading has correct text content

 * Styling (Optional if unit testing, useful for visual regression)
 * [ ] Applies background image style
 * [ ] Has correct inline styles for height, width, and alignment (e.g., flexbox)

 * Snapshot
 * [ ] Matches snapshot with a non-empty `title`
 * [ ] Matches snapshot with an empty `title`
 */

describe(BannerWithSingleText, () => {
    it('Renders without issues', () => {
        render(<BannerWithSingleText title="Hello World" />);
    });

    it('Creates a banner with a single text component', () => {
        render(<BannerWithSingleText title="Welcome to my banner tests" />);
        expect(screen.getByText('Welcome to my banner tests')).toBeInTheDocument();
    });

    it('Uses the correct Typography variant', () => {
        render(<BannerWithSingleText title="Title check" />);
        const banner = screen.getByText("Title check");
        expect(banner).toHaveClass('MuiTypography-h3');
    })

    it('Does not crash when `title` is an empty string', () => {
        render(<BannerWithSingleText title="" />);
        const heading = screen.getByRole('heading', { level: 3 });
        expect(heading).toBeInTheDocument();
        expect(heading).toBeEmptyDOMElement();
});

    it('Has the correct styling', () => {
        render(<BannerWithSingleText title="Styled Banner" />);
        const parent = screen.getByText("Styled Banner").parentElement;
        expect(parent).toHaveStyle('display: flex');
        expect(parent).toHaveStyle('height: 300px');
    })

    it('Matches snapshot', () => {
        const { container } = render(<BannerWithSingleText title="Snapshot test" />);
        expect(container).toMatchSnapshot();
    })
});