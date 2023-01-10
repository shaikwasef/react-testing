import { render, screen } from "@testing-library/react"
import React from "react";
import Greet from "./Greet";

test('render greet component', () => {
	render(<Greet />);
	const textElement = screen.getByText('Hello');
	expect(textElement).toBeInTheDocument();
})

test('render greet component with name', () => {
	render(<Greet name="wasef" />);
	const textElement = screen.getByText('Hello wasef');
	expect(textElement).toBeInTheDocument();
})