import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Square(props){
  return(
    <button className="square" onClick={props.onClick}>
        {props.value}
    </button>
  );
}

class Scaffold extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rows: 6,
      cols: 6
    };
  }
  render(){
    return(
      <div className="scaffold">
        {Array(this.state.rows).fill(<div> {Array(this.state.cols).fill(<Square />)} </div>)}
      </div>
    )
  }
}


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 4,
      cols: 4
    };
  }
  render(){
    return(
      <div className="game">
        <div className="game-scaffold">
          <Scaffold />
        </div>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Game/>
);
