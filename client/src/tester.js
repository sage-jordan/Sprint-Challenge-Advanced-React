import React from 'react';
import {render} from '@testing-library/react';
import App from './app';

test('renders without crashing', () => {
    const container = render(<App/>);
    console.log(container);
}) 

test('verify ')