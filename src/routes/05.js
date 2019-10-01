import VanillaTilt from 'vanilla-tilt';
import { createRef } from 'preact';
import { createComponent, onMounted, onUnmounted } from '../composition';

import Tilt from '../components/tilt';

const Tilt1 = createComponent(() => {
	let tiltNode;
	function addTilt(t) {
		if (t)
			VanillaTilt.init(t, {
				max: 25,
				speed: 400,
				glare: true,
				'max-glare': 0.5
			});
		else if (tiltNode) tiltNode.vanillaTilt.destroy();

		tiltNode = t;
	}

	return () => <Tilt tiltRef={addTilt}>Tilt 1 (function ref)</Tilt>;
});

const Tilt2 = createComponent(() => {
	const tiltRef = createRef();
	onMounted(() => {
		VanillaTilt.init(tiltRef.current, {
			max: 25,
			speed: 400,
			glare: true,
			'max-glare': 0.5
		});
	});
	onUnmounted(() => {
		tiltRef.current.vanillaTilt.destroy();
	});

	return () => <Tilt tiltRef={tiltRef}>Tilt 2 (onMounted)</Tilt>;
});

export default function Demo05() {
	return (
		<div class="route">
			<h1>Counter persistent</h1>

			<section class="demo">
				<Tilt1 />
				<Tilt2 />
			</section>
		</div>
	);
}
