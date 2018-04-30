import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardDetails from './CardDetails';

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
              data.map((element, i) => {
                console.log(element)
                return(
                <div key={i}>
                    <CardDetails title="Historias em quadrinhos" list={element.comics} />
                    <CardDetails title="Filmes" list={element.series} />
                    <CardDetails title="Historias" list={element.stories} />
                </div>)}
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default MakeSearchDetail;
