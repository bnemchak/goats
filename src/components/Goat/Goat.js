import React from 'react';
import PropTypes from 'prop-types';

import goatShape from '../../helpers/propz/goatShape';

import './Goat.scss';

class Goat extends React.Component {
  static propTypes ={
    goat: goatShape.goatShape,
    takeAGoat: PropTypes.func,
  }

  takeGoatEvent = (e) => {
    e.preventDefault();
    const { goat, takeAGoat } = this.props;
    takeAGoat(goat.id);
  };

  freeGoatEvent = (e) => {
    e.preventDefault();
    const { goat, freeAGoat } = this.props;
    freeAGoat(goat.id);
  }

  render() {
    const { goat } = this.props;
    return (
      <div className="card bg-dark text-light border-0">
      <img className="card-img-top" src={goat.imgUrl} alt="one specific goat" />
      <div className="card-body">
        <h5 className="card-title text-uppercase">{goat.name}</h5>
        <p className="card-text">This goat is {goat.age} years old and wants you to know: {goat.description}</p>
      </div>
      <div className="card-footer">
        {
          goat.isTaken ? (
            <button className="btn btn-info" onClick={this.freeGoatEvent}>FREE THE GOAT</button>
          ) : (
            <button className="btn btn-warning" onClick={this.takeGoatEvent}>TAKE THE GOAT</button>
          )
        }
      </div>
      </div>
    );
  }
}

export default Goat;
