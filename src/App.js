
import './App.css';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Friend from './component/Friends/Friend';
import Extra from './component/extra/Extra';
import { Route, Routes } from 'react-router-dom';
import NotFound from './component/not found/NotFound';
import Posts from './component/Posts/Posts';
import Post from './component/Post/Post';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Friend' element={<Friend></Friend>}></Route>
        <Route path='/Posts' element={<Posts></Posts>}>
            <Route path=':PostID' element={<Post></Post>}></Route>
        </Route>
        
        <Route path='/Extra' element={<Extra></Extra>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
     
     
     
    </div>
  );
}

export default App;
