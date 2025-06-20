import { render, screen } from "@testing-library/react";
import BannerWithSingleText from "../components/BannerWithSingleText/BannerWithSingleText";

/**
 * Test Checklist for BannerWithSingleText
 *
 * Rendering & Structure
 * [x] Renders without issues
 * [x] Renders the passed `title` text inside the heading
 * [x] Renders an h3 heading (Typography with variant="h3")
 * [x] Does not crash when `title` is an empty string

 * Accessibility
 * [x] Section contains a heading.
 * [x] Heading is accessible via `getByRole('heading', { level: 3 })`
 * [x] Heading has correct text content
 * [x] Renders component with correct aria-label

 * Styling
 * [x] Applies background image style
 * [x] Has correct styles for height, width, and display (e.g., flexbox)

 * Snapshot
 * [x] Matches snapshot with a non-empty `title`
 * [x] Matches snapshot with an empty `title`
 */

describe(BannerWithSingleText, () => {
    it('Renders without issues', () => {
        const banner = render(<BannerWithSingleText title="Hello World" />);
    });

    it('Creates a banner with a single text component', () => {
        render(<BannerWithSingleText title="Welcome to my banner tests" />);
        expect(screen.getByText('Welcome to my banner tests')).toBeInTheDocument();
    });

    it('Uses the correct Typography variant', () => {
        render(<BannerWithSingleText title="Title check" />);
        const banner = screen.getByText("Title check");
        expect(banner).toHaveClass('MuiTypography-h3');
    });

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
    });
    
    it("Heading is accessible via `getByRole('heading', { level: 3 })`", () => {
        render(<BannerWithSingleText title="Test Heading" />);
        const banner = screen.getByRole("heading", { level: 3 });
        expect(banner).toBeInTheDocument();
    });

    it("Heading has correct text content", () => {
        render(<BannerWithSingleText title="Test Heading" />);
        const banner = screen.getByRole("heading", { level: 3 });
        expect(banner).toHaveTextContent("Test Heading");
    });

    it('Renders component with correct aria-label', () => {
        render(<BannerWithSingleText title="Checking Aria" />);
        const banner = screen.getByRole("region");

        expect(banner).toHaveAttribute('aria-label', 'Banner');
    });

    it('Applies the background-image styling', () => {
        render(<BannerWithSingleText title="Styled Banner" />);

        const banner = screen.getByRole("region");
        expect(banner).toBeInTheDocument();

        const computedStyle = window.getComputedStyle(banner);
        expect(computedStyle.backgroundImage).toMatch(/url\(/);
        expect(computedStyle.backgroundRepeat).toBe('no-repeat');
        expect(computedStyle.backgroundPosition).toBe('center');
    });

    it('Has correct styles for height, width, and display', () => {
        render(<BannerWithSingleText title="Styled Banner" />);

        const banner = screen.getByRole("region");
        expect(banner).toBeInTheDocument();

        const computedStyle = window.getComputedStyle(banner);
        expect(computedStyle.height).toBe("300px");
        expect(computedStyle.width).toBe('75vw');
        expect(computedStyle.display).toBe('flex');
    });

    it('Matches snapshot with non-empty title', () => {
        const { container } = render(<BannerWithSingleText title="Snapshot test" />);
        expect(container).toMatchSnapshot();
    });

    it('Matches snapshot with an empty title', () => {
        const { container } = render(<BannerWithSingleText />);
        expect(container).toMatchSnapshot();
    });
});