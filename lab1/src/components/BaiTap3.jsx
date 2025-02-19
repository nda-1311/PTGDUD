import { useState } from "react"
import './BaiTap3.css'
const operations = ["+", "-", "*", "/"];
export default function BaiTap3(){
        const [a, setA] = useState('');
        const [b, setB] = useState('');
        const [operator, setOperator] = useState('');
        const [result, setResult] = useState(0);

        function handleChangeA(e){
            setA(e.target.value);
            
        }
        function handleChangeB(e){
            setB(e.target.value);
        }

        function SaveOperator(e){
            setOperator(e.target.value);
        }

        function TinhToan(){
        let res;
           switch(operator){
            case '+':
            res = parseInt(a) + parseInt(b);
            break;
            case '-':
             res = parseInt(a) - parseInt(b);
            break;
            case '*':
            res = parseInt(a) * parseInt(b);
            break;
            case '/':
            res = parseInt(a) / parseInt(b);
            break;
           }
           setResult(res);

        
        }
    return(
        <>
        <h3>Bài tập 3: Cộng trừ nhân chia</h3>
        <input type="text" onChange={handleChangeA} placeholder="Nhập a"/>
        <br />
        <input type="text" onChange={handleChangeB} placeholder="Nhập b"/>
        <br />
        <input onClick={SaveOperator}  type="radio" value="+"  name="group" />+
        <input onClick={SaveOperator}  type="radio" value="-" name="group" />-
        <input onClick={SaveOperator}  type="radio" value="*" name="group" />*
        <input onClick={SaveOperator}  type="radio" value="/" name="group" />/
     
        <br />
        <button onClick={TinhToan}>Tính</button>
        <br />
        <span>Kết quả phép tính là: {result}</span>
        </>
    )
 

}