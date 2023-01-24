import React, { useState, useEffect, useCallback } from "react";
import kaWords from "../data/kaWordList.json";
import HangmanDrawing from "../components/HangmanDrawing";
import HangmanWord from "../components/HangmanWord";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import KaKeyboard from "../components/kaKeyboard";
import { Wrapper, TextWrapper } from "./engHangMan";

const KaHangMan: React.FC = () => {
  /* Define Word which will be guessed, Guessed Letters which will be an empty array and after user writes letter, we define incorrect
  letters*/
  const [wordToGuess, setWordToGuess] = useState(() => {
    return kaWords[Math.floor(Math.random() * kaWords.length)];
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
      if (!key.match(/[\u10A0-\u10FF]/)) return;
      e.preventDefault();
      addGuessedLetters(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  return (
    <Wrapper>
      <TextWrapper>
        {isLoser && (
          <div>
            თქვენ წააგეთ :( ენის შესაცვლელად გადადით{" "}
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Button>მთავარი</Button>
            </NavLink>{" "}
            გვერდზე{" "}
          </div>
        )}
        {isWinner && (
          <div>
            თქვენ მოიგეთ :) ენის შესაცვლელად გადადით{" "}
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Button>მთავარი</Button>
            </NavLink>{" "}
            გვერდზე{" "}
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
        <KaKeyboard
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

export default KaHangMan;
