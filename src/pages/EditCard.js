import React from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios';
import {useEffect, useState} from 'react'

function EditCard() 
{
  const goTo = useNavigate();

  const url = 'http://localhost:3005/cards'

  const getCards = async () => {
    const response = await axios.get(url);
    return response;
  };

  const [list, setList] = useState([]);
  const [card, setCard] = useState({
    name: "",
    img:"",
    rarity: "",
    price:"",
  })

  useEffect(() => {
    getCards().then((response) => {
      setList(response.data);
    });
  }, []);

  const handleSel = (e) => 
  {
    const sel = list.find(card => card.name === e.target.value);

    setCard({
      id: sel.id,
      name: sel.name,
      img: sel.img,
      rarity: sel.rarity,
      price: sel.price,
    })

    return console.log(sel)
  }

  const handleChange = (e) => 
  {
    setCard({...card, [e.target.name]: e.target.value,})
  }

  const edit = async (e) =>
  { e.preventDefault();
    const res = await axios.put(url+'/'+card.id,card)
    if(res.status === 200){alert('card edited!')}
    goTo('/home')
  }

  return (
    <div className='input'>
      <select className='select' onChange={handleSel}>
        {list.map(card => <option key={card.id}>{card.name}</option>)}
      </select>

    <form onSubmit={edit}>
    <br></br>
    <label>name: </label>
    <input value={card.name} type='text' name='name' onChange={handleChange}></input>
    <br></br>
    <label>image: </label>
    <input value={card.img} type='text' name='img' onChange={handleChange}></input>
    <br></br>
    <label>rarity: </label>
    <input value={card.rarity} type='text' name='rarity' onChange={handleChange}></input>
    <br></br>
    <label>price: </label>
    <input value={card.price} type='decimal' name='price' onChange={handleChange}></input>
    <br></br>
    <br></br>
    <button type='submit'>EDIT</button>
    </form>
    </div>
  )
}

export default EditCard