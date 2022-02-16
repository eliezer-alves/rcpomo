import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login } from './pages/Auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
