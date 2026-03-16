import React from 'react'
import { useState } from 'react'
function AddLauncher() {
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [rocketType, setRocketType] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    const submit = async () => {
        if (!name || !city || !rocketType || !latitude || !longitude) {
            alert("Please fill all fields")
        }
        const formData = new FormData()
        formData.append("name", name)
        formData.append("city", city)
        formData.append("rocketType", rocketType)
        formData.append("latitude", latitude)
        formData.append("longitude", longitude)
        try{    
            const response = await fetch("http://localhost:5000/api/launchers", {
                    method: 'POST',
                    body: formData
                })
            if (!response.ok) {
                throw new Error(response.status)
            }
            const result = await response.json()
            console.log(result)
            setName("")
            setCity("")
            setRocketType("")
            setLatitude("")
            setLongitude("")
        } catch(error) {
            console.error(error)
        }
    }

  return (
    <div className='add-launcher'>
        <h2>Create new launcher</h2>

        <div className='form-group'>
            <label>Launcher Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Launcher name...'/>
        </div>
        <div className='form-group'>
            <label>City</label>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='City...'/>
        </div>
        <div className='form-group'>
            <label>Rocket Type</label>
            <select value={rocketType} onChange={(e) => setRocketType(e.target.value)} >
                <option value="shahab3">Shahab3</option>
                <option value="fetah110">Fetah110</option>
                <option value="radwan">radwan</option>
                <option value="kheibar">Kheibar</option>
            </select>               
        </div>
        <div className='form-group'>
            <label>Latitude</label>
            <input type="text" placeholder='Latitude...(number)' value={latitude} onChange={(e) => setLatitude(e.target.value)}/>
        </div>
        <div className='form-group'>
            <label>Longitude</label>
            <input type="text" placeholder='Longitude...(number)' value={longitude} onChange={(e) => setLongitude(e.target.value)} />
        </div>

        <button className='create-launcher' onClick={submit}>
            Create launcher
        </button>

    </div>
  )
}

export default AddLauncher
