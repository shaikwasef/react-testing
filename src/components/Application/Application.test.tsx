import { render, screen } from "@testing-library/react"
import { Application } from "./Application"

describe('test Application Component', () => {
	test("renders correctly", () => {
		render(<Application />);
		const textBoxElement = screen.getByRole('textbox' , {
			name : "Name"
		});
		expect(textBoxElement).toBeInTheDocument();

		const bioBoxElement = screen.getByRole('textbox',{
			name : "Bio"
		});
		expect(bioBoxElement).toBeInTheDocument();

		const primaryHeading = screen.getByRole('heading', {
			level : 1
		});
		expect(primaryHeading).toBeInTheDocument();

		const secondaryHeading = screen.getByRole('heading', {
			level: 2
		});
		expect(secondaryHeading).toBeInTheDocument();

		const allHeadings = screen.getAllByRole('heading');
		expect(allHeadings.length).toBe(2);

		const paragraphElement = screen.getByText((c) => c.startsWith('All'));
		expect(paragraphElement).toBeInTheDocument();

		const submitButton = screen.getByRole('button');
		expect(submitButton).toBeInTheDocument();

		const checkBox = screen.getByRole('combobox');
		expect(checkBox).toBeInTheDocument();
	})
})