import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './components/About';
import Contact from './components/Contact';

const routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </Router>
  )
}

export default routes