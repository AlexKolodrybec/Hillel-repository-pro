import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders TODO title', () => {
  render(<App />);
  const titleElement = screen.getByText(/TODO/i);
  expect(titleElement).toBeInTheDocument();
});

test('input allows both numbers and letters', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Enter todo/i);

  fireEvent.change(inputElement, { target: { value: '123abc' } });
  expect(inputElement.value).toBe('123abc');
});

test('shows error when trying to add empty todo', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Add/i);

  fireEvent.click(buttonElement);
  const errorElement = screen.getByText(/Todo cannot be empty!/i);
  expect(errorElement).toBeInTheDocument();
});

test('adds new todo to the list after entering text and clicking Add', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Enter todo/i);
  const buttonElement = screen.getByText(/Add/i);

  fireEvent.change(inputElement, { target: { value: 'New Todo' } });
  fireEvent.click(buttonElement);

  const todoElement = screen.getByText(/New Todo/i);
  expect(todoElement).toBeInTheDocument();
});

test('input field is cleared after adding todo', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Enter todo/i);
  const buttonElement = screen.getByText(/Add/i);

  fireEvent.change(inputElement, { target: { value: 'Another Todo' } });
  fireEvent.click(buttonElement);

  expect(inputElement.value).toBe('');
});