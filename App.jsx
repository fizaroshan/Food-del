import Navbar from './components/Navbar/Navbar';
import{ Route, Routes} from 'react-router-dom'
import Home from './pages/home';
import Cart from './pages/home/cart/cart';
const App = () => {
  return(
    <div className='app'>
<Navbar/>
<Routes> 
  <Route path='/' element={<Home/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/order' element={<placeOder/>}/>
</Routes>
    </div>
  )
  }
  export default App
