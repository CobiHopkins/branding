const { createTheme, responsiveFontSizes } = require('@mui/material')

const sharedVariables = {
    colours: {
        error: {
            main: '#d32f2f',
            light: '#e06d6d',
            dark: '#7e1c1c',
        },
        warning: {
            //replace with orange shades
            main: '#E69138',
            light: '#f0bd87',
            dark: '#ab4e00',
        },
        info: {
            //replace with blue shades
            main: '#0288d1',
            light: '#5eb8ff',
            dark: '#005b9f',
        },
        success: {
            //replace with green shades
            main: '#2e7d32',
            light: '#60ad5e',
            dark: '#005005',
        },
        text: {
            main: '#ffffff',
            light: '#d2d2d2',
            dark: '#212121',
        }
    },
    typography: {
            super: {
                fontSize: '3.75rem',
                '@media (max-width:600px)': {
                    fontSize: '2.5rem',
                },
            },
            large: {
                fontSize: '2.5rem',
                '@media (max-width:600px)': {
                    fontSize: '2rem',
                },
            },
            medium: {
                fontSize: '2rem'
            },
            default: {
                fontSize: '1rem'
            },
            small: {
                fontSize: '0.8rem'
            }
        },
        fontWeight: {
            heavy: 800,
            medium: 500,
            light: 300
        },
        fontFamily: [
            'Verdana', 'Helvetica', 'Roboto', 'sans-serif'
        ].join(','),

};

const light = createTheme({
    palette: {
        primary: {
            main: '#232038',
            light: '#38364b',
            dark:  '#1c192c'
        },
        secondary: {
            main: '#574f84',
            light: '#9a95b5',
            dark: '#2b2742',
        },
        ...sharedVariables.colours
    },
    typography: {
        ...sharedVariables.typography
    },
})

const dark = createTheme({
    palette: {
        primary: {
            main: '#232038',
            alternative: '#ffffff',
        },
        secondary: {
            main: '#574f84',
            alternative: '#d2d2d2',
        },
        ...sharedVariables.colours
    },
    typography: {
        ...sharedVariables.typography
    },
})

const lightTheme = responsiveFontSizes(light);
const darkTheme = responsiveFontSizes(dark);

module.exports = {
    lightTheme,
    darkTheme
}