import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Filter() {

    const url = 'http://localhost:3005/cards'

    const getCards = async () => {
    const response = await axios.get(url);
    return response;
    };

    const [list, setList] = useState([]);
    const [rareza,setRareza] = useState();

    useEffect(() => 
    {
    getCards().then((response) => {
        setList(response.data);
    });
    }, []);

    const fill = []

    const rarity = (e) => 
    {
        setRareza(e.target.id)
    }

    const filter = list.map(card =>
        {
            if(card.rarity === rareza)
            {
                fill.push(card)
            }
        })

    const content = fill.map(card =>
    <div className='container'>
        <div className='card' key={card.id}>
        <h3>{card.name}</h3>
        <button name={card.name} onClick= 
            {search => window.location.href = 'https://www.cardmarket.com/es/YuGiOh/Cards/'+card.name}
        >VIEW</button>
        </div>
    </div>)

    return (
    <div>
        <h2 className='blue'>Filter by Rarity</h2>
        <ul>
            <li onClick={rarity} id="Normal">NORMAL</li>
            <li onClick={rarity} id="Rare">RARE</li>
            <li onClick={rarity} id="Super Rare">SUPER</li>
            <li onClick={rarity} id="Ultra Rare">ULTRA</li>
        </ul>
        <div>
            {content}
        </div>
    </div>
    )
}

export default Filter