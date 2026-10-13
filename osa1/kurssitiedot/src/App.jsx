const Header = (props) => {
  return(
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) =>{
  return(<>
    <p>{props.p.parts[0].name} {props.p.parts[0].exercises}</p>
    <p>{props.p.parts[1].name} {props.p.parts[1].exercises}</p>
    <p>{props.p.parts[2].name} {props.p.parts[2].exercises}</p>
    </>
  )
}

const Total= (props) =>{
    return(
      <p>Number of exercises {props.p.parts[0].exercises+props.p.parts[1].exercises+props.p.parts[2].exercises}</p>
    )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content p={course}/>
      <Total p={course}/>
    </div>
  )
}

export default App