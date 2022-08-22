import { useState } from 'react'
import { Navbar } from './components/Navbar'
import './App.css'
import { SubjectsComp } from './components/Subjects'
import { Divider } from './components/Divider'
import { News } from './components/News'

function App() {
  const [search, setSearch] = useState('')
  const [subject, setSubject] = useState('')

  console.log({ subject })

  return (
    <div className="App">
      <div className="navbar">
        <Navbar setSearch={setSearch} />
        <Divider />
        <SubjectsComp setSubject={setSubject} subject={subject} />
        <Divider />
        <News subject={subject} />
      </div>
    </div>
  )
}

export default App
