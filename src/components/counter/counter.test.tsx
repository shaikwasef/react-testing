import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event';
import { Counter } from "./counter"

describe('Count component tests', () => {
	test('renders correctly', () => {
		render(<Counter />);
		const headingElement = screen.getByRole('heading', {
			name: /0/i
		})
		expect(headingElement).toBeInTheDocument();
		const incrementButton = screen.getByRole('button', {
			name: /increment/i
		})
		expect(incrementButton).toBeInTheDocument();
	})

	test('renders count 0', () => {
		render(<Counter />);
		const headingElement = screen.getByRole('heading', {
			name: /0/i
		})
		expect(headingElement).toHaveTextContent('0');
	})

	test('renders count 2', async () => {
		render(<Counter />);
		const incrementButton = screen.getByRole('button', {
			name: /increment/i
		})
		await userEvent.click(incrementButton);
		await userEvent.click(incrementButton);
		const headingElement = screen.getByRole('heading')
		expect(headingElement).toHaveTextContent('2');
	})

	test('set of count to 10', async () => {
		render(<Counter />);
		const amountInput = screen.getByRole('spinbutton');
		await userEvent.type(amountInput, '10');
		const setButton = screen.getByRole('button', {
			name: /set/i
		});
		await userEvent.click(setButton);
		const headingElement = screen.getByRole('heading')
		expect(headingElement).toHaveTextContent('10');
	})
})