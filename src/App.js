import React, { useState } from "react";
import styled from "styled-components";
import PageLayout from "./containers/PageLayout";

const TicTacToeGrid = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3em;
`;

const Row = styled.div`
  display: flex;
`;

const GameInformation = styled.div`
  font-family: sans-serif;
  font-size: 2em;
  line-height: 2em;
`;

const Cell = styled.button`
  height: 10em;
  width: 10em;
  outline: none;
  background: #b8b8d6;
  cursor: pointer;
  :hover {
    border-color: #57cc57;
  }
`;

const Value = styled.span`
  color: black;
  font-size: 1.5em;
`;

const hasEmptyCells = cellValues => {
  for (let index = 0; index < cellValues.length; index++) {
    const cellValue = cellValues[index];
    if (cellValue === null) {
      return true;
    }
  }
  return false;
};

const hasWinner = cellValues => {
  const winningMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let index = 0; index < winningMatrix.length; index++) {
    const [x1, x2, x3] = winningMatrix[index];
    if (
      cellValues[x1] &&
      cellValues[x1] === cellValues[x2] &&
      cellValues[x1] === cellValues[x3]
    ) {
      return true;
    }
  }
  return false;
};

function App() {
  const [cellValues, setCellValues] = useState(Array(9).fill(null));
  const [isX, toggleX] = useState(true);
  const nextValue = isX ? "❌" : "O";
  const hasWon = hasWinner(cellValues);

  const Block = ({ index }) => (
    <Cell
      id={index}
      key={index}
      onClick={() => {
        if (cellValues[index] !== null || hasWon) {
          return;
        }
        const updatedCellValues = [...cellValues];
        updatedCellValues[index] = nextValue;
        setCellValues(updatedCellValues);
        toggleX(!isX);
      }}
    >
      <Value>{cellValues[index]}</Value>
    </Cell>
  );

  const gameInformation = () => {
    if (hasWon) {
      return (
        <GameInformation>
          <div>Better luck next time {nextValue}</div>
          <Cell
            style={{ height: "5em" }}
            onClick={() => setCellValues(Array(9).fill(null))}
          >
            Restart
          </Cell>
        </GameInformation>
      );
    } else if (hasEmptyCells(cellValues)) {
      return <GameInformation>Your Turn {nextValue}</GameInformation>;
    } else {
      return (
        <GameInformation>
          <Cell
            style={{ height: "5em" }}
            onClick={() => setCellValues(Array(9).fill(null))}
          >
            Restart
          </Cell>
        </GameInformation>
      );
    }
  };

  return (
    <PageLayout>
      <TicTacToeGrid>
        <Row>
          <Block index={0} />
          <Block index={1} />
          <Block index={2} />
        </Row>

        <Row>
          <Block index={3} />
          <Block index={4} />
          <Block index={5} />
        </Row>

        <Row>
          <Block index={6} />
          <Block index={7} />
          <Block index={8} />
        </Row>
      </TicTacToeGrid>
      {gameInformation()}
    </PageLayout>
  );
}

export default App;
