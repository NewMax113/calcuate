import React, { useEffect, useState } from 'react'
import css from './base.module.css'


function Base() {
    let [str, setStr] = useState('Пусто') //вывод
    let [mat, setMat] = useState('') //процесс
    let [test, setTest] = useState([])
    let [test2, setTest2] = useState([])
    let [text, setText] = useState('')

    let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    let sign = ['+', '-', 'x', '/', '=']
    let NumberOutput = num.map((val, i) => <div><span className={css.btn} onClick={(e) => number(e.target.innerText)}>{val}</span></div>)
    let SignOutput = sign.map((val, i) => <div><span className={css.btn} onClick={(e) => number(e.target.innerText)}>{val}</span></div>)

    let [sss, setSss] = useState('')
    let strr = ''
    let a = 0

    function number(num) {



        // if (test2.length >= test.length && test2.length > 0 ) {
        //     let s = [...test2]
        //     let m = s.splice(test.length - 1, test2.length - test.length + 1)
        //     console.log('sh')
        // }
        if (num !== '+' || num !== '-' || num !== 'x' || num !== '/') {
            if (num !== undefined && num !== '+' & num !== '-' & num !== '=' & num !== 'x' & num !== '/') {
                console.log('отработало при вводе')
                setSss(() => sss + num)
                setText(text + num)
            }
        }

        if (num == '+' || num == '-' || num == 'x' || num == '/') {
            if (sss === '') {
                if (test2.length > 0) {
                    test2[test2.length - 1] = num
                    setTest2(test2)
                    let ss = text.split('')
                    ss[text.length - 1] = num
                    let zz = ss.join('')
                    setText(zz)
                    // setText(text)
                    //setText(text.split('')[text.length-1]=num)
                    // setText(text)
                }
            } else {
                if (sss.length > 0) {
                    setTest([...test, sss])
                    setTest2([...test2, num])
                    setText(text + num)
                    setSss('')
                    console.log('ddd')//проверить 
                }
                else {
                    setTest([...test, sss])
                    setText(text + num)
                    setSss('')
                }

            }
        }
        console.log('723'.length)
        if (num == '=') {
            if (test.length <= test2.length) {
                setTest([...test, sss])
                console.log('отработало при равно')
            }
        }
        console.log(test, 'числа')
        console.log(test2, 'знак')
        console.log(num, 'получаемое значение')
        console.log(sss, 'строка чисел')
    }

    useEffect(() => {
        if (test.length > test2.length && test2.length > 0) {
            let test2cop = [...test2]
            let testcop = [...test]
            let mas = []
            let plus_and_minus = 0
            let n
            for (let i = 0; i <= test2.length; i++) {
                if (i < test2.length) {
                    if (test2[i] === '+' || test2[i] === '-') {
                        plus_and_minus += 1
                        mas.push(test2[i])
                    } else {
                        if (test2[i] === 'x') {
                            n = testcop[plus_and_minus] * testcop[1 + plus_and_minus]
                            testcop.splice(plus_and_minus, 2, n)
                            test2cop.splice(plus_and_minus, 1)
                        } else if (test2[i] === '/') {
                            console.log(testcop)
                            n = testcop[plus_and_minus] / testcop[1 + plus_and_minus]
                            test2cop.splice(plus_and_minus, 1)
                            testcop.splice(plus_and_minus, 2, n)
                        }
                    }
                } else {
                    if (mas.length > 0) {
                        mas.map((x, i) => {
                            if (x === '+') {
                                if (a == 0) {
                                    a = 0
                                    a = Number(testcop[i]) + Number(testcop[i + 1])
                                }
                                else {
                                    a = Number(a) + Number(testcop[i + 1])
                                }
                            }
                            if (x === '-') {
                                if (a == 0) {
                                    a = Number(testcop[i]) - Number(testcop[i + 1])
                                }
                                else {
                                    a = Number(a) - Number(testcop[i + 1])
                                }
                            }
                        })
                    } else {
                        test2.map((x, i) => {
                            if (x === 'x') {
                                if (a == 0) {
                                    a = Number(test[i]) * Number(test[i + 1])
                                }
                                else {
                                    a = Number(a) * Number(test[i + 1])
                                }
                            }
                            if (x === '/') {
                                if (a == 0) {
                                    a = Number(test[i]) / Number(test[i + 1])
                                }
                                else {
                                    a = Number(a) / Number(test[i + 1])
                                }
                            }
                        }
                        )
                    }

                }
                // if (test2cop[i] === 'x' || test2cop[i] === '/') {
                //     if (test2cop[i] === 'x') {
                //         n = testcop[i] * testcop[i+1]
                //         testcop.splice(i, 2, n)
                //         test2cop.splice(i, 1)
                //         console.log(testcop)
                //         console.log(test2cop)
                //     } else {
                //         console.log(testcop)
                //         n = testcop[i] / testcop[i+1]
                //         test2cop.splice(i, 1)
                //         testcop.splice(i, 2, n)
                //     }

                // } else {

                // }

            }
            console.log(testcop)
            // test2.map((x, i) => {


            //     if (x === '+') {
            //         if (a == 0) {
            //             a = 0
            //             a = Number(test[i]) + Number(test[i + 1])
            //         }
            //         else {
            //             a = Number(a) + Number(test[i + 1])
            //         }
            //     }
            //     if (x === '-') {
            //         if (a == 0) {
            //             a = Number(test[i]) - Number(test[i + 1])
            //         }
            //         else {
            //             a = Number(a) - Number(test[i + 1])
            //         }
            //     }
            //     if (x === 'x') {
            //         if (a == 0) {
            //             a = Number(test[i]) * Number(test[i + 1])
            //         }
            //         else {
            //             a = Number(a) * Number(test[i + 1])
            //         }
            //     }
            //     if (x === '/') {
            //         if (a == 0) {
            //             a = Number(test[i]) / Number(test[i + 1])
            //         }
            //         else {
            //             a = Number(a) / Number(test[i + 1])
            //         }
            //     }
            // })
            for (let z = 0; z < test.length; z++) {
                if (z < test.length && test2[z] !== undefined) {
                    strr += String(test[z]) + String(test2[z])
                }
                else {
                    strr += String(test[z]) + '=' + String(a)
                    console.log(a)
                    setSss(() => String(a))
                    setTest([])//ошибка
                    setTest2([])
                    //setText(text + '=' + String(a))
                    setText(String(a))
                }

            }
            setStr(`Ответ: ${a}`)
            setMat(`Решение: ${strr}`)
            console.log(a, 'Ответ')
            console.log(strr, 'Решение')
            console.log(sss, 'строка')
            console.log('test:', test, 'test2:', test2)
        }

    }, [test])

    function clear() {
        setStr('Пусто') //вывод
        setMat('') //процесс
        setTest([])
        setTest2([])
        setText('')

        setSss('')
        strr = ''
        a = 0
    }

    function erase() {
        if (sss.length > 0) {
            console.log(num)
            if (num == '+' || num == '-' || num == 'x' || num == '/' || num == '=') {
                setSss('')
            } else {
                setSss('')
            setText('')
            }
        }
        else {
            if (text.length > 0) {
                setText('')
            } else {
                if (test.length > test2.length && test.length > 0) {
                    let er = test.pop()
                    setTest(er)
                } else {
                    let er = test2.pop()
                    setTest2(er)
                }
            }

        }


    }

    return (
        <div className={css.form}>
            <div style={{ margin: '10px', color: 'white' }}>{str}</div>
            <div style={{ margin: '10px', color: 'white' }}>{mat}</div>
            <div style={{ margin: '10px', color: 'white' }}>{sss}</div>
            <div style={{ margin: '10px', color: 'white' }}>{text}</div>

            <div className={css.gr}>
                <div className={css.btn} onClick={() => clear()}>Удалить</div>
                <div className={css.btn} onClick={() => erase()}>Стереть</div>
                {NumberOutput}
                {SignOutput}
            </div>


    //         {/* <div ><span className={css.btn} onClick={(e) => number(e.target.innerText)}>1</span><span style={{ margin: '10px' }} onClick={(e) => number(e.target.innerText)}>2</span><span style={{ margin: '10px' }} onClick={(e) => number(e.target.innerText)}>3</span><span style={{ margin: '10px' }} onClick={(e) => number(e.target.innerText)}>+</span></div>
    //         <div><span style={{ margin: '10px' }} onClick={(e) => number(e.target.innerText)}>4</span><span style={{ margin: '10px' }} onClick={(e) => number(e.target.innerText)}>5</span><span style={{ margin: '10px' }} onClick={(e) => number(e.target.innerText)}>6</span><span style={{ margin: '10px' }} onClick={(e) => number(e.target.innerText)}>-</span></div>
    //         <div><span style={{ margin: '10px' }} onClick={(e) => number(e.target.innerText)}>7</span><span style={{ margin: '10px' }} onClick={(e) => number(e.target.innerText)}>8</span><span style={{ margin: '10px' }} onClick={(e) => number(e.target.innerText)}>9</span><span style={{ margin: '10px' }} onClick={(e) => number(e.target.innerText)}>x</span></div>
    //         <div><span style={{ margin: '10px' }} onClick={(e) => number(e.target.innerText)}>0</span><span style={{ margin: '10px' }} onClick={(e) => number(e.target.innerText)}>/</span><span style={{ margin: '10px' }} onClick={(e) => number(e.target.innerText)}>=</span></div> */}
    //     </div>
    )



}

export default Base