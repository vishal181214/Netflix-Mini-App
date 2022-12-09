import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home';
import Player from './Pages/Player/Player';
import NavScrollExample from './Components/Navbar/Appbar';
import { Provider } from 'react-redux';
import store from './store';
import Notfound from './Pages/NotFound';


function App() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <NavScrollExample/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Player/:id' element={<Player/>}/>
          <Route path="*" element={<Notfound/>} />
        </Routes>
      </BrowserRouter>
      </Provider>

    );
  }

export default App;