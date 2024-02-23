import './App2.css'
import ContactForm from './ContactForm/ContactForm'
import ContactHeader from './ContactHeader/ContactHeader'
import Navigation from "./Navigation/Navigation"

const App2 = () => {
  return (
    <>
      <Navigation/>
      <main className='main_container'>
      <ContactHeader/>
      <ContactForm/>
      </main>
    </>
  )
}

export default App2
