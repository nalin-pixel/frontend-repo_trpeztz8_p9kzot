import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedGigs from "./components/FeaturedGigs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedGigs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
