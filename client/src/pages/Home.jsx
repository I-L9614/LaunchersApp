import { useEffect, useState } from 'react'
import Launcher from '../components/Launcher.jsx'
import { Link } from 'react-router-dom'

function Home() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const respons = await fetch("http://localhost:5000/api/launchers")
                if (!respons.ok) {
                    throw new Error("HTTP error")
                }
                const result = await respons.json()
                setData(result.launchers)
            } catch(error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    },[])

    if (isLoading) {
        return <div className='loading'>Loadding data...</div>
    }
    if (error) {
        return <div className='error'>Error: {error}</div>
    }
    if (data.length === 0) {
        return <div className='no-data'>No data found</div>
    }
  return (
      <table>
        <tr>
            <th>Name</th>
            <th>City</th>
            <th>Rocket</th>
        </tr>
        <Link to='/launcher'>
            {data.map((launcher) => (
                <Launcher launcher={launcher}/>
            ))}
        </Link>
      </table>
  )
}

export default Home
