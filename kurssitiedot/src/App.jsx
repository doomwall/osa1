const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
        {props.otsikko}
      </h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.kurssi} {props.maara}
      </p>
    </div>
  )
}


const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Number of exercises {props.yhteensa}
      </p>
    </div>
  )

}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  

  return (
    <div>
      <Header otsikko={course} />

      <Content kurssi={part1} maara={exercises1}/>
      <Content kurssi={part2} maara={exercises2}/>
      <Content kurssi={part3} maara={exercises3}/>

      <Total yhteensa={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App