const Persons= (props) =>{
  const showNames=(props.pList).filter(person=> person.name.toLowerCase().search((props.filterV).toLowerCase())>= 0)
  return(
    <ul>
        {showNames.map(person =>
          <li key = {person.name}>
            {person.name} {person.number}
          </li>
        )}
      </ul>
  )
}

export default Persons
