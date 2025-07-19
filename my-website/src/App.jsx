

import Logo from './components/Logo'
import NavLinks from './components/NavLinks'
import Button from './components/Button'

// import Test from './components/Test'

function App() {

  return (
    <>
      <header className='bg-white'>
        <nav className='container mx-auto p-3 border border-gray-600 flex justify-between items-center'>
          <Logo/><NavLinks/><Button/>
        </nav>
      </header>

      <main>
        <section></section>
      </main>
      {/* <Test/> */}
    </>
  )
}

export default App
