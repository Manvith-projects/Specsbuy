import "./App.css";

import Nav from "./Components/Nav";
import MegaMenu from "./Components/MegaMenu";  
import LandingBanner from "./Components/LandingBanner";
import NewArrivals from "./Components/NewArrivals";
import ShopByGender from "./Components/ShopByGender";
import FrameShape from "./Components/FrameShape";
import SmallBanners from "./Components/SmallBanners";
import BestSellers from "./Components/BestSellers";
import ShopByFace from "./Components/ShopByFace";
function App() {
  return (
    <div>
          <Nav />
          <MegaMenu />
          <LandingBanner />
          <NewArrivals />
          <ShopByGender />
          <FrameShape />
          <SmallBanners />
          <BestSellers />
          <ShopByFace />
    </div>
  );
}

export default App;
