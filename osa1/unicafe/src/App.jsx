import { useState } from 'react'

const Header = ({title}) => <h2>{title}</h2>

const Button = ({handleClick,text}) => (
  <button onClick= {handleClick}>
    {text}
  </button>
)
const Statistics =(props) => {
  const count =  props.feed.counts[0].count+props.feed.counts[1].count+props.feed.counts[2].count
  if (count == 0){
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
    <div>
      <table>
        <tbody>
          <StatisticLine text={props.feed.counts[0].feedback} value={props.feed.counts[0].count} /> 
          <StatisticLine text={props.feed.counts[1].feedback} value={props.feed.counts[1].count} /> 
          <StatisticLine text={props.feed.counts[2].feedback} value={props.feed.counts[2].count} /> 
          <StatisticLine text="all" value={count} /> 
          <StatisticLine text="average" value={(props.feed.counts[0].count-props.feed.counts[2].count)/count} /> 
          <StatisticLine text="positive" value={(props.feed.counts[0].count)/count*100} extra = "%" />
        </tbody>
      </table> 
    </div>
  )
}
const StatisticLine=(props)=>{
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value} {props.extra}</td>
    </tr>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const stats = {
    counts:[
      {feedback:'good', count:good},
      {feedback:'neutral', count:neutral},
      {feedback:'bad', count:bad},
    ]
  }

  const addGood=()=>setGood(good + 1)
 
  const addNeutral=()=>setNeutral(neutral + 1)

  const addBad=()=>setBad(bad + 1)
  
  return (
    <div>
      <Header title="give feedback"/>

      <p>
      <Button handleClick={addGood} text="good" />
      <Button handleClick={addNeutral} text="neutral" />
      <Button handleClick={addBad} text="bad" />
      </p>

      <Header title="statistics"/>
      
      <Statistics feed={stats}/>
    </div>
  )
}

export default App