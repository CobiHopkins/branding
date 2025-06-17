import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

/**
 * Test checklist for Footer component
 * 
 * [x] Renders the Footer component without crashing
 * [x] Contains a link to Github, Twitch, and X with the associated icons
 * [x] All links open in a new tab (target="_blank")
 * [x] All links include rel="noopener noreferrer"
 * [ ] Includes two horizontal divider lines between icons
 * [ ] Uses correct MUI layout with Stack and spacing
 * [ ] All links use the MUI color "secondary" and no underline
 */

describe(Footer, () => {
    it('Renders the Footer component without crashing', () => {
        render(<Footer />);
        expect(screen.getByRole('contentinfo', { name: /Footer social links/i})).toBeInTheDocument();
    });

    it('Contains a link to Github, Twitch, and X with the associated icons', () => {
        render(<Footer />);

        const footer = screen.getByRole('contentinfo', { name: /Footer social links/i });
        const githubLink = within(footer).getByRole('link', { name: /GitHub profile/i });
        const twitchLink = within(footer).getByRole('link', { name: /Twitch channel/i });
        const twitterLink = within(footer).getByRole('link', { name: /X \(Twitter\) profile/i });

        expect(githubLink).toHaveAttribute('href', 'https://github.com/CobiHopkins');
        expect(githubLink.querySelector('svg')).toBeInTheDocument();

        expect(twitchLink).toHaveAttribute('href', 'https://twitch.tv/CeeJaeRL');
        expect(twitchLink.querySelector('svg')).toBeInTheDocument();

        expect(twitterLink).toHaveAttribute('href', 'https://x.com/CeeJaeRL');
        expect(twitterLink.querySelector('svg')).toBeInTheDocument();
    });

    it('All links open in a new tab (target=\"_blank\")', () => {
        render(<Footer />);
        const footer = screen.getByRole('contentinfo', { name: /Footer social links/i});
        
        const links = within(footer).getAllByRole('link');
        links.forEach(link => {
            expect(link).toHaveAttribute('target', '_blank');
        });
    });

    it('All links include rel=\"noopener noreferrer\"', () => {
        render(<Footer />);
        const footer = screen.getByRole('contentinfo', { name: /Footer social links/i});

        const links = within(footer).getAllByRole('link');
        links.forEach(link => {
            expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        });
    });

})