import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, waitForElement, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import Images from '../index';

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/posts/1', (req, res, ctx) => {
    return res(ctx.json({ data: {title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'}}))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('mock sw server' ,() =>{

    it('should be all ok', async () => {
         render(<Images url="https://jsonplaceholder.typicode.com/posts/1" />)

          userEvent.click(screen.getByText('Load Data'))
         await waitForElement(() => screen.getByRole('heading'))
        expect(screen.getByRole('heading')).toHaveTextContent('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
        //expect(screen.getByRole('button')).toHaveAttribute('disabled')
    });

    test('handles server error', async () => {
  server.use(
    rest.get('https://jsonplaceholder.typicode.com/posts/1', (req, res, ctx) => {
      return res(ctx.status(500))
    })
  )

  render(<Images url='https://jsonplaceholder.typicode.com/posts/1' />)

  userEvent.click(screen.getByText('Load Data'))

  await waitForElement(() => screen.getByRole('alert'))

  expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
  expect(screen.getByRole('button')).not.toHaveAttribute('disabled')
})




})