import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tang, Giam, incrementByAmount } from './TangGiamSlice';

function TangGiam() {
  const count = useSelector((state) => state.tangGiam.value); // Sửa key
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('0'); // Thêm state

  return (
    <div>
      <h2>Counter: {count}</h2>
      <div>
        <button onClick={() => dispatch(Tang())}>+</button>
        <button onClick={() => dispatch(Giam())}>-</button>
      </div>
      <div>
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}

export default TangGiam;