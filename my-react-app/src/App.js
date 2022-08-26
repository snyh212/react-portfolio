import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div>

      <div id="header">

        <Header />

        <main id="content">

          <About />
          <Portfolio />
          <Contact />
         <Resume />

        </main>

      </div>

      <Footer />

    </div>
  );
}

export default App;
