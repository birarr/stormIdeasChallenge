import { useState } from 'react'
import { Navbar } from './components/Navbar'
import './App.css'
import { CategoriesComp } from './components/Categories'
import { Divider } from './components/Divider'
import { News } from './components/News'

function App() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Top story')

  return (
    <div className="App">
      <div className="navbar">
        <Navbar setSearch={setSearch} />
        <Divider />
        <CategoriesComp setCategory={setCategory} category={category} />
        <Divider />
        <News category={category} search={search} />
      </div>
    </div>
  )
}

export default App
