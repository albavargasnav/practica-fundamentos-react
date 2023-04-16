import AdvertisementsPage from './components/advertisements/AdvertisementsPage.js';

import './App.css';
import Button from './components/shared/Button';

function App() {
  return <div className="App">
    {/* aqui se muestra cada anuncio */}
    <AdvertisementsPage/>
    <Button variant="secondary" onClick={event => console.log(event)}>
        Click me!
      </Button>
      <Button variant="primary" onClick={event => console.log(event)}>
        Click me!
      </Button>
      <Button variant="primary" disabled onClick={event => console.log(event)}>
        Click me!
      </Button>
  </div>;
}

export default App;
