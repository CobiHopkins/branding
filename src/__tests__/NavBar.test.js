import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

/**
 * Test checklist for NavBar
 * 
 * [x] Renders the NavBar component without crashing
 * [x] Displays the site title "Cobi Hopkins"
 * [x] Contains a "Home" navigation link
 * [x] Contains a "Projects" navigation link
 * [x] Includes a <nav> element with aria-label="Main navigation"
 * [ ] Navigation links route correctly when clicked
 */

describe(NavBar, () => {
    it('Renders the NavBar component without crashing', () => {
        render(<NavBar />, { wrapper: MemoryRouter });
        expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
    });

    it('Displays the site title \"Cobi Hopkins\"', () => {
        render(<NavBar />, { wrapper: MemoryRouter });
        expect(screen.getByText("Cobi Hopkins")).toBeInTheDocument();
    });

    it('Contains a \"Home\" and \"projects\" navigation link', () => {
        render(<NavBar />, { wrapper: MemoryRouter });
        expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
    });

    it('Includes a <nav> element with aria-label=\"Main navigation\"', () => {
        render(<NavBar />, { wrapper: MemoryRouter });
        const navBar = screen.getByRole('navigation');
        expect(navBar).toHaveAttribute('aria-label', 'Main navigation');
    });
});