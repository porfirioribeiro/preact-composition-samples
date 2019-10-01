import Counter from '../components/counter';

export default function Home() {
	return (
		<div class="route home">
			<h1>Home</h1>
			<p>This is a demo of Preact X + Preact CLI 3.</p>
			<p>
				It includes a workaround that makes <code>preact/compat</code> work on
				codesandbox.
			</p>
			<section class="demo">
				<h4>Requisite Counter Demo:</h4>
				<Counter />
			</section>
		</div>
	);
}
