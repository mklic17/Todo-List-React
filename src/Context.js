import React from 'react'

// highlighter yellow: #eae672
export const ThemeContext = React.createContext({
    primary: '#eae672',
});

export const StateContext = React.createContext({
    state: {},
    dispatch: () => {}
});