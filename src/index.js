import React, { useState } from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form";
import CardList from "./components/CardList";
import RemoveButton from "./components/RemoveButton";

const App = () => {
  const [cards, setCards] = useState([]);

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo));
  };

  const removeLastCard = () => {
    let ncards = cards.slice();
    ncards.pop();
    setCards(ncards);
  };

  return (
    <div>
      <h1>GitHub users app</h1>
      <Form onSubmit={addNewCard} />
      <RemoveButton onClick={removeLastCard} />
      <CardList cards={cards} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
