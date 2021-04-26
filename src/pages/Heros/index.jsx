import React, { useState, useEffect } from 'react';

import Navbar from '../../components/Navbar';
import Card from '../../components/Card';

import '../../container/App/index.css';

import { useCaracters } from '../../redux/caracters'

const Heros = () => {
  const [filterByName, setFilterByName] = useState('');
  const [removedCaracters, setRemovedCaracters] = useState([]);

  const { caracters, getAllCaracters } = useCaracters();

  const removeCaracterById = (caracterId) => {
    setRemovedCaracters(removedCaracters => [...removedCaracters, caracterId])
  }

  const filterCaractersByName = (event) => {
    setFilterByName(event.target.value || '')
  }

  useEffect(() => {
    getAllCaracters()
  }, [])

  return (
    <div className="mainDiv">
      <Navbar />
      <div>
        <div className="row">
          <div className="input-field col s4">
            <input
              type="text"
              className="inputOfTheSearch validate"
              onChange={filterCaractersByName}
              placeholder="Pesquise um personagem"
              id="first_name"
            />
          </div>
        </div>
      </div>
      <div className="cards-container">
        <div className="wrapper">
          {
            caracters.data
            .filter(caracter => caracter.name.includes(filterByName))
            .filter(caracter => !(removedCaracters.includes(caracter.id)))
            .map(caracter => (
              <Card
                key={caracter.id}
                person={caracter}
                removePerson={removeCaracterById}
              />
              )
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Heros;
