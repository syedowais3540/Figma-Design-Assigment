import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from './components/navbar';
import Sponsors from './components/sponsors';
import YourWork from "./components/yourwork";




export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <YourWork/>
      <Sponsors/>
      <Footer/>
    </div>
  );
}
