import React, { useState } from 'react';
import Button from './Button';

// Convert to functional component (from class component)
function GuessControl({ onGuess }) {
  // state
  const [currentGuess, setCurrentGuess] = useState('');

  // handler
  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  // callback
  const onSubmitGuess = () => {
    onGuess(Number(currentGuess));
    setCurrentGuess('');
  };

  return (
    <div>
      <input type='number' value={currentGuess} onChange={handleInputChange} />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}

export default GuessControl;
