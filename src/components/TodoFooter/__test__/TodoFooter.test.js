import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => (
  <BrowserRouter>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
  </BrowserRouter>
);

test('should render the correct amount of incomplete tasks', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText(/5 tasks left/i); // it's regex so can be small letters
  expect(paragraphElement).toBeInTheDocument();
});

test('should render "task" when the number of incomplete tasks is one', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i); // it's regex so can be small letters
  expect(paragraphElement).toBeInTheDocument();
});
/*

test('should render "task" when the number of incomplete tasks is one', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i); // it's regex so can be small letters
  expect(paragraphElement).toBeTruthy();
});

test('should render "task" when the number of incomplete tasks is one', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i); // it's regex so can be small letters
  expect(paragraphElement).toBeVisible();
});

test('should render "task" when the number of incomplete tasks is one', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i); // it's regex so can be small letters
  // expect(paragraphElement).toContainHTML('h3');
  expect(paragraphElement).toContainHTML('p');
});

test('should render "task" when the number of incomplete tasks is one', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  // const paragraphElement = screen.getByRole('paragraph'); // Not sure why this one doesn't work...

  const paragraphElement = screen.getByTestId('para');
  // expect(paragraphElement).toContainHTML('h3');
  expect(paragraphElement).toHaveTextContent('1 task left');
});

test('should render "task" when the number of incomplete tasks is one', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId('para');
  expect(paragraphElement).not.toBeFalsy();
});

test('should render "task" when the number of incomplete tasks is one', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId('para');
  expect(paragraphElement.textContent).toBe('1 task left');
});
*/
