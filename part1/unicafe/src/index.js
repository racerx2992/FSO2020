import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({good, bad, neutral, all}) => {
  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  else {
    return (
      <table>
        <tbody>
          <tr>
            <Statistic text='good' value={good} />
          </tr>
          <tr>
            <Statistic text='neutral' value={neutral} />
          </tr>
          <tr>
            <Statistic text='bad' value={bad} />
          </tr>
          <tr>
            <Statistic text='all' value={all} />
          </tr>
          <tr>
            <Statistic text='average' value={(good - bad) / all} />
          </tr>
          <tr>
            <Statistic text='positive' value={(good / all) * 100 + ' %'} />
          </tr>
        </tbody>
      </table>
    )
  }
}

const Statistic = ({text, value}) => (
  <>
    <td>{text}</td><td>{value}</td>
  </>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
  }
  const neutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const badClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodClick} text='good' />
      <Button handleClick={neutralClick} text='neutral' />
      <Button handleClick={badClick} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
