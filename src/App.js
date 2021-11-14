<<<<<<< HEAD
import './App.css';
import Signup from './js/Components/Signup';

function App() {
  return (
    <div className="App">
      <Signup />
    </div>
=======
import './styles/App.css';
import Layout from './components/Layout';
import injectContext from './store/appContext';

function App() {
  return (
    <Layout/>
>>>>>>> 131c23aa45be583bdc991709d24007ed6a104c5d
  );
}

export default injectContext(App);
