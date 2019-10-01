import { createComponent, ref } from '../composition';

function useCounter({ step = 1, initialCount = 0 } = {}) {
	const count = ref(initialCount);
	const increment = () => (count.value += step);
	return [count, increment];
}

const Counter = createComponent(getProps => {
	const { step, initialCount } = getProps(); //this will only get the initial props
	const [count, increment] = useCounter({ step, initialCount });
	return () => <button onClick={increment}>{count.value}</button>;
});

export default function Demo02() {
	return (
		<div class="route">
			<h1>Counter custom composition</h1>

			<section class="demo">
				<Counter />
				<Counter step={-2} initialCount={100} />
			</section>
		</div>
	);
}
