import styles from "../components/keyboard.module.css";
import { KeyBoardWrapper } from "./HangmanKeyboard";

const Keys = [
  "ა",
  "ბ",
  "გ",
  "დ",
  "ე",
  "ვ",
  "ზ",
  "თ",
  "ი",
  "კ",
  "ლ",
  "მ",
  "ნ",
  "ო",
  "პ",
  "ჟ",
  "რ",
  "ს",
  "ტ",
  "უ",
  "ფ",
  "ქ",
  "ღ",
  "ყ",
  "შ",
  "ჩ",
  "ც",
  "ძ",
  "წ",
  "ჭ",
  "ხ",
  "ჯ",
  "ჰ",
];

type HangmanKeyboardProps = {
  activeLetter: string[];
  inactiveLetters: string[];
  addGuessedLetters: (letter: string) => void;
  disabled: boolean;
};

const KaKeyboard = ({
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

export default KaKeyboard;
