import React, { useState } from 'react'

const Claculator = () => {
    const [output, setOutput] = useState('')
    const [input, setInput] = useState('')
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [operator, setOperator] = useState('')
    const [showValue, setShowValue] = useState('')
    const onChange = (e) => {
        // setInput(e.target.value)
    }
  const handleNumberClick = (number) => {
        setInput((p) => p + number.toString())
        setShowValue(input + number)
    }
    const handleOperator = (operator) => {
 
        if (input) {
            setFirst(Number(input));
            setOperator(operator);
            setInput('');
        }
    }
    const handleEqualTo = () => {
        if (input && operator) {
            let result = 0
            const secondValue = Number(input);
            setSecond(secondValue);

            switch (operator) {
                case '+':
                    result = first + secondValue
                    break;

                case '-':
                    result = first - secondValue
                    break;

                case '*':
                    result = first * secondValue
                    break;

                case '%':
                    result = first % secondValue
                    break;

                default:
                    console.log('I am default Operator')
            }

            setOutput(result)
            setShowValue('')
        }
    }


    const handleClear = () => {
        setInput('')
        setOutput('');
        setFirst('')
        setSecond('')
        setOperator('')
        setShowValue('')
      
    }
    const handleDelete = () => {
        setInput((e) => e.slice(0, -1))
        setShowValue((e) => e.slice(0, -1))
        console.log(...input.slice(0, -1))
    }
    return (
        <>
            <div className='flex flex-col items-center justify-center  gap-4 '>
                <h1 className='text-3xl text-red-700 font-semibold mb-5 mt-2'>My Calculator </h1>

                <div className='flex flex-col justify-center items-center'>
                    <p className='text-red-700  font-bold ml-60'>{showValue}</p>
                    <input tye='text' placeholder='Enter your number here'
                        className=' outline-none w-[300px] border-2 px-3 py-2 rounded-full
         border-sky-500' value={input} onChange={onChange} />
                    <p className='pt-6 font-semibold px-4'>Result  :<span className='text-red-600 px-4'>{output}</span></p>


                    <div className='flex  mt-4 gap-4 text-white'>
                        <button className='bg-red-600 w-[70px] py-2 rounded-lg' onClick={handleClear}>Clear</button>
                        <button className='bg-red-600 w-[70px] py-2 rounded-lg' onClick={handleDelete}>Delete</button>
                    </div>
                    <div className='text-white font-bold ml-6'>
                        <div className=' py-5 '>
                            <button className='bg-green-700 w-[50px] py-2 rounded-full mr-7  mt-3 ' onClick={() => handleNumberClick('1')}>1</button>
                            <button className='bg-green-700 w-[50px] py-2 rounded-full mr-7  mt-3' onClick={() => handleNumberClick('2')}>2</button>
                            <button className='bg-green-700 w-[50px] py-2 rounded-full mr-7  mt-3' onClick={() => handleNumberClick('3')}>3</button>
                            <button className='bg-green-700 w-[50px] py-2 rounded-full mr-7  mt-3' onClick={() => handleNumberClick('4')}>4</button>
                            <button className='bg-green-700 w-[50px] py-2 rounded-full mr-7  mt-3' onClick={() => handleOperator('+')}>+</button>
                        </div>
                        <div className='text-white'>
                            <button className='bg-green-700 w-[50px] py-2 rounded-full mr-7  mt-3' onClick={() => handleNumberClick('5')}>5</button>
                            <button className='bg-green-700 w-[50px] py-2 rounded-full mr-7  mt-3' onClick={() => handleNumberClick('6')}>6</button>
                            <button className='bg-green-700 w-[50px] py-2 rounded-full mr-7  mt-3' onClick={() => handleNumberClick('7')}>7</button>
                            <button className='bg-green-700 w-[50px] py-2 rounded-full mr-7  mt-3' onClick={() => handleNumberClick('8')}>8</button>
                            <button className='bg-green-700 w-[50px] py-2 rounded-full mr-7  mt-3' onClick={() => handleOperator('-')}>-</button>
                        </div>
                        <div>
                            <button className='bg-green-700 w-[50px] py-2 rounded-full mr-7  mt-7' onClick={() => handleNumberClick('9')}>9</button>
                            <button className='bg-green-700 w-[50px] py-2 rounded-full mr-7  mt-7' onClick={() => handleNumberClick('0')}>0</button>
                            <button className='bg-green-700 w-[50px] py-2 rounded-full mr-7  mt-7' onClick={() => handleOperator('*')}>*</button>
                            <button className='bg-green-700 w-[50px] py-2 rounded-full mr-7  mt-7' onClick={() => handleOperator('%')}>%</button>
                            <button className='bg-green-700 w-[50px] py-2 rounded-full mr-7  mt-7' onClick={handleEqualTo}>=</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Claculator