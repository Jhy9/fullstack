const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Total = ({parts}) => {
  return <h3>total of {parts.reduce((sum, {exercises})=>sum+exercises,0)} exercises</h3>
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      <ul>
        {parts.map(part1=>
          <li key= {part1.id}>
            <Part part={part1.name} exercises={part1.exercises}/>
          </li>
        )}
      </ul>
    </div>
  )
}

const Course = ({course}) => {
  return(
    <div>
      <ul>
        {course.map(course1=>
          <li key= {course1.id}>
            <Header course={course1.name}/>
            <Content parts={course1.parts}/>
            <Total parts={course1.parts}/>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Course