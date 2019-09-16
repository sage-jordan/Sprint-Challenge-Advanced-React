import React from 'react';
import {render} from '@testing-library/react';
import App from './app';

test('renders without crashing', () => {
    const container = render(<App/>);
    console.log("Container:", container);
}) 

test('verify balls and strikes display', () => {
    const container = render(<App/>);
    const balls = container.getByText('Balls');
    const strikes = container.getByText('Strikes');
    console.log("Balls:", balls, "Strikes:", strikes);
});