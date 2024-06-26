import { useState } from 'react'

const Button = ({handleClick,text}) => (
  <button onClick= {handleClick}>
    {text}
  </button>
)

const Header = ({title}) => <h2>{title}</h2>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, voteFor] = useState(new Array(anecdotes.length).fill(0))
  const [mostVotes, changeBest] = useState(0)

  const randomAnecdote=()=>{
    const size = anecdotes.length
    setSelected(Math.floor(Math.random()*size))
  }

  const vote =(index)=>{  
    const handler= ()=>{
      const copy = [...votes]
      copy[index] += 1
      if (copy[index] > copy[mostVotes]) changeBest(index)
      voteFor(copy)
    }
    return handler
  }

  return (
    <div>
      <Header title = "Anecdote of the day"/>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <p><Button handleClick={vote(selected)} text="vote" />
      <Button handleClick={randomAnecdote} text="next anecdote" /></p>
      <Header title = "Anecdote with most votes"/>
      <p>{anecdotes[mostVotes]}</p>
      <p>has {votes[mostVotes]} votes</p>
    </div>
  )
}

export default App