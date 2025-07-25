import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex items-center justify-center'>
      <Counter/>
    </div>
  )
}

export default App
