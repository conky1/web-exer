import React, { useState } from 'react'

const App = () => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([0, 0, 0, 0, 0, 0])


  const randomAnecdote = () => {
    const selected = Math.floor(Math.random() * anecdotes.length)
    setSelected(selected)

  }
  const voting = () => {
    const votesCopy = [...vote]
    votesCopy[selected] += 1
    setVote(votesCopy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br></br>
      <button onClick={voting}> Vote </button>
      <button onClick={randomAnecdote} > Generate</button>
      <p>Has {vote[selected]} votes.</p>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[vote.indexOf(Math.max(...vote))]}</p>
      <p> has {Math.max(...vote)} votes.</p>
    </div >
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


export default App