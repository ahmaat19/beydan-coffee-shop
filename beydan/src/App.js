import MessengerCustomerChat from 'react-messenger-customer-chat'

import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Herald from './components/Herald'
import Offer from './components/Offer'
import Shop from './components/Shop'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Header />
      <Offer />
      <Herald />
      <Shop />
      <Gallery />
      <Contact />
      <Footer />
      <MessengerCustomerChat pageId='124009027931044' appId='742193349728923' />
      ,
    </>
  )
}

export default App
