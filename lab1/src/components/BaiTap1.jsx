import React, { useState } from 'react';

function BaiTap1() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  function handleOnChange(e) {
    setText(e.target.value);
  }

  function handleOnClick() {
    setResult(text);
  }

  return (
    <div className='calculator'>
      <div className="input-group">
        <input
          type="text"
          onChange={handleOnChange}
          placeholder='Nhập tên của bạn'
        /> 
        <br />
        <button onClick={handleOnClick} >
          Click
        </button>
        <br />
        <span> Welcome: {result}</span>
      </div>
    </div>
  );
}

export default BaiTap1;
