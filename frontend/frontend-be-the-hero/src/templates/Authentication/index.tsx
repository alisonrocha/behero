import { useState, FormEvent, useEffect} from 'react'
import { Input } from "../../components/Input"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { validateInputs } from '../../components/utils/scripts.js'

import './styles.scss'


export function Authentication(){
  const [inputMailValue, setInputMailValue ] = useState<string>('')
  const [inputPassValue, setInputPassValue ] = useState<string>('')
  const [inputMailIsRequired, setInputMailIsRequired] = useState<boolean>(false);
  const [inputPassIsRequired, setInputPassIsRequired] = useState<boolean>(false);

  useEffect(() => {
    if (inputMailValue !== "") setInputMailIsRequired(false);

    if (inputPassValue !== "") setInputPassIsRequired(false);

}, [inputMailValue, inputPassValue]);
  

  //Função para receber os valores dos inputs vindo do formulário
  function handleSubmitForm(e: FormEvent) {
    e.preventDefault();

    const inputs = {
      mail: inputMailValue,
      password: inputPassValue
    }

    const verifyFields = validateInputs(inputs)

    if(verifyFields === false){
      setInputMailIsRequired(true);
      setInputPassIsRequired(true);     
    } else if(verifyFields === 'mail'){
      setInputMailIsRequired(true);
    } else if(verifyFields === 'pass'){
      setInputPassIsRequired(true);
    } else {
      alert('LOGADO')
      setInputMailValue("");
      setInputPassValue("");
    } 
  }

  return(
    <div className="view-authentication">      
      
      <Header/>

      <main className="container">
        <div className="login-img">
          <img src="images/img-login.svg" alt="" />
        </div>

        <div className="login-forms">
          <p>Venha fazer parte <br /> dessa <strong>comunidade do<br />bem!</strong></p>

          <form onSubmit = {handleSubmitForm}>            
            <Input  
              className = {inputMailIsRequired ? 'error-required' : ''}
              id= "email"                        
              type = "email"  
              name = "email"            
              placeholder = "Insira seu e-mail"
              value = {inputMailValue}    
              onChange= {(e) => setInputMailValue(e.target.value)}      
            />

            <Input 
             className = {inputPassIsRequired ? 'error-required' : ''}
              id= "pass" 
              type = "text"
              name = "password"
              placeholder = "Senha"
              value = {inputPassValue}   
              onChange= {(e) => setInputPassValue(e.target.value)}         
            />

            <div>
              <a href="/">Esqueceu a senha?</a>              
            </div>
 
            <Button onClick={handleSubmitForm}>
              Enviar
            </Button>
          </form>          
        </div>        
      </main>

      <div className="bg">
        <div className="ball top"></div>
        <div className="ball bottom"></div>
      </div>
    </div>
  )
}