
  const Filter =(props)=>{
    return(
      <div>
        <form>
          filter shown with 
          <input
            value = {props.fVal}
            onChange= {props.change}/>
        </form>
      </div>
    )}
    
export default Filter
