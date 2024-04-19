import './Sass/App.scss'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Formations from './components/Formations/Formations';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const App = () => {

    return (
        <>
            <Header />
            <Home />
            <About />
            <Formations />
            <Skills />
            <Contact />
            <Footer />
        </>
    )
}

export default App