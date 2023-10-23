import React, { useEffect, useState } from 'react'

function Base() {
    let [str, setStr] = useState('Пусто') //вывод
    let [mat, setMat] = useState([]) //процесс
    let [sum, setSum] = useState('') //результат
    let [test, setTest] = useState([])
    let [test2, setTest2] = useState([])
    let [bool, setBool] = useState(false)

    let sss = ''
    let strr = ''
    let a = 0
    console.log(sss)

    function number(num) {


        if (test2.length >= test.length && test2.length > 0) {
            let s = [...test2]
            let m = s.splice(test.length - 1, test2.length - test.length + 1)
        }


        if (num !== '+' || num !== '-') {
            if (num !== undefined && num !== '+' & num !== '-' & num !== '=') {
                sss += num
                console.log('Сложение чисел')
            }
        }

        if (num == '+' || num == '-') {
            setTest([...test, sss])
            setTest2([...test2, num])
            console.log('Добавление числа и знака в массив')
        }


        if (num == '=') {
            if (test.length <= test2.length) {
                setTest([...test, sss])
            }
        }
        console.log(test, 'числа')
        console.log(test2, 'знак')
        console.log(num, 'получаемое значение')
        console.log(sss, 'строка чисел')
    }
    useEffect(() => {
        if (test.length > test2.length) {
            test2.map((x, i) => {
                if (x === '+') {
                    if (a == 0) {
                        a = 0
                        a = Number(test[i]) + Number(test[i + 1])

                    }
                    else {
                        a = Number(a) + Number(test[i + 1])
                    }
                }
                if (x === '-') {
                    if (a == 0) {
                        a = Number(test[i]) - Number(test[i + 1])
                    }
                    else {
                        a = Number(a) - Number(test[i + 1])
                    }
                }
            })
            for (let z = 0; z < test.length; z++) {
                if (z < test.length && test2[z] !== undefined) {
                    strr += String(test[z]) + String(test2[z])
                }
                else {
                    strr += String(test[z]) + '=' + String(a)
                }

            }
            console.log(a, 'Ответ') 
            console.log(strr, 'Решение')
            // setTest(a)
            // setTest2([])
        }
    }, [test])

    return (
        <div>
            <div style={{ margin: '10px' }}>{str}</div>
            <div><span style={{ margin: '10px' }} onClick={(e) => number(e.target.innerText)}>1</span><span style={{ margin: '10px' }}>2</span><span style={{ margin: '10px' }}>3</span><span style={{ margin: '10px' }} onClick={(e) => number(e.target.innerText)}>+</span></div>
            <div><span style={{ margin: '10px' }} onClick={(e) => number([...mat, e.target.innerText])}>4</span><span style={{ margin: '10px' }}>5</span><span style={{ margin: '10px' }}>6</span><span style={{ margin: '10px' }} onClick={(e) => number(e.target.innerText)}>-</span></div>
            <div><span style={{ margin: '10px' }}>7</span><span style={{ margin: '10px' }}>8</span><span style={{ margin: '10px' }}>9</span><span style={{ margin: '10px' }}>x</span></div>
            <div><span style={{ margin: '10px' }}>0</span><span style={{ margin: '10px' }}>/</span><span style={{ margin: '10px' }} onClick={(e) => number(e.target.innerText)}>=</span></div>
        </div>
    )
}

export default Base