import ContactCard from './components/Contactcard/ContactCard';
import Pullout from './components/Pullout/Pullout';

export default function App() {
  return (
    <div>
      <div id="Card" className="flex w-screen justify-center items-center">
        <ContactCard />
      </div>
      <Pullout />
    </div>
  );
}
