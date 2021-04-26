import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useCaracters } from '../../../redux/caracters'

const ListDetails = ({ title, list }) => {
  return (
    <fieldset>
      <legend><h5>{title}</h5></legend>
      <ul>
        {
          list.items.map((item, index) => <li key={index}>{item.name}</li>)
        }
      </ul>
    </fieldset>
  );
}

const DetailsCard = ({ match }) => {
  const { caracter, getCaracterById } = useCaracters();

  useEffect(() => {
    const caracterId = match.params.id;
    getCaracterById(caracterId);
  }, [])

  return (
    <div>
    <Link to="/" ><button type="submit" className="buttonPageInitial" >Pagina inicial</button></Link>
    <div>
      <div className="titleDetails">
        <h2>Detalhes do personagem</h2>
      </div>
      <div className="dataDetails">
        {
          caracter.data.map((element, i) =>
            <div key={i}>
              <ListDetails title="Historias em quadrinhos" list={element.comics} />
              <ListDetails title="Filmes" list={element.series} />
              <ListDetails title="Historias" list={element.stories} />
            </div>
          )
        }
      </div>
    </div>
  </div>
  )
}

ListDetails.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
}

DetailsCard.propTypes = {
  match: PropTypes.object
}

export default DetailsCard;
