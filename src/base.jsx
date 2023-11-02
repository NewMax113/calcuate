import React, { useEffect, useState } from 'react'
import css from './base.module.css'


function Base() {
    let [mat, setMat] = useState('') //процесс
    let [test, setTest] = useState([])
    let [test2, setTest2] = useState([])
    let [text, setText] = useState('0')

    let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    let sign = ['+', '-', 'x', '/', '=']
    let NumberOutput = num.map((val, i) => <div><span className={css.btn} onClick={(e) => number(e.target.innerText)}>{val}</span></div>)
    let SignOutput = sign.map((val, i) => <div><span className={css.btn} onClick={(e) => number(e.target.innerText)}>{val}</span></div>)

    let [sss, setSss] = useState('')
    let strr = ''
    let a = 0
    let ziro = '0'

    function number(num) {
        if (num !== '+' || num !== '-' || num !== 'x' || num !== '/') {
            if (num !== undefined && num !== '+' & num !== '-' & num !== '=' & num !== 'x' & num !== '/') {
                if (text == '0') {
                    setText(num)
                    setSss(() => num)
                } else {
                    console.log('отработало при вводе')
                    setSss(() => sss + num)
                    setText(text + num)
                }

            }
        }

        if (num == '+' || num == '-' || num == 'x' || num == '/') {
            if (sss === '') {
                if (test2.length > 0) { //заменяем знак на выбранный
                    test2[test2.length - 1] = num
                    setTest2(test2)
                    let ss = text.split('')
                    ss[text.length - 1] = num
                    let zz = ss.join('')
                    setText(zz)
                    // setText(text)
                    //setText(text.split('')[text.length-1]=num)
                    // setText(text)
                } else { //если после знака идет число
                    setText(num)
                    setSss(num)
                }
            } else {
                if (sss == '-' || sss == '+' ) { //если после знака идет число
                        setText(sss)
                } else {
                    if (sss.length > 0) { //если в строке присутствуют числа и начинается не с - или +
                        setTest([...test, sss])
                        setTest2([...test2, num])
                        setText(text + num)
                        setSss('')
                        console.log('ddd')//проверить 
                    }
                    else { //добавляем в массив чисел
                        setTest([...test, sss])
                        setText(text + num)
                        setSss('')
                    }
                }
            }
        }
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
        if (test.length > test2.length) {
            let test2cop = [...test2] //копия массива со знаками
            let testcop = [...test] //копия массива с числами
            let mas = [] //массив знаков только + и -
            let plus_and_minus = 0 //счетчик + и -
            let n
            for (let i = 0; i <= test2.length; i++) { //провера на поряок выполнения. Первым * или /, затем все остальное
                if (i < test2.length) {
                    if (test2[i] === '+' || test2[i] === '-') { //если + или -, то ув счетчик и добавляем в массив 
                        plus_and_minus += 1
                        mas.push(test2[i])
                    } else {
                        if (test2[i] === 'x') { //если знак * или /, то считаем числа, между которыми нахоидся знак, 
                                                //затем в копии массива заменяем числа и удаляем знак
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
                } else { //как только счетчик будет >= длине массива...
                    if (mas.length > 0) { //то проверяем массив на пустоту, если не пуст, то выполняем действия...
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
                    } else {//есил пуст, то просто умножаем или делим
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
                if (test2.length < 1) {
                    a = Number(test[0])
                }
            }

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
            setMat(strr)
            console.log(a, 'Ответ')
            console.log(strr, 'Решение')
            console.log(sss, 'строка')
            console.log('test:', test, 'test2:', test2)
        }

    }, [test])

    function clear() {
        setMat('') //процесс
        setTest([])
        setTest2([])
        setText('')
        setSss('')
        strr = ''
        a = 0
    }

    return (
        <div className={css.form}>
            {mat.length <= 0 ? <div className={css.str_resp}>Решение: <spam >...</spam></div> : <div className={css.str_resp}>Решение: <spam >{mat}</spam></div>}
            {text.length > 0 ? <div className={css.str_resp_span}>{text}</div> : <div className={css.str_resp_span}>{ziro}</div>}

            <div className={css.gr}>
                {NumberOutput}
                {SignOutput}
                <div onClick={() => clear()}><sapn className={`${css.btn} ${css.btn_text}`}>Стереть</sapn></div>
            </div>
        </div>
    )



}

export default Base