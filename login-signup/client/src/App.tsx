import { useState, useEffect } from 'react'
import './App.css'

function App() {
	const [users, setUsers] = useState([])
	const [button, setButton] = useState('Press me!')

	const fetchAPI = async () => {
		const res = await fetch('http://localhost:8089/users')
		const data = await res.json()
		setUsers(data.users)
		console.log(data.users)
	}

	function getRandomUser() {
		const arrLen = users.length;
		const index = Math.floor(Math.random() * arrLen)

		setButton(`User: ${users[index]}`)
	}

	useEffect(() => {
		fetchAPI()
	}, [])


  return (
    <>
      <div>
		<h2>Press the button to get a user</h2>
        <button onClick={getRandomUser}>
        	{button}
        </button>
      </div>
    </>
  )
}

export default App
