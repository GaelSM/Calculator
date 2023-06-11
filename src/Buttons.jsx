export default function Buttons({clear, handleNumbers, handleDecimal, handleOperator, result}) {
  return (
    <section id="content">
      <button id="clear" onClick={clear}> AC </button>

      <button id="one" value="1" onClick={handleNumbers}> 1 </button>
      <button id="two" value="2" onClick={handleNumbers}> 2 </button>
      <button id="three" value="3" onClick={handleNumbers}> 3 </button>
      <button id="four" value="4" onClick={handleNumbers}> 4 </button>
      <button id="five" value="5" onClick={handleNumbers}> 5 </button>
      <button id="six" value="6" onClick={handleNumbers}> 6 </button>
      <button id="seven" value="7" onClick={handleNumbers}> 7 </button>
      <button id="eight" value="8" onClick={handleNumbers}> 8 </button>
      <button id="nine" value="9" onClick={handleNumbers}> 9 </button>
      <button id="zero" value="0" onClick={handleNumbers}> 0 </button>

      <button id="decimal" value="." onClick={handleDecimal}> . </button>
      <button id="add" value="+" onClick={handleOperator}> + </button>
      <button id="subtract" value="-" onClick={handleOperator}> - </button>
      <button id="multiply" value="*" onClick={handleOperator}> &times; </button>
      <button id="divide" value="/" onClick={handleOperator}> / </button>
      <button id="equals" value="=" onClick={result}> = </button>
    </section>
  )
}
