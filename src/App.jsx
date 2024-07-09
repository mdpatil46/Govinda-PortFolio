import './App.css'
import NavBar from './component/NavBar'
import Main from './component/Main'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './component/Contact';
import Form from './form/Form';

function App() {
  return (
    <>
    <Router>
<div>
   <NavBar/>
   <Routes>
  <Route index Component={Main}/>
  <Route path='/Contact' Component={Contact}/>
  <Route path='/Form' Component={Form}/>
   </Routes>
</div>
    </Router>
    </>
  )
}

export default App
