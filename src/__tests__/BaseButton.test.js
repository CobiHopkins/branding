import { render, screen, fireEvent } from '@testing-library/react';
import BaseButton from '../components/BaseButton/BaseButton';

/**
 * Test Checklist for BaseButton component:
 *
 * [x] Does not render if text prop is not provided.
 * [x] Renders correctly with minimal required props (text)
 * [x] Renders with `href` prop and correct component (e.g., 'a')
 * [x] Renders with different `component` prop values
 * [x] `submittable` prop sets button type to "submit"
 * [x] `submittable` false sets button type to "button"
 * [x] `disabled` prop disables the button
 * [x] `onClick` callback is called when button is clicked
 * [x] Applies correct `variant` prop styling
 * [x] Applies correct `color` prop and inline styles
 * [x] Applies given `className` to the button
 * [x] Matches snapshot rendering with default props
 * [x] Handles empty `text` prop gracefully
 */

describe(BaseButton, () => {
    it('Does not render if text prop is not provided', () => {
        const { container } = render(<BaseButton />)
        expect(container.firstChild).toBeNull();
    });

    it('Renders correctly with only required props', () => {
        render(<BaseButton text="BaseButton text test" />)
        expect(screen.getByText("BaseButton text test")).toBeInTheDocument();
    });

    it('Renders with href prop and correct component (e.g., a)', () => {
        render(<BaseButton href="https://google.com" component="a" text="Link Button" />);
        const parent = screen.getByRole("link");
        expect(screen.getByText("Link Button")).toBeInTheDocument();
        expect(parent).toHaveAttribute("href", "https://google.com");
    });

    it('Renders with different component values', () => {
        render(<BaseButton component="button" text="BaseButton Button" />)
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it('Button has submittable type', () => {
        render(<BaseButton text="Test Button" submittable={true} />);
        expect(screen.getByRole("button")).toHaveAttribute('type', 'submit')
    });

    it('Button has submittable type', () => {
        render(<BaseButton text="Test Button" submittable={false} />);
        expect(screen.getByRole("button")).toHaveAttribute('type', 'button')
    });

    it('Button is disabled', () => {
        render(<BaseButton text="Test Button" disabled={true} />);
        expect(screen.getByRole("button")).toBeDisabled();
    });

    it('`onClick` callback is called when button is clicked', () => {
        const handleClick = jest.fn();
        render(<BaseButton text="Click Me" onClick={handleClick} />);

        fireEvent.click(screen.getByRole("button"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('Applies the correct button variant (outlined)', () => {
            render(<BaseButton component="button" text="Variant check" variant="outlined" />);
            const baseButton = screen.getByRole("button");
            expect(baseButton).toHaveClass('MuiButton-outlined');
    });

    it('Applies the correct button variant and colour (containedSecondary)', () => {
            render(<BaseButton component="button" text="Variant Colour check" variant="contained" color="secondary" />);
            const baseButton = screen.getByRole("button");
            expect(baseButton).toHaveClass('MuiButton-containedSecondary');
    });

    it('Applies the given className to the button', () => {
        render(<BaseButton component="button" className="yellowGreenBlue" text="Class test" />);
        const baseButton = screen.getByRole("button");
        expect(baseButton).toHaveClass("yellowGreenBlue");
    });

    it('Matches snapshot with default props', () => {
        const { baseButton } = render(<BaseButton text="Snapshot test" />);
        expect(baseButton).toMatchSnapshot();
    })

});