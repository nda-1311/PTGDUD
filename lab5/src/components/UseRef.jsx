import React, { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Truy cập vào DOM element và làm cho nó nhận focus
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus vào input</button>
    </div>
  );
};

export default FocusInput;
