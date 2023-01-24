import styled from "styled-components";

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal: boolean;
};

const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) => {
  return (
    <WordWrapper>
      {wordToGuess.split("").map((letters, index) => (
        <Letter key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letters) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letters) && reveal ? "red" : "white",
            }}
          >
            {letters}
          </span>
        </Letter>
      ))}
    </WordWrapper>
  );
};

export default HangmanWord;

// styles for word

const WordWrapper = styled.div`
  display: flex;
  gap: 0.25em;
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: monospace;
  color: white;
  @media (max-width: 750px) {
    font-size: 2.5rem;
  }
`;
const Letter = styled.div`
  border-bottom: 10px solid white;
  animation-name: letterColoring;
  animation-duration: 0.8s;
  animation-delay: 2.4s;
  opacity: 0%;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  @keyframes letterColoring {
    0% {
      border-width: 0px;
      opacity: 100%;
    }
    100% {
      border-width: 10px;
      opacity: 100%;
    }
  }
`;
