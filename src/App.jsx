import ContactCard from './components/Contactcard/ContactCard';
import Pullout from './components/Pullout/Pullout';
export default function App() {
  return (
    <div className='bg-yellow-300'>
      <div id="Card" className="flex w-screen justify-center items-center">
        <ContactCard />
      </div>
      <Pullout></Pullout>

    </div>
  );
}