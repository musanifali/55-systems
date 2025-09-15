import React, { useState, useEffect } from 'react';

const TextTyper = ({ words, delay, deleteDelay, loop }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      handleTyping();
    }, delay);

    return () => {
      clearTimeout(typingTimer);
    };
  }, [currentWordIndex, currentCharIndex, isDeleting]);

  const handleTyping = () => {
    const word = words[currentWordIndex];
    const char = word.charAt(currentCharIndex);

    if (isDeleting) {
      setDisplayText(word.substring(0, currentCharIndex));
      setCurrentCharIndex((prevIndex) => prevIndex - 1);
    } else {
      setDisplayText(word.substring(0, currentCharIndex + 1));
      setCurrentCharIndex((prevIndex) => prevIndex + 1);
    }

    if (isDeleting && currentCharIndex === 0) {
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }

    if (!isDeleting && currentCharIndex === word.length) {
      setIsDeleting(true);
      setTimeout(() => {
        setIsDeleting(false);
      }, deleteDelay);
    }
  };

  return <span>{displayText}</span>;
};

export default TextTyper;
