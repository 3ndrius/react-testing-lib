import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitForElement, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Image from '../index';

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/posts/1', (req, res, ctx) => {
    return res(ctx.json({ greeting: response.data }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('mock sw server' ,() =>{

    it('should be all ok', async () => {
         render(<Image url='https://jsonplaceholder.typicode.com/posts/1' />)

          fireEvent.click(screen.getByText('Load Data'))
         const headings = await waitForElement(() => screen.getByRole('heading'))
        expect(headings).toHaveTextContent("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
        expect(screen.getByRole('button')).toHaveAttribute('disabled')
    });
})