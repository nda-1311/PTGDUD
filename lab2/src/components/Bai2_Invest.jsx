import React, { useState } from "react";
export default function Bai2_Invest() {
  const [a, setA] = useState(""); // Tiền đầu tư
  const [b, setB] = useState(""); // Lãi suất
  const [c, setC] = useState(""); // Mục tiêu
  const [result, setResult] = useState(null); // Kết quả tính toán theo từng năm

  function handleChangeA(e) {
    setA(e.target.value);
  }

  function handleChangeB(e) {
    setB(e.target.value);
  }

  function handleChangeC(e) {
    setC(e.target.value);
  }

  function handleCalculate() {
    const money = parseInt(a); 
    const rate = parseInt(b) / 100; 
    const goal = parseInt(c); 

    // Kiểm tra 
    if (isNaN(money) || isNaN(rate) || isNaN(goal)) {
      alert("Vui lòng nhập đúng số cho tất cả các trường.");
      return;
    }

    let year = 2024; 
    let currentAmount = money; 
    const resultData = [];

    // Tính toán theo từng năm cho đến khi đạt mục tiêu
    while (currentAmount < goal) {
      let EndYearAmount = currentAmount + (currentAmount * rate); // Tính số tiền cuối năm (bao gồm lãi)

      // Kiểm tra nếu số tiền cuối năm đã đạt hoặc vượt qua mục tiêu
      if (EndYearAmount >= goal) {
        break; 
      }

      year++;
      resultData.push({
        year: year,
        money: currentAmount.toFixed(0), 
        rate: (rate * 100).toFixed(0), 
        endYear: EndYearAmount.toFixed(0), 
      });

      currentAmount = EndYearAmount; 
    }

    setResult(resultData); 
  }

  return (
    <div>
        <img src="./src/assets/invest.jpg" alt="" />
      <h2>Bài 2: Tính Toán Đầu Tư</h2>
      <label htmlFor="txta">Nhập số tiền đầu tư</label>
      <input
        id="txta"
        value={a}
        onChange={handleChangeA}
        type="text"
        placeholder=""
      />
      <br />
      <label htmlFor="txtb">Nhập lãi suất: </label>
      <input
        id="txtb"
        value={b}
        onChange={handleChangeB}
        type="text"
        placeholder=""
      />
      <br />
      <label htmlFor="txtc">Nhập mục tiêu: </label>
      <input
        id="txtc"
        value={c}
        onChange={handleChangeC}
        type="text"
        placeholder=""
      />
      <br />
      <br />
      <button onClick={handleCalculate}>Tính</button>
      <br />

<br />
      {result && result.length > 0 && (
        <table border="1">
          <thead>
            <tr>
              <th>Year</th>
              <th>Money</th>
              <th>Rate</th>
              <th>End Year</th>
            </tr>
          </thead>
          <tbody>
            {result.map((data, index) => (
              <tr key={index}>
                <td>{data.year}</td>
                <td>{data.money}</td>
                <td>{data.rate}</td>
                <td>{data.endYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
