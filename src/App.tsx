import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Main } from './pages/main/main';
import { Contact } from './pages/contact';
import { Login } from './pages/login';
import { CreatePost } from './pages/create-post/createPost';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/createpost' element={<CreatePost />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;