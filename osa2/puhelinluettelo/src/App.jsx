import { useState } from 'react'

const PersonForm =(props)=>{
  return(
    <form onSubmit={props.addNumber}>
      <div>
        <p>name: 
          <input value = {props.name}
          onChange= {props.nameChanger}/>
        </p>
        <p>number: 
          <input value = {props.number}
          onChange= {props.numberChanger}/>
        </p>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )}

const PrintList=(props)=> {
  const toShow = props.persons.filter(entry => entry.name.toLowerCase().includes(props.filter.toLowerCase()))
  return (
    <ul>
      {toShow.map(entry => 
        <li key= {entry.name}>
          {entry.name} {entry.number}
        </li>
      )}
    </ul>
  )
}

const Filter=(props)=>{
  return(
    <p>filter shown with <input value={props.filter} onChange={props.filterChanger}/></p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterVal, changeFilter] = useState('')

  const addNumber=(event)=>{
    event.preventDefault()
    const newP = {name: newName, number:newNumber}
    const cont = (persons.filter(entry=> entry.name === newName).length > 0)
      ? alert(`${newName} is already added to phonebook`)
      :setPersons(persons.concat(newP))
  }

  const handleNameChange=(event)=> setNewName(event.target.value)
  const handleNumberChange=(event)=> setNewNumber(event.target.value)
  const handleFilterChange=(event)=> changeFilter(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filterVal} filterChanger={handleFilterChange}/>
      <h2>add new</h2>
      <PersonForm number={newNumber} name={newName} nameChanger={handleNameChange} numberChanger={handleNumberChange} addNumber={addNumber}/>
      <h2>Numbers</h2>
      <PrintList persons={persons} filter={filterVal}/>
    </div>
    
  )
}

export default App