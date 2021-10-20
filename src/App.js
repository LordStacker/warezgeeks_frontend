import './styles/App.css';
import Layout from './components/Layout';
import injectContext from './store/appContext';

function App() {
  return (
    <Layout/>
  );
}

export default injectContext(App);
