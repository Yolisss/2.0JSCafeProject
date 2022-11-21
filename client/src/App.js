import "./App.css";
import SiteHeader from "./components/nav-bar";
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
import { Sliderdata } from "./components/sliderdata";

function App() {
  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }

  //navbarlist also includes log out button
  return (
    <div id="app" className="d-flex flex-column h-100">
      <div>
        <Navbarlist />
      </div>
      <div className="container flex-grow-1">
        <Routes>
          <Route path="/" element={<Home user={user} slides={Sliderdata} />} />
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
