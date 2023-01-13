import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CounterTwo } from "./CounterTwo";

describe(('test for counter two'), () => {

	test('check render', () => {
		render(<CounterTwo count={0} />);
		const header = screen.getByRole('heading', {
			name: /two/i
		})
		expect(header).toBeInTheDocument();
	})

	test('check functionality', async () => {
		const incrementFn = jest.fn();
		const decrementFn = jest.fn();
		render(<CounterTwo count={0} handleIncrement={incrementFn} handleDecrement={decrementFn} />);
		const incrementButton = screen.getByRole('button', {
			name: /Increment/i
		});
		const decrementButton = screen.getByRole('button', {
			name: /Decrement/i
		});
		await userEvent.click(incrementButton);
		await userEvent.click(decrementButton);
		expect(incrementFn).toHaveBeenCalledTimes(1);
		expect(decrementFn).toHaveBeenCalledTimes(1);
	})


});