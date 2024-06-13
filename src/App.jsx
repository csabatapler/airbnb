import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import data from "./Data.js"

function App() {

  const cardElements = data.map(item => {
    console.log(item)  
    return <Card 
      key={item.id} 
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      country={item.location}
      title={item.title}
      price={item.price}
    />
  
    }
  )


  return (
    <div>
      <Navbar/>
      <Hero/>
      {cardElements}
    </div>
  )
}

export default App
