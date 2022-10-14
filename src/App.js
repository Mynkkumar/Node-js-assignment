import logo from './logo.svg';
import './App.css';
import Form from './form/index';
import { useDispatch } from 'react-redux';
import { getPosts } from './redux/actions/posts';
import { useEffect, useState } from 'react';
import Posts from './posts/posts';

function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getPosts());
  }, [dispatch])
  return (
    <div className="App">
      <h1>Assignment</h1>
      <Form />
      <Posts />
    </div>
  );
}

export default App;
