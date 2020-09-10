import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import React from 'react';

import Header from '../index';

afterEach(cleanup);

describe('Header', () => {

    it('header renders correctly', () => {
        const { asFragment } = render(<Header title="Hello!" />);
        expect(asFragment).toMatchSnapshot();
    });
    it("inserts text in h1", () => {
        const { getByTestId, getByText } = render(<Header title="Hello!" />);

        expect(getByTestId("header-h1")).toHaveTextContent("Hello!");
        expect(getByText("Hello!")).toHaveClass("header-heading");
    });
})