import "./App.css";
import NavBar from "./components/nav-bar";
import Profile from "./components/profile";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/loading";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pageviews/login-page";
import Favdrinksform from "./components/favdrinksform";
import HotCoffeeData from "./components/hotcoffee";
import IceCoffeeData from "./components/icecoffee";
import Navbarlist from "./components/navbarlist";
import Coffeefacts from "./components/coffeefacts";

function App() {
  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        {!user ? (
          <span>Hello from Techtonica</span>
        ) : (
          <>
            <span>
              Hello <Link to="api/me">{user.name}</Link>
            </span>
            <Navbarlist />
          </>
        )}
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          {/* //conditional rendering: if this is true, make this appear, if false do nothing  */}

          {user && (
            <>
              {/* //this will allow to change the nav bar state  */}
              <Route path="/hotcoffee" element={<HotCoffeeData />} />
              <Route path="/icecoffee" element={<IceCoffeeData />} />
              <Route path="/coffeefacts" element={<Coffeefacts />} />
              <Route path="/mydrinks" element={<Favdrinksform />} />
            </>
          )}
          {/* //when the user goes to the hot coffee page, we tell the home components
          to display hot coffee list  */}

          <Route path="api/me" element={<Profile user={user} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
