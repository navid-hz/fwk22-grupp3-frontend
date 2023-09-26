import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
      </header>
      <main>
        <Router>
          <Routes>
            <Route path="/" Component={BlogList} />
            <Route path="/:id" Component={BlogPost} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
