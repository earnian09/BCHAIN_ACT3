
import './App.css'
// import ChoresList from './components/ChoresList'
// import MovieList from './components/MovieList'
// import BookList from './components/Booklist'

import ShinyButton from './components/Conditional-Demo-1.JSX'
import IsRainy from './components/Conditional-Demo-2'
import Yes from './components/Conditional-Demo-3'
import Ohyes from './components/Conditional-Demo-3'

const title = "LAB ACTIVITY 3";

function App() {
  
  return(
    <>
      <div className='card bg-gray'>
        <div className='card-Item'>
          <h2>Conditional Demo 1</h2>
          <ShinyButton />
        </div>

        <div className='card-Item'>
          <h2>Conditional Demo 2</h2>
          <IsRainy />
        </div>

        <div className='card-Item'>
          <h2>Conditional Demo 3</h2>
          <Yes />
        </div>

        <div className='card-Item'>
          <h2>Conditional Demo 4</h2>
          <Ohyes />
        </div>



      </div>
      
        
















        
      
    </>
  )
}

export default App
