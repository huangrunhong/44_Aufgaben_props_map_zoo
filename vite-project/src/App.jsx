
import './App.scss'
import AnimalsList from './assets/components/AnimalsList'
import animals from './assets/data/animals'


function App() {
  return (
    <>

     <section className='animalsGallery'>
     <h1>ZooPartyDB</h1>
    <h2>Explore the fascinating world of zoo animals!</h2>
      <AnimalsList animalsArr= {animals} />
     </section>
    </>
  )
}

export default App