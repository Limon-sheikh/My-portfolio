
import { useState, useEffect } from "react";

const TypeWriter =({texts, typingSpeed, deletingSpeed, startDelay, endDelay}) =>{
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeStarted, setTypeStarted] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    // 🔹 Typing start delay
    if (!typeStarted) {
      timeout = setTimeout(() => {
        setTypeStarted(true);
      }, startDelay);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typingSpeed);
      }else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, endDelay);
      }
    } 
    else {
      // Deleting
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setTypeStarted(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, startDelay, typeStarted, endDelay]);

  return (
    <h4 className="text-lg text-primary md:text-2xl font-semibold  min-h-[32px] capitalize">
      {displayText}
      <span className="ml-1 animate-blink">|</span>
    </h4>
  );
};

export default TypeWriter;
