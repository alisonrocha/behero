export function validateInputs(inputs) {
  const inputMailRequired = 'mail'
  const inputPassRequired = 'pass'

  if (inputs.mail === '' && inputs.password !== '') {
    alert('INFORME O CAMPO E-MAIL!')
    return inputMailRequired
  } else if (inputs.password === '' && inputs.mail !== '') {
    alert('INFORME O CAMPO PASSWORD!')
    return inputPassRequired
  } else if (inputs.mail === '' && inputs.password === '') {
    alert('INFORME TODOS OS CAMPOS!')
    return false
  }

  return true
}
