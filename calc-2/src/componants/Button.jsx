import styles from "./Button.module.css" ;

const Button = ({onButtonClick}) =>{

  const buttonIcon =[
    'c',
    "1",
    "2",
    "+",
    '3',
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
    "."
  ]

    return(
      <div class={styles.buttonContainer}>
          {buttonIcon.map((buttonIcon) =>(
          <button className={styles.button} onClick={() => onButtonClick(buttonIcon)}>{buttonIcon}</button>
          ))}
         </div>
          
    )
        
}

export default Button;