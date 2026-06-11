import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <h1>Travel Explorer</h1>

      <p>
        Discover amazing destinations
        around the world.
      </p>

      <Link
        to="/destinations"
        className="hero-btn"
      >
        Explore Now
      </Link>
    </section>
  );
}

export default Home;