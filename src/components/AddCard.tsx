import Button from "./Button";
import { KeyboardEvent, useState } from "react";

type Props = {
  onAdd: (input: string) => void;
};

export const AddCard = ({ onAdd }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const addCard = () => {
    onAdd(inputValue);
    setInputValue("");
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      addCard();
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        className="input-text"
        onKeyPress={handleKeyPress}
      ></input>
      <Button onClick={addCard} text={"Add Card"} />
    </div>
  );
};
