import React from 'react'

interface GreetProps {
	name?: string;
}

export default function Greet(props: GreetProps) {
	return (
		<h1>Hello {props.name}</h1>
	)
}
