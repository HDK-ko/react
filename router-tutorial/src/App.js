import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Articles from './Articles';
import Article from './Article';
import Layout from './Layout';
import NotFound from './NotFound';
import Login from './Login';
import MyPage from './MyPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout/>}>
          <Route index path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/info" element={<About/>}/>
          <Route path="/profiles/:username" element={<Profile/>}/>
        </Route>
        <Route path="/articles/" element={<Articles/>}>
          <Route path=":id" element={<Article/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/myPage" element={<MyPage/>}/>
        <Route path="*" element={<NotFound/>}/>
        {/* <Route path="/articles/:id" element={<Article/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
