import "./App.css";

import Nav from "./Components/Nav";
import MegaMenu from "./Components/MegaMenu";  
import LandingBanner from "./Components/LandingBanner";
import NewArrivals from "./Components/NewArrivals";
import ShopByGender from "./Components/ShopByGender";

function App() {
  return (
    <div>
          <Nav />
          <MegaMenu />
          <LandingBanner />
          <NewArrivals />
          <ShopByGender />
    </div>
  );
}

export default App;
