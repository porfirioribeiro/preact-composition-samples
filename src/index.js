import { render } from 'preact';
import App from './components/app';
import './style';

// > Note: for actual Preact CLI usage, just export your component.
// export default App;

// Codesandbox workaround.
render(<App />, window.root);
