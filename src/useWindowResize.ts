import { useState, useEffect, useCallback } from "react";

export default function useWindowResize() {
	const [windowSize, setWindowSize] = useState(window.innerHeight);
	const handleResize = useCallback(
		() => {
			setWindowSize(window.innerHeight);
		},
		[],
	);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		}
	}, []);

	return windowSize;
}
