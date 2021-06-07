import React, { useState } from 'react'




const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total)* 100


  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick = {() => setGood(good + 1)} text = "Good"/>
      <Button handleClick ={() => setNeutral(neutral + 1)} text = "Neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text = "Bad"/>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} total= {total} average = {average} positive={positive}/>
    </div>
  )
}


const Stat = (props) => {
  console.log(props)
  return (
     <div>
       {props.name} {props.value} {props.percentage}
     </div> 
  )
}

const Statistics = (props) => {
  console.log(props)
  if ( props.total === 0) {
    return <p>Waiting for feedback...</p>;
  }
  return (
     <div>
      <Stat name = "good" value = {props.good}/>
      <Stat name = "neutral" value = {props.neutral} />
      <Stat name = "bad" value = {props.bad}/>
      <Stat name = "total" value = {props.total} />
      <Stat name = "average" value = {props.average} />
      <Stat name = "positive" value = {props.positive} percentage = "%" />
     </div> 
  )
}

const Button = (props) => {
  console.log(props)
  return (
     <button onClick = {props.handleClick}>
       {props.text}
     </button>
  )
}

export default App
