import Button from "./components/ui/Button";
import Navbar from "./components/ui/Navbar";
import Hero from "./components/ui/Hero";
import Button1 from "./components/landing/Button1";
import Navbar1 from "./components/landing/Navbar1";
import Hero1 from "./components/landing/Hero1";
import Navbar2 from "./components/advance/Navbar2";
import Hero2 from "./components/advance/Hero2";

function App()
{

  return(
    <>
      <Navbar />
      <Hero />
     <Navbar1 />
      <Hero1 />
      {/* <Button1 /> */}
      <Navbar2 />
      <Hero2 />

     
    </>
  )
}
export default App;