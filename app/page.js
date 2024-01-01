import Hero from './hero/page';
import Footer from './components/Footer/footer';
import Nav from './components/Navigation/nav';

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
}
