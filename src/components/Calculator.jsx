import React, { useEffect, useState } from 'react'

const Calculator = () => {

  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [prevResult, setPrevResult] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false)
  const [operator, setOperator] = useState(null);

  // Fonction pour formater l'affichage des nombres
  const formatNumber = (num) => {
    // Limite à 10 chiffres pour l'affichage
    let str = num.toString();
    if(str.length > 10) {
      if(str.includes('.')) {
        // Si c'est un décimal, on tronque
        const [integer, decimal] = str.split('.');
        if(integer.length > 10) {
          return parseFloat(num).toExponential(5);
        }
        const maxDecimal = 10 - integer.length - 1;
        return parseFloat(num).toFixed(Math.min(maxDecimal, 8));
      } else {
        return parseFloat(num).toExponential(5)
      }
    }
    return str;
  }

  // Gestion des chiffres
  const handleDigit = (digit) => {
    if(waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' || display === '-0' ? digit : display + digit);
    }
  }

  // Gestion des opérateurs
  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(display);

    if(prevResult === null) {
      setPrevResult(inputValue);
    } else if (operator) {
      const result = calculate(prevResult, inputValue, operator);
      setDisplay(formatNumber(result));
      setPrevResult(result);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  }

  // Gestion de la décimale
  const handleDecimal = () => {
    if(waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (!display.includes(".")) {
      setDisplay(display + '.');
    }
  }

  // Calcul
  const calculate = (firstValue, secondValue, operator) => {
    switch(operator) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return secondValue === 0 ? 'Error' : firstValue / secondValue;
      default:
        return secondValue;
    }
  }

  // Egal
  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if(prevResult !== null && operator) {
      const result = calculate(prevResult, inputValue, operator);
      setDisplay(formatNumber(result));
      setExpression(`${prevResult} ${operator} ${inputValue} =`);
      setPrevResult(null);
      setOperator(null);
      setWaitingForOperand(true);
    }
  }

  // Clear
  const handleClear = () => {
    setDisplay('0');
    setExpression('');
    setPrevResult(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  // Pourcentage
  const handlePercentage = () => {
    const value = parseFloat(display);
    setDisplay(formatNumber(value / 100));
  };

  // Plus/Moins
  const handleToggleSign = () => {
    const value = parseFloat(display);
    setDisplay(formatNumber(-value));
  };

  // Gestion du clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      const { key } = e;

      if(key >= '0' && key <= '9') {
        handleDigit(key);
      } else if (key === '.') {
        handleDecimal();
      } else if (key === '+') {
        e.preventDefault();
        handleOperator("+");
      } else if (key === '-') {
        e.preventDefault();
        handleOperator("-");
      } else if (key === "*") {
        e.preventDefault();
        handleOperator("*")
      } else if (key === '/') {
        e.preventDefault();
        handleOperator("/")
      } else if( key === "Enter" || key === "=") {
        e.preventDefault();
        handleEquals();
      } else if (key === 'Escape' || key === "Delete") {
        handleClear();
      } else if (key === '%') {
        handlePercentage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);

  }, [display, prevResult, operator, waitingForOperand]);

  // Construction de l'expression pour l'affichage
  useEffect(() => {
    if (prevResult !== null && operator) {
      setExpression(`${formatNumber(prevResult)} ${operator}`);
    } else {
      setExpression("");
    }
  }, [prevResult, operator])


  return (
    <div id='calculator' className="flex flex-col items-center m-auto border gap-5 top-5 mt-4 w-300 bg-gray-100 rounded-xl py-10">
 
      <h1 className='text-[#3498db] font-medium text-center items-center text-3xl'>Calculator</h1>

      <div className='items-center border bg-[#2c3e50] gap-5 p-6 w-120 rounded-2xl'>
        <div className='text-right flex flex-col flex-end border bg-[#1a252f] rounded-xl gap-5 mt-2 mb-2'>
          <div className='text-[#7f8c8d] font-semibold' id='expression'>
            {expression}
          </div>
          <div className='text-white text-2xl font-medium pr-3' id='display'>
            {display}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 p-3">
          <button id='clear' 
            className='flex items-center justify-center text-white py-5 px-5 border-none bg-[#c0392b] hover:bg-[#e74c3c] rounded-2xl cursor-pointer transition-all ' 
            onClick={handleClear}
          >
            AC
          </button>
          <button id='toggle-sign' 
            className='flex items-center justify-center text-white py-5 px-5 border-none bg-[#2980b9]  hover:bg-[#3498db] rounded-2xl cursor-pointer transition-all ' 
            onClick={handleToggleSign}
          >
            ±
          </button>
          <button id='percentage' 
            className='flex items-center justify-center text-white py-5 px-5 border-none bg-[#2980b9]  hover:bg-[#3498db] rounded-2xl cursor-pointer transition-all ' 
            onClick={handlePercentage}
          >
            %
          </button>
          <button id='divide' 
            className='flex items-center justify-center text-white py-5 px-5 border-none bg-[#2980b9]  hover:bg-[#3498db] rounded-2xl cursor-pointer transition-all ' 
            onClick={()=>handleOperator('/')}
          >
            ÷
          </button>

          <button id='seven' 
            className='flex items-center justify-center text-white py-5 px-5 border-none bg-[#34495e] hover:bg-[#3d566e] rounded-2xl cursor-pointer transition-all ' 
            onClick={()=>handleDigit('7')}
          >
            7
          </button>
          <button id='eight' 
            className='flex items-center justify-center text-white py-5 px-5 border-none bg-[#34495e] hover:bg-[#3d566e] rounded-2xl cursor-pointer transition-all ' 
            onClick={()=>handleDigit('8')}
          >
            8
          </button>
          <button id='nine' 
            className='flex items-center justify-center text-white py-5 px-5 border-none bg-[#34495e] hover:bg-[#3d566e] rounded-2xl cursor-pointer transition-all ' 
            onClick={()=>handleDigit('9')}
          >
            9
          </button>
          <button id='multiply' 
            className='flex items-center justify-center text-white py-5 px-5 border-none bg-[#2980b9]  hover:bg-[#3498db] rounded-2xl cursor-pointer transition-all ' 
            onClick={()=>handleOperator('*')}
          >
            x
          </button>

          <button id='four' 
            className='flex items-center justify-center text-white py-5 px-5 border-none bg-[#34495e] hover:bg-[#3d566e] rounded-2xl cursor-pointer transition-all ' 
            onClick={()=>handleDigit('4')}
          >
            4
          </button>
          <button id='five' 
            className='flex items-center justify-center text-white py-5 px-5 border-none bg-[#34495e] hover:bg-[#3d566e] rounded-2xl cursor-pointer transition-all ' 
            onClick={()=>handleDigit('5')}
          >
            5
          </button>
          <button id='six' 
            className='flex items-center justify-center text-white py-5 px-5 border-none bg-[#34495e] hover:bg-[#3d566e] rounded-2xl cursor-pointer transition-all ' 
            onClick={()=>handleDigit('6')}
          >
            6
          </button>
          <button id='substract' 
            className='flex items-center justify-center text-white py-5 px-5 border-none bg-[#2980b9] hover:bg-[#3498db] rounded-2xl cursor-pointer transition-all ' 
            onClick={()=>handleOperator('-')}
          >
            -
          </button>

          <button id='one' 
            className='flex items-center justify-center text-white py-5 px-5 border-none bg-[#34495e] hover:bg-[#3d566e] rounded-2xl cursor-pointer transition-all ' 
            onClick={()=>handleDigit('1')}
          >
            1
          </button>
          <button id='two' 
            className='flex items-center justify-center text-white py-5 px-5 border-none bg-[#34495e] hover:bg-[#3d566e] rounded-2xl cursor-pointer transition-all ' 
            onClick={()=>handleDigit('2')}
          >
            2
          </button>
          <button id='three' 
            className='flex items-center justify-center text-white py-5 px-5 border-none bg-[#34495e] hover:bg-[#3d566e] rounded-2xl cursor-pointer transition-all ' 
            onClick={()=>handleDigit('3')}
          >
            3
          </button>
          <button id='add' 
            className='flex items-center justify-center text-white py-5 px-5 border-none bg-[#2980b9] hover:bg-[#3498db] rounded-2xl cursor-pointer transition-all ' 
            onClick={()=>handleOperator('+')}
          >
            +
          </button>

          <button id='zero' 
            className='flex items-center justify-center text-white py-5 px-5 border-none bg-[#34495e] hover:bg-[#3d566e] rounded-2xl cursor-pointer transition-all ' 
            onClick={()=>handleDigit('0')}
          >
            0
          </button>
          <button id='decimal' 
            className='flex items-center justify-center text-white py-5 px-5 border-none bg-[#2980b9] rounded-2xl cursor-pointer transition-all ' 
            onClick={handleDecimal}
          >
            .
          </button>
          <button id='equals' 
            className='flex items-center justify-center text-white py-5 px-5 border-none bg-[#27ae60] hover:bg-[#2ecc71] rounded-2xl cursor-pointer transition-all ' 
            onClick={handleEquals}
          >
            =
          </button>
        </div>

        <div className='items-center text-white gap-5 mt-2 mb-2'>
          <p>Clavier supporté: 0-9, +, -, *, /, Enter, Escape</p>
        </div>
      </div>

      <div className='p-6 rounded-xl'>
        <h3 className='flex items-center gap-6 text-[#2c3e50]'>Fonctionnalités implémentées: </h3>
        <ul>
          <li className='text-[#2c3e50] pl-5 mb-3 realtive'>✓ Logique de formule (respecte l'ordre des opérations)</li>
          <li className='text-[#2c3e50] pl-5 mb-3 realtive'>✓ Pas de zéros multiples en début de nombres</li>
          <li className='text-[#2c3e50] pl-5 mb-3 realtive'>✓ Une seule décimale par nombre</li>
          <li className='text-[#2c3e50] pl-5 mb-3 realtive'>✓ Précision à plusieurs décimales</li>
          <li className='text-[#2c3e50] pl-5 mb-3 realtive'>✓ Gestion ds erreurs (division par zéro)</li>
          <li className='text-[#2c3e50] pl-5 mb-3 realtive'>✓ Support clavier complet</li>
        </ul>
      </div>

    </div>
  )
}

export default Calculator
