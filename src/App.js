import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/common/Footer';
import Nav from './components/common/Nav';
import About from './pages/About';
import BlogTitles from './pages/BlogTitles';
import Contact from './pages/Contact';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:id' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/createpost' element={<CreatePost/>}/>
          <Route path='/post/:id' element={<Post/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router> 
    </>
  );
}

export default App;
