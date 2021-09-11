import './styles.scss'

interface InputProps {
  className: string;
  id: string;
  type: string;
  name: string;
  placeholder: string;  
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input(props: InputProps) {
  
  return(
    <input 
      className = {props.className}
      id={props.id}
      type = {props.type} 
      name = {props.name}
      placeholder = {props.placeholder}
      value = {props.value} 
      onChange = {props.onChange}  
    />
  )
}