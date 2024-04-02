import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <Projects/>

    </div>
  );
}

export default App;
