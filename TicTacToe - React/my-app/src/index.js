import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// class Square extends React.Component {
//
//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onclick()}>
//         { this.props.value }
//       </button>
//     );
//   }
// }

function Square(props) {
  return (
    <button className="square" onClick={props.onclick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         squares: Array(9).fill(null),
    //         xIsNext: true,
    //     }
    // }

    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onclick={() => this.props.onClick(i)}
            />
        )
    }

    render() {
        // const winner = calculateWinner(this.state.squares);
        // let status;
        // if(winner) {
        //     status = "Winner is: " + winner;
        // } else {
        //     status = 'Next player: ' + (this.state.xIsNext ? "X" : "O");
        // }

        return (
            <div>
                <div className="status"></div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            history: [{
                    squares: Array(9).fill(null)
                }],
            xIsNext: true,
        };
    }

    handleClick(i) {
        const history = this.state.history;
        console.log(history);
        const current = history[history.length - 1];
        var currentSquares = current.squares.slice();

        if(currentSquares[i] === null && !calculateWinner(currentSquares)) {

            currentSquares[i] = (this.state.xIsNext ? "X" : "O");
            history.push({squares: currentSquares});
            this.setState({
                history: history
                // [{
                //     squares: currentSquares,
                // }]
                ,
                xIsNext: !this.state.xIsNext
            });
        }
    }

  render() {
      const history = this.state.history;
      var currentSquares = history[history.length - 1].squares.slice();
      var winner = calculateWinner(currentSquares);
      let status;
      if(winner) {
          status = "Winner is: " + winner;
      } else {
          status = 'Next player: ' + (this.state.xIsNext ? "X" : "O");
      }

    return (
      <div className="game">
        <div className="game-board">
          <Board
                squares = {currentSquares}
                onClick = {(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>
            
          </ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (var i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] !== null && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
