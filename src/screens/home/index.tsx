import About from "./components/about";
import Hero from "./components/hero";
import Location from "./components/location";
import PopularMenu from "./components/popular-menu";
import Testimonials from "./components/testimonials";
import Reservations from "./components/reservations";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <About />
      <PopularMenu />
      <Testimonials />
      <Location />
      <Reservations />
    </div>
  );
};

export default HomeScreen;
