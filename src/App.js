import './App.css';
import Luxury from './components/Luxury';
import Sedans from './components/Sedans';
import Suvs from './components/Suvs';
function App() {
  return (
    <div className="container">
      <Sedans heading="SEDAN" par="choose a sedan for 
      its affordability and exelent fuel economy. Ideal 
      for cruising in the city or on your next road trip"
      button="Learn more"
      />
      <Suvs heading="SUV" par="Take SUV it's spacious,intirior 
      and versatality. perfect for your next family vocation and
      off-road adventures"
      button="Learn more"
      />
      <Luxury
      heading="LUXURY" par="cruise in the best car brand without
      the broated prices. Enjoy the enhanced confort of a luxury
      rental and arrive in style"
      button="Learn more"
      />
    </div>
  );
}

export default App;
