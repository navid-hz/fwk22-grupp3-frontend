import React from 'react'
import './App.css';
import BlogList from './components/BlogList'
import BlogPost from './components/BlogPost'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Welcome</h1>
      </header>
      <main>
        <BlogList />
      </main>
    </div>
  )
}

export default App;
