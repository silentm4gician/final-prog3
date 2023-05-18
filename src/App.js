import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import NavBar from "./components/NavBar"
import NotFound from './pages/NotFound';
import AddCard from './pages/AddCard';
import DelCard from './pages/DelCard';
import EditCard from './pages/EditCard';
import Filter from './components/Filter';


function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/home' element={<Main></Main>}></Route>
        <Route path='/add' element={<AddCard></AddCard>}></Route>
        <Route path='/del' element={<DelCard></DelCard>}></Route>
        <Route path='/edit' element={<EditCard></EditCard>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
        <Route path='/filter' element={<Filter></Filter>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
