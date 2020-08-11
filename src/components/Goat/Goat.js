import React from 'react';
import './Goat.scss';

class Goat extends React.Component {
  render() {
    const { goat } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={goat.imgUrl} alt="one goat" />
        <div className="card-body">
          <h5 className="card-title">{goat.name}</h5>
          <p className="card-text">{goat.age}</p>
        </div>
      </div>
    );
  }
}

export default Goat;
