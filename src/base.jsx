import React, { useState } from 'react'

function Base() {
    let [str, setStr] = useState('Пусто') //вывод
    let [mat, setMat] = useState([]) //процесс
    let [sum, setSum] = useState('') //результат
    let [test, setTest] = useState([11,1,3])
    let [test2, setTest2] = useState(['-', '+', '+'])
    let [bool, setBool] = useState(false)

let m = [1,2,3].slice(1,2) //вернет первый еэелемент с первой позиции
//let b = m.splice(1,1) //если m, то вернет с первой поции 1 лемент, если b, то вернет все, кроме первой позиции первого элемента
console.log(m)


   function number (num) {
    let a = ''
    console.log(test2)
    if (test2.length >= test.length) {
        //setTest2([...test2].splice(test2.length-1, test2.length - test.length == 0 ? 1 : (test2.length - test.length)-1))
        setTest2([...test2].splice(2,1))
    // }
    }
    console.log(test2)
    test2.map ((x,i)=> {
            if (x === '+' ) {
                if (a == '') {
                    a = Number(test[i]) + Number(test[i+1])
                    console.log(a, test[i], i)
                }
                else {
                    console.log(a, i, test[i])
                    a = a + Number(test[i+1])
                    console.log(a, i)
                }
            }
            if (x === '-' ) {
                if (a == '') {
                    a = Number(test[i]) - Number(test[i+1])
                    console.log(a, test[i-1], test[i], i)
                }
                else {
                    console.log(a, i, test[i])
                    a = a - Number(test[i+1])
                    console.log(a, i)
                }
            }
            //console.log(x, i)
    })
    console.log(a)
   }
   number()
  
    return (
        <div>
            <div style={{margin: '10px'}}>{str}</div>
            <div><span style={{margin: '10px'}} onClick={(e)=>number([...mat, e.target.innerText])}>1</span><span style={{margin: '10px'}}>2</span><span style={{margin: '10px'}}>3</span><span style={{margin: '10px'}} onClick={(e)=>number([...mat, e.target.innerText])}>+</span></div>
            <div><span style={{margin: '10px'}} onClick={(e)=>number([...mat, e.target.innerText])}>4</span><span style={{margin: '10px'}}>5</span><span style={{margin: '10px'}}>6</span><span style={{margin: '10px'}} onClick={(e)=>number(e.target.innerText)}>-</span></div>
            <div><span style={{margin: '10px'}}>7</span><span style={{margin: '10px'}}>8</span><span style={{margin: '10px'}}>9</span><span style={{margin: '10px'}}>x</span></div>
            <div><span style={{margin: '10px'}}>0</span><span style={{margin: '10px'}}>/</span><span style={{margin: '10px'}} onClick={(e)=>number(e.target.innerText)}>=</span></div>
        </div>
    )
}

export default Base