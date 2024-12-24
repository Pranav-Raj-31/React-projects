import styles from "./Display.module.css";

const Display =({displayValue}) =>{
    return(
        <input className={styles.display} 
         type="text" 
         placeholder="0" 
         value ={displayValue}
         readOnly 
        />
    )
}

export default Display;