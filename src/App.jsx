import { BrowserRouter } from "react-router-dom";

import { Navbar, StarsCanvas } from "./components";
import Ear from "./components/Ear";
import Mer from "./components/Mer";
import Ven from "./components/Ven";
import Mar from "./components/Mar";
import Jupi from "./components/Jupi";
import Sat from "./components/Sat";
import Ura from "./components/Ura";
import Nep from "./components/Nep";
import Su from "./components/Su";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>
        <div className='relative z-0'>
        <Su/>
          <Mer />
          <Ven/>
        <Ear />
        <Mar />
        <Jupi />
        <Sat />
        <Ura />
        <Nep/>
        <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;