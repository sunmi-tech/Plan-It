import './styles/global.scss'
import './styles/reset.scss'
import NavBar from './components/Navbar'
import Menu from './components/Menu'
import { Routes, Route } from 'react-router-dom'
import Todo from './pages/Todo'
import Month from './pages/Month'
import Note from './pages/Note'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <Menu></Menu>
      <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
        <Route path='/todo' element={<Todo></Todo>}></Route>
        <Route path='/month' element={<Month></Month>}></Route>
        <Route path='/note' element={<Note></Note>}></Route>
      </Routes>
    </div>
  )
}

export default App
