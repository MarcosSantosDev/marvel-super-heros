import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MakeList from './MakeList';

class MakeSearchDetail extends Component {
  render() {
    const { data } = this.props;
     return (
      <div>
        <Link to="/" ><button type="submit" className="buttonPageInitial" >Pagina inicial</button></Link>
        <div id="mainCard" >
        <div className="titleDetails">
          <h2>Detalhes do personagem</h2>
        </div>
          <div className="dataDetails">
            {
              data.map((element, i) =>
                <div key={i}>
                    <MakeList title="Historias em quadrinhos" list={element.comics} />
                    <MakeList title="Filmes" list={element.series} />
                    <MakeList title="Historias" list={element.stories} />
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default MakeSearchDetail;
