import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'


export default function DelCard() {
  
  const goHome = useNavigate()

  const url = 'http://localhost:3005/cards'

  const getCards = async () => {
    const response = await axios.get(url);
    return response;
  };

  const [list, setList] = useState([]);
  
  useEffect(() => {
    getCards().then((response) => {
      setList(response.data);
    });
  }, []);
  
  const content = list.map((card) =>
  <div className='container'>
    <div className='card' key={card.id}>
      <h3>{card.name}</h3>
      <button onClick =
        {del => 
          {
            axios.delete(url+'/'+card.id).then((response) => 
            {if(response.status === 200)
              {alert(card.name +' deleted');goHome('/home')}
            });
          }
        }
      >DELETE</button>
    </div>
  </div>)

  return (
    <div>
      {content}
    </div>
  )
}