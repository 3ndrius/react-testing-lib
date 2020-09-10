import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from "@testing-library/react";
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

    it('increment count value', () => {
        const { getByTestId, getByText } = render(<Click />);
        fireEvent.click(getByText("Up"));
        expect(getByTestId('counter-value')).toHaveTextContent("1");
    })

    it('decrement count value', async () => {
        const { getByTestId, getByText } = render(<Click />);
        fireEvent.click(getByText("Down"));

        const countDelay = await waitForElement(() => getByText("-1"));
        expect(countDelay).toHaveTextContent("-1");
        
    })
})