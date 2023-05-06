import { Routes, Route } from 'react-router-dom';

import Landing from './components/pages/Landing/Landing';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import NotFound from './components/common/NotFound/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/landing" element={<Landing />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;