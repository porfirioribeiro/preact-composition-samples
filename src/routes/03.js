import { createComponent, ref, effect } from '../composition';

const Counter = createComponent(getProps => {
	const { step = 1, initialCount = 0 } = getProps(); //this will only get the initial props

	const count = ref(+window.localStorage.getItem('count') || initialCount);

	function increment() {
		count.value += step;
	}

	effect(count, c => window.localStorage.setItem('count', c));

	return () => <button onClick={increment}>{count.value}</button>;
});

export default function Demo03() {
	return (
		<div class="route">
			<h1>Counter persistent</h1>

			<section class="demo">
				<Counter />
			</section>
		</div>
	);
}
