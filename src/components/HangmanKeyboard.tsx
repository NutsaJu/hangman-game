import styled from "styled-components";
import styles from "./keyboard.module.css";

const Keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type HangmanKeyboardProps = {
  activeLetter: string[];
  inactiveLetters: string[];
  addGuessedLetters: (letter: string) => void;
  disabled: boolean;
};

const HangmanKeyboard = ({
  activeLetter,
  inactiveLetters,
  addGuessedLetters,
  disabled = false,
}: HangmanKeyboardProps) => {
  return (
    <KeyBoardWrapper>
      {Keys.map((key) => {
        const isActive = activeLetter.includes(key);
        const isInActive = inactiveLetters.includes(key);
        return (
          <button
            key={key}
            onClick={() => addGuessedLetters(key)}
            className={`${styles.keyboardBtn} ${
              isActive ? styles.active : ""
            } ${isInActive ? styles.inactive : ""}`}
            disabled={isInActive || isActive || disabled}
          >
            {key}
          </button>
        );
      })}
    </KeyBoardWrapper>
  );
};

export default HangmanKeyboard;

// styles for keyboard (ka and eng)
export const KeyBoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(55px, 1fr));
  gap: 0.5rem;
  padding: 10px;
  animation-name: keyboardColoring;
  animation-delay: 3.2s;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0%;
  @keyframes keyboardColoring {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(auto-fit, minmax(45px, 1fr));
  }
  @media (max-width: 520px) {
    grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
  }
  @media (max-height: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
  }
`;
