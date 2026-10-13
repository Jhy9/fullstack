import { useState } from 'react'


const Statistics = (props) => {
  if(props.total === 0){
    return (
      <div>No feedback given</div>
    )
  } else{
    return(
      <table> 
        <tbody>
          <StatisticsLine text="good" value={props.good}/>
          <StatisticsLine text="neutral" value={props.neutral}/>
          <StatisticsLine text="bad" value={props.bad}/>
          <StatisticsLine text="average" value={(props.good-props.bad)/(props.total)}/>
          <StatisticsLine text="positive" value={props.good/props.total*100} t2="%"/>
        </tbody>
      </table>
    )
  }
}
const StatisticsLine=(props)=>{return (<tr><td>{props.text}</td><td>{props.value} {props.t2}</td></tr>)}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const Feedback = (review) =>()=>{
    if(review == 'good'){
      setGood(good+1)
    }else if(review == 'bad'){
      setBad(bad+1)
    } else{
      setNeutral(neutral+1)
    }
    setTotal(total+1)
  }
  const Button=(props)=>{return(<button onClick={Feedback(props.fb)}>{props.fb}</button>)}

  return (
    <div>
      <h1>give feedback</h1>
      <Button fb ='good'/>
      <Button fb ='neutral'/>
      <Button fb ='bad'/>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} total={total}/>
    </div>
  )
}

export default App