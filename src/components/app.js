import Router from 'preact-router';
import Home from '../routes/index';
import NotFound from '../routes/_404';
import Header from './header';
import Demo02 from '../routes/02';
import Demo03 from '../routes/03';

export default function App() {
	return (
		<div class="app">
			<Header />
			<Router>
				<Home path="/" />
				<Demo02 path="/02" />
				<Demo03 path="/03" />
				<NotFound default />
			</Router>
		</div>
	);
}
