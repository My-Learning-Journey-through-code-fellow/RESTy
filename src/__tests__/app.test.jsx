import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from '../App';

const server = setupServer(
  rest.get('/getTest', (req, res, ctx) => {
    return res(ctx.json({results: [{name: 'tester'}, {name: 'testytester'}]}))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers)
afterAll(() => server.close())

describe('App integration', () => {
  it('renders data in the output area', async () => {
    render(<App/>);

    let input = screen.getByTestId('form-input');
    fireEvent.change(input, {target: {value: '/getTest' }})
    let button = screen.getAllByText('GO!')
    fireEvent.click(button);

    let pre = await screen.findByTestId('results-data');
    expect(pre).toHaveTextContent('http://fakethings.com/1');
  })
});
