// import modular CSS:
import style from './style';
//      ^ { header: 'header_fe2f3' }

export default function Header() {
	return (
		<header class={style.header}>
			<h2>Demo</h2>
			<nav>
				<a href="/">Home</a>
				<a href="/02">counter (custom composition)</a>
				<a href="/03">presistemt state</a>
			</nav>
		</header>
	);
}
