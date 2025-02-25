import './styles/global.scss'
import './styles/reset.scss'
import NavBar from './components/Navbar'
import Menu from './components/Menu'
import { Routes, Route, useParams } from 'react-router-dom'
import Todo from './pages/Todo'
import Month from './pages/Month'
import Note from './pages/Note'
import Dashboard from './pages/Dashboard'

function TodoPage() {
  const { id } = useParams(); 

  return (
    <>
      <Menu menuType="todo" />
      {id && <Todo />}
    </>
  );
}

function App() {

  return (
    <div className='App'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
        <Route path='/todo/:id?' element={<TodoPage></TodoPage>}>
        </Route>
        <Route path='/month/:id?' element={
          <>
          <Menu menuType="month"></Menu>
          <Month></Month>
          </>
          }>
        </Route>
        <Route path='/note/:id?' element={
          <>
          <Menu menuType='note'></Menu>
          <Note></Note>
          </>
          }>
        </Route>
      </Routes>
    </div>
  )
}

export default App
