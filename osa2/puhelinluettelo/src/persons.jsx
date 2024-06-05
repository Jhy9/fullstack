const PersonForm=(props)=>{
  return( 
    <form onSubmit = {props.adder}>
        <div>
          name: <input
           value = {props.name}
           onChange= {props.nameChanger}
           />
        </div>
        <div>
          number: <input
           value = {props.number}
           onChange= {props.numberChanger}
           />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

  )
}

export default PersonForm
