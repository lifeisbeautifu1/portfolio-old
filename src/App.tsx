import { Header, Footer, Work, Testemonial, About, Skills } from './container';
import { Navbar } from './components';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testemonial />
      <Footer />
    </div>
  );
}

export default App;
