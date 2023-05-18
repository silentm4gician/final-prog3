import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function AddCard() {

  const goTo = useNavigate()

  const url = 'http://localhost:3005/cards'
  
  const [newCard, setNewCard] = useState({
    name: "",
    img:"",
    rarity: "",
    price:"",
  })

  const handleChange = (e) =>
  {
    setNewCard({...newCard,
      [e.target.name]: e.target.value,
    })
  }

  const addCard = async (e) =>
{
  e.preventDefault() //para que el navegador no se actualice con el submit
  
  const response = await axios.post(url, newCard)

  if(response.status === 201) 
  {
  alert(e.target.name.value +' added to the database');
  goTo('/home')
  }
}

  return (
    <div className='input'>
    <form onSubmit={addCard}>
    <br></br>
    <label>name: </label>
    <input placeholder='insert name' type='text' name='name' onChange={handleChange} required></input>
    <br></br>
    <label>image: </label>
    <input placeholder='insert image url' type='text' name='img' onChange={handleChange}></input>
    <br></br>
    <label>rarity: </label>
    <input placeholder='insert rarity' type='text' name='rarity' onChange={handleChange}></input>
    <br></br>
    <label>price: </label>
    <input placeholder='insert price' type='decimal' name='price' onChange={handleChange}></input>
    <br></br>
    <br></br>
    <button type='submit'>ADD</button>
    </form>
    </div>
  )
}

export default AddCard