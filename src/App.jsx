import styles from "./App.module.css";
import Display from "./componants/Display";
import Button from "./componants/Button";
import { useState } from "react";

function App() {
  const [calVal,setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
   if(buttonText === 'c'){
    setCalVal("");
   }
   else if(buttonText ==='='){
    const result = eval(calVal);
    setCalVal(result);
   }
   else{
    const newValue = calVal + buttonText;
    setCalVal(newValue);
   }
  }

  return(
    <div className={styles.my}>
      <div className={styles.calc}>
        <Display displayValue ={calVal}></Display>
        <Button onButtonClick ={onButtonClick}></Button>
      </div>
    </div>
  );
}

export default App;
