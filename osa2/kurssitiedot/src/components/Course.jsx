const Course = (course) =>
  <div>
    <Header name={course.name}/>
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
  </div>

const Header = (props) => <h2>{props.name}</h2>

const Content = (props) =>
  <ul>
    {props.parts.map(part =>
      <li key = {part.id}>
        <Part name={part.name} exercises={part.exercises} />
      </li>
    )}
  </ul>

const Part = (props) => <p>{props.name} {props.exercises}</p>

const Total=(props) => <b>total of {exSum(props.parts)} exercises </b>

const exSum=(parts)=>parts.reduce((sum,part) => sum+part.exercises,0)

export default Course