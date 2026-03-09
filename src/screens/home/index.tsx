import About from "./components/about";
import Hero from "./components/hero";
import Location from "./components/location";
import PopularMenu from "./components/popular-menu";
import Testimonials from "./components/testimonials";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <About />
      <PopularMenu />
      <Testimonials />
      <Location />
    </div>
  );
};

export default HomeScreen;
