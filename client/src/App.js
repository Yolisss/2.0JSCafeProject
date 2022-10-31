import "./App.css";
import NavBar from "./components/nav-bar";
import Students from "./components/students";
import { useAuth0 } from '@auth0/auth0-react';
import Loading from "./components/loading";
import { Route, Routes } from 'react-router-dom';

function App() {

  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  console.log(user);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
      {!user ? <a>Hello from Techtonica</a> : <a>Hello, {user.name}</a> }
      <Routes>
      <Route path="/" element={<Students/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
