import { useState } from 'react';

// Local Storage takes in a key and initial value
export const useLocalStorage = (key, initValue) => {
    // Create a storedValue which used Local Storage to get the corresponding item
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initValue;
    });

    // SetValue takes a value and sets the Local Storage ( not sure how this works, or is activated? )
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue];
};