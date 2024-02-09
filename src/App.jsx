import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import KeywordSection from './components/KeywordSection'
import LinkSection from './components/LinkSection'
import Quotes from './components/Quotes'
import SignUp from './components/SignUp'

function App() {
  return (
    <main className='bg-bg'>
    <Header />
    <Hero />
    <KeywordSection />
    <LinkSection />
    <Quotes />
    <SignUp />
    </main>
  )
}

export default App
