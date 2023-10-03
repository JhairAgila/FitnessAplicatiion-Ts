import Navbar from '@/scenes/Navbar/index'
import { useEffect, useState } from 'react'
import {SelectedPage} from '../src/shared/types';
import Home from '@/scenes/Home';
import Benefits from '@/scenes/Benefits';
import OurClasses from '@/scenes/OurClasses';
import ContactUs from '@/scenes/ContactUs';
import Footer from '@/scenes/Footer'
function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0 ){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY !== 0){
        setIsTopOfPage(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  return (
    <div className="app bg-gray-20 bg-gray-50">
      <Navbar
        isTopOfPage = {isTopOfPage}
        selectedPage = {selectedPage}
        setSelectedPage = {setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />

    </div>
  )
}

export default App
