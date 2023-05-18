import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import Filter from './Filter';

function CardList() {
  
  const goTo = useNavigate();

  const url = 'http://localhost:3005/cards'
  
  const getCards = async () => {
    const response = await axios.get(url);
    return response;
  };

  const [list, setList] = useState([]);

  useEffect(() => {
    getCards().then((response) =>
    {
      setList(response.data);
    });
  }, []);

  const content = list.map((card) =>
  <div className='container' key={card.id}>
    <div className='card' key={card.id}>
      <h3>{card.name}</h3>
      <img alt='notFOUND' width='100%' src={card.img}></img>
      <p>{card.rarity}</p>
      <label>price: ${card.price}</label>
      <br></br>
      <button onClick =
        {del => 
          {
            axios.delete(url+'/'+card.id).then((response) => 
            {if(response.status === 200)
              {alert(card.name +' deleted');
              window.location.reload()
              }
            });
          }
        }
      >DELETE</button>
      <button name={card.name} onClick= 
      {search => window.location.href = 'https://www.cardmarket.com/es/YuGiOh/Cards/'+card.name}
      >CHECK STOCK</button>
      <button onClick={edit => {goTo('/edit')}}>EDIT</button>
    </div>
  </div>)

  return (
    <div>
      <div className='cajaFiltro'>
      <Filter></Filter>
      </div>
      <h4 className='sep'>-----------------------------------------------------------------------------------------------------------------------------------------------------------</h4>
      <div className='contenedor'>
      {content}
      </div>
    </div>
  )
}

export default CardList