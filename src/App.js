import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from './components/Banner';
import FAQ from './components/Faq';
import MyComponent from './components/SelectDays';
import Feed from './components/FeedBack';
import Footer from './components/Footer';
import CarouselComponent from './components/DemoSection';
import HowItWorksComponent from './components/HowitWorks';



function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <HowItWorksComponent/>
      <CarouselComponent />
      <Feed />

      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
