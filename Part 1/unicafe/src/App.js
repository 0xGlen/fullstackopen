import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.buttonText}
  </button>
)

const StatisticLine = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      <td>
      <tr><StatisticLine text="good:" value = {props.good}/></tr>
      <tr><StatisticLine text="neutral:" value = {props.neutral}/></tr>
      <tr><StatisticLine text="bad:" value = {props.bad}/></tr>
      <tr><StatisticLine text="all:" value = {props.all}/></tr>
      <tr><StatisticLine text="average:" value = {props.average}/></tr>
      <tr><StatisticLine text="positive:" value = {props.positive}/></tr>
      </td>
    </div>
  )

} 

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(() => 0)
  const [neutral, setNeutral] = useState(() => 0)
  const [bad, setBad] = useState(() => 0)

  const increaseGoodByOne = () => setGood(prevGood => prevGood + 1)
  const increaseNeutralByOne = () => setNeutral(prevNeutral => prevNeutral + 1)
  const increaseBadByOne = () => setBad(prevBad => prevBad + 1)

  const all = good + neutral + bad
  const average = (good * 1 + neutral * 0 + bad * -1)/all
  const positive = (good/all)*100 + '%'

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {increaseGoodByOne} buttonText ='good' />
      <Button handleClick = {increaseNeutralByOne} buttonText ='neutral' />
      <Button handleClick = {increaseBadByOne} buttonText ='bad' />
      {all == 0 ? <p>No feedback given</p> : <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>}
    </div>
  )
}

export default App