import { creatContext, useState } from 'react';

export const AccessibilityContext = creatContext({});

export const AccessibilityProvider = ({ children }) => {
    const [enabledAccessibility, setEnabledAccessibility] = useState([]);
    const [error, setError] = useState(null);

    return (
        <AccessibilityProvider.Provider value={{ enabledAccessibility, setEnabledAccessibility, error}}>
            {children}
        </AccessibilityProvider.Provider>
    )
}