import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    // On AWS, Nginx will route '/api' requests to our Node server
    fetch('/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.text))
      .catch(err => setMessage('Error connecting to backend'))
  }, [])

  return (
    <div>
      <h1>Vite + Node.js on AWS ( Github Action )</h1>
      <p>Status: <strong>{message}</strong></p>
    </div>
  )
}
export default App
