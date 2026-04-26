import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import RSVP from './pages/RSVP';
import Wishes from './pages/Wishes';
import './index.css';

export default function App() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 64 }}>
        <Home />
        <RSVP />
        <Wishes />
      </main>
      <Footer />
    </>
  );
}
