import React from "react";
import clsx from "clsx";

interface ButtonProps {
    text: string;
    title: string;
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Button: React.FC<ButtonProps> = ({ text, title, selected, setSelected }) => {

    return (
      <button className={clsx(selected === title ? "card-button-active" : "card-button", "Text-Base-Medium")} onClick={() => setSelected(title)}>
        {text}
      </button>
    )
};

export default Button;
