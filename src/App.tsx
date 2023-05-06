import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/common/NavBar/NavBar';
import AppRoutes from './AppRoutes';

const App = () => {

  return (
    <Router>
      <div>
        <NavBar />
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;