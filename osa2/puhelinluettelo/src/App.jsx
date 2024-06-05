import { useState } from 'react'
import Filter from './filter'
import PersonForm from './persons'
import Persons from './personlist'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilter] = useState('')

  const addName=(event)=>{
    event.preventDefault()
    const person ={
      name: newName,
      number: newNumber
    }
    if(persons.map(per => per.name).includes(newName)){
      alert(`${newName} is already added to phonebook`)
    } else{
      setPersons(persons.concat(person))
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange=(event)=>{
    setNewName(event.target.value)
  }
  const handleNumberChange=(event)=>{
    setNewNumber(event.target.value)
  }
  const handleFilterChange=(event)=>{
    setFilter(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter fVal={filterValue} change= {handleFilterChange}/>

      <h2>add a new</h2>
      <PersonForm adder={addName} name={newName} number={newNumber} nameChanger={handleNameChange} numberChanger={handleNumberChange}/>

      <h2>Numbers</h2>
      <Persons pList={persons} filterV={filterValue}/>
    </div>
  )

}

export default App
