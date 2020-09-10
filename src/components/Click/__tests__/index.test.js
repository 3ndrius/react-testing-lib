import React from 'react';
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Click from '../index'

afterEach(cleanup);

describe('render click component', () => {

    it('render component click', () => {
        const { asFragment } = render(<Click />);
        expect(asFragment).toMatchSnapshot();
    })

    it('display count value ', () => {
        const { getByTestId } = render(<Click />);
        expect(getByTestId('counter-value')).toHaveTextContent('0');
    })
})