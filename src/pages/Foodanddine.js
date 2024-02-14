
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hotelfilters from '../components/foodanddine/Hotelfilters'
import Hotelcontainer from '../components/foodanddine/Hotelcontainer'

import '../styles/foodanddine.css'
const Foodanddine = () => {
  return (
    <>
    <Header></Header>
    <div className='hotel-wrapper'>
    <div className='hotel-80'>
    <h1 className='hotel-title'>Food and dine</h1>
    <div className='foodwrapper'>
    <Hotelfilters/>
    <Hotelcontainer/>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Foodanddine