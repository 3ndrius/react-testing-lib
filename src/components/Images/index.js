import React, { useState, useReducer } from 'react'
import axios from 'axios'
const initialState = {
  error: null,
  greeting: null,
}

function greetingReducer(state, action) {
  switch (action.type) {
    case 'SUCCESS': {
      return {
        error: null,
        title: action.greeting,
      }
    }
    case 'ERROR': {
      return {
        error: action.error,
        title: null,
      }
    }
    default: {
      return state
    }
  }
}

export default function Images(props) {
  const [{ error, title }, dispatch] = useReducer(
    greetingReducer,
    initialState
  )
  const [buttonClicked, setButtonClicked] = useState(false)

  const fetchGreeting = async () => {
    axios
      .get(props.url)
      .then(response => {
        const { data } = response
        dispatch({ type: 'SUCCESS', title: data.title })
        setButtonClicked(true)

      })
      .catch(error => {
        dispatch({ type: 'ERROR', error })
      })
  }

  const buttonText = buttonClicked ? 'Ok' : 'Load Data'

  return (
    <div>
      <button onClick={fetchGreeting} disabled={buttonClicked}>
        {buttonText}
      </button>
      {title && <h1>{title}</h1>}
      {error && <p role="alert">Oops, failed to fetch!</p>}
    </div>
  )
}