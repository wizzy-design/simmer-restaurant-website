import About from "./components/about";
import Hero from "./components/hero";
import Location from "./components/location";
import PopularMenu from "./components/popular-menu";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <About />
      <PopularMenu />
      <Location />
    </div>
  );
};

export default HomeScreen;
