import Router from 'preact-router';
import Home from '../routes/index';
import NotFound from '../routes/_404';
import Header from './header';

export default function App() {
	return (
		<div class="app">
			<Header />
			<Router>
				<Home path="/" />
				<NotFound default />
			</Router>
		</div>
	);
}
