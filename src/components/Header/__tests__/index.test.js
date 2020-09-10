import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import React from 'react';

import Header from '../index';

afterEach(cleanup);

describe('Header', () => { 
    
    it('header renders correctly', () => {
        const {asFragment} = render(<Header title="Site title" />);
        expect(asFragment).toMatchSnapshot();
    });

})