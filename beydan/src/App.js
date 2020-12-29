import MessengerCustomerChat from 'react-messenger-customer-chat'

import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Herald from './components/Herald'
import Offer from './components/Offer'
import Shop from './components/Shop'
import Contact from './components/Contact'
import Menu from './components/Menu'

function App() {
  return (
    <>
      <Header />
      <Offer />
      <Menu />
      <Herald />
      <Shop />
      <Gallery />
      <Contact />
      <MessengerCustomerChat pageId='124009027931044' appId='742193349728923' />
      ,
    </>
  )
}

export default App
