import './App.css'
import NavBar from './component/NavBar'
import Main from './component/Main'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './component/Contact';

function App() {
  return (
    <>
    <Router>
<div>
   <NavBar/>
   <Routes>
  <Route index Component={Main}/>
  <Route path='/Contact' Component={Contact}/>
   </Routes>
</div>
    </Router>
    </>
  )
}

export default App
