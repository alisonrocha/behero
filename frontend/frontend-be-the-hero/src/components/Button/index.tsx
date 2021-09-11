import './styles.scss'

interface ButtonProps{  
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export function Button(props: ButtonProps){
  return(
    <button onClick = {props.onClick}>
      {props.children}
    </button>
  )
}