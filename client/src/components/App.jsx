import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import NavBar from './NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
