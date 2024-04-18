import './Sass/App.scss'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Formations from './components/Formations/Formations';


const App = () => {

    return (
        <>
            <Header />
            <Home />
            <About />
            <Formations />
        </>
    )
}

export default App