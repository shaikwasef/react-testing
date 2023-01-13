import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe('Skills Component', () => {

	const skills = ['HTML', 'JS', 'css'];
	test('test Render', () => {
		render(<Skills skills={skills} />);
		const listElements = screen.getAllByRole('listitem');
		expect(listElements.length).toBe(skills.length);
	})

	test('render login button', () => {
		render(<Skills skills={skills} />);
		const loginButton = screen.getByRole('button');
		expect(loginButton).toBeInTheDocument();
	})
	test('render start learning button', async () => {
		render(<Skills skills={skills} />);
		const startLearning = await screen.findByRole('button', {
			name: /learning/i
		}, {
			timeout : 2000
		});
		expect(startLearning).toBeInTheDocument();
	})

})