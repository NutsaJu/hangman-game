import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import HangmanDrawing from "../components/HangmanDrawing";
import HangmanKeyboard from "../components/HangmanKeyboard";
import HangmanWord from "../components/HangmanWord";
import engWords from "../data/engWordList.json";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const EngHangMan: React.FC = () => {
  /* Define Word which will be guessed, Guessed Letters which will be an empty array and after user writes letter, we define incorrect
  letters*/
  const [wordToGuess] = useState(() => {
    return engWords[Math.floor(Math.random() * engWords.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  /* Define if user is winner or loser*/
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  /* Define funtion for adding guessed letters. We return guessed letters in our current  guessed letters' array */
  const addGuessedLetters = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );

  /* Define keyboard events, to work with keyboard, it updates when guessedLetters update */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetters(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters, addGuessedLetters]);

  return (
    <Wrapper>
      <TextWrapper>
        {isLoser && (
          <div>
            you lost :( to change language return to{" "}
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Button>Home</Button>
            </NavLink>
          </div>
        )}
        {isWinner && (
          <div>
            you win :) to change language return to{" "}
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Button>Home</Button>
            </NavLink>
          </div>
        )}
      </TextWrapper>
      <HangmanDrawing numbOfGuesses={incorrectLetters.length} />
      <HangmanWord
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
        reveal={isLoser}
      />
      <div style={{ alignSelf: "stretch" }}>
        <HangmanKeyboard
          activeLetter={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetters={addGuessedLetters}
          disabled={isWinner || isLoser}
        />
      </div>
    </Wrapper>
  );
};

export default EngHangMan;

// styles for Eng HangMan and Ka HangMan
export const Wrapper = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 0 auto;
  align-items: center;
  padding-inline: 10px;
`;

export const TextWrapper = styled.div`
  font-size: 20px;
  padding-top: 10px;
  text-align: center;
  color: white;
  text-transform: uppercase;
`;
