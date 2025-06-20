import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Router, Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import { act } from 'react-dom/test-utils';

/**
 * Test checklist for NavBar
 * 
 * [x] Renders the NavBar component without crashing
 * [x] Displays the site title "Cobi Hopkins"
 * [x] Contains a "Home" navigation link
 * [x] Contains a "Projects" navigation link
 * [x] Includes a <nav> element with aria-label="Main navigation"
 * [x] Navigation links route correctly when clicked
 */

const Home = () => <div>Home Page</div>;
const Projects = () => <div>Projects page</div>;

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

    it('Navigation links route correctly when clicked', async () => {
        const user = await userEvent.setup();
        render(
            <MemoryRouter initialEntries={['/']}>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </MemoryRouter>
        );

        expect(await screen.findByText(/Home Page/i)).toBeInTheDocument();

        const projectsLink = screen.getByRole('link', { name: /projects/i });
        await user.click(projectsLink);

        expect(await screen.getByText(/Projects Page/i)).toBeInTheDocument();
    });
});