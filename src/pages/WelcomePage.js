import React, { useContext }from 'react';
import { StateContext } from '../Context'
import WorkingPage from './WorkingPage';

export default function WelcomePage() {
    const { state } = useContext(StateContext);

    let codeToDisplay;
    if(state.user.access_token) {
        codeToDisplay = <WorkingPage/>;
    } else {
        codeToDisplay = (
            <><h1>Make a Welcome Screen</h1></>
        )
    }

    return codeToDisplay
}