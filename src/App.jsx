import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button variant="outline-primary">Primary</Button>
    </>
  )
}

export default App
