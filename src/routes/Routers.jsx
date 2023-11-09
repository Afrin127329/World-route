import About from '../pages/About';
import DestinationDetails from '../pages/Destinations/DestinationDetails';
import Destinations from '../pages/Destinations/Destinations';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

import { Route, Routes } from 'react-router-dom';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/destinations' element={<Destinations />} />
      <Route path='/destinations/:id' element={<DestinationDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
    </Routes>
  )
}

export default Routers