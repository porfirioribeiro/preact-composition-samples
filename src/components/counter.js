import { createComponent, ref } from '../composition';

export default createComponent(() => {
	const count = ref(0);
	function inc() {
		count.value++;
	}

	return () => (
		<div>
			<p>Count: {count.value}</p>
			<button onClick={inc}>Increment</button>
		</div>
	);
});
