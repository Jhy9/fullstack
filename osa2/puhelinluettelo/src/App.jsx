import { useState, useEffect } from 'react'
import Filter from './filter'
import PersonForm from './persons'
import Persons from './personlist'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilter] = useState('')

  const hook =() =>{
    axios
      .get('http://localhost:3001/persons').then(response => {
      console.log('data fetched')
      setPersons(response.data)
      })
  }
  useEffect(hook,[])
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
