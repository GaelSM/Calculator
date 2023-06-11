import { useState } from 'react'
import { evaluate } from 'mathjs'
import Formula from './Formula'
import Output from './Output'
import Buttons from './Buttons'
import './App.css'

export default function App() {
  const [values, setValues] = useState({
    currentValue: "0",
    previousValue: "0",
    formula: "",
    evaluated: false
  })

  const clear = () => setValues({currentValue: "0", previousValue: "0", formula: ""})

  const handleNumbers = (e) => {
    const value = e.target.value
    const {currentValue, formula, evaluated} = values

    if(evaluated) setValues({currentValue: value, formula: value, evaluated: false})
    else setValues({
      currentValue: currentValue === "0" || /[\+\-\/\*]/.test(currentValue) ? value : currentValue + value, 
      formula: currentValue === "0" ? value : formula + value
    })
  }

  const handleDecimal = () => {
    const {currentValue, formula} = values

    if(/(\.{2}|\d\.\d+\.)/.test(currentValue + ".")) return
    setValues({currentValue: currentValue + ".", formula: formula + "."})
  }

  const handleOperator = (e) => {
    const value = e.target.value
    const {formula, previousValue, evaluated} = values

    if(evaluated) setValues({currentValue: value, formula: previousValue + value, evaluated: false})
    else if(/\-\-/.test(formula + value)) return
    else if(/([\+\/\*]{2,})/.test(formula + value)) setValues({currentValue: value, formula: formula.replace(formula.at(-1), value)})
    else if(/([\+\/\*]\-[\+\/\*]|\-[\+\/\*])/.test(formula + value)){
      setValues({currentValue: value, formula: formula.replace(/([\+\/\*]\-|\-)/, value)})
    }else setValues({currentValue: value, formula: formula + value})
  }

  const result = () => {
    const {formula} = values
    let answer = evaluate(formula)
    
    setValues({
      currentValue: answer, 
      previousValue: answer, 
      formula: formula + "=" + 
      answer, evaluated: true
    })
  }

  return (
    <main id="container">

      <section id="display-container">
        <Formula formula={values.formula}/>
        <Output currentValue={values.currentValue}/>
      </section>

      <Buttons
        clear={clear}
        handleNumbers={handleNumbers}
        handleDecimal={handleDecimal}
        handleOperator={handleOperator}
        result={result}
      />

    </main>
  )
}