import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Blogs from './component/Blogs/Blogs';
import Dashboard from './component/Dashboard/Dashboard';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Homebody from './component/HomeBody/HomeBody';
import NotFound from './component/NotFound/NotFound';
import Reviews from './component/Reviews/Reviews';
function App() {
  return (
    <div >
      <div className='title'>
        <h2>Welcome to our Product review website</h2>
        <Header className="NavBar"></Header>
      </div>
      <Routes>
        <Route path='/' element={<Homebody></Homebody>} />
        <Route path='/Home' element={<Homebody></Homebody>} />
        <Route path='/Reviews' element={<Reviews></Reviews>} />
        <Route path='/Dashboard' element={<Dashboard></Dashboard>} />
        <Route path='/Blogs' element={<Blogs></Blogs>} />
        <Route path='/About' element={<About></About>} />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
