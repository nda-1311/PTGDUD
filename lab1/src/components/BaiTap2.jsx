export default function BaiTap2() {
  return (
    <div>
      <h1>Bài tập 2</h1>
      <span>Number a: </span>
      <input id="num1" type="number" />
      <br />
      <span>Number b: </span>
      <input id="num2" type="number" />
      <br />
      <button
        onClick={() => {
          document.getElementById("result").innerHTML =
            parseFloat(document.getElementById("num1").value) +
            parseFloat(document.getElementById("num2").value);
        }}
      >
        Calculate
      </button>
      <br />
      <span>Result: </span>
      <span id="result"></span>
    </div>
  );
}
