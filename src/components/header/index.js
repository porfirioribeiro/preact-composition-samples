// import modular CSS:
import style from './style';
//      ^ { header: 'header_fe2f3' }

export default function Header() {
	return (
		<header class={style.header}>
			<h2>Demo</h2>
			<nav>
				<a href="/">Home</a>
				<a href="/missing">Missing</a>
			</nav>
		</header>
	);
}
