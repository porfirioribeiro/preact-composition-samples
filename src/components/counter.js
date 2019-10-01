import { useState } from 'preact/hooks';

export default function Counter() {
	const [count, setCount] = useState(0);
	const inc = () => setCount(count + 1);

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={inc}>Increment</button>
		</div>
	);
}
