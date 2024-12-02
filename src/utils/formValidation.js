function checkForm(data) {
  const errors = {};

  if(data.username) {
    if(data.username.length < 3) errors.username = { message: 'o username deve ter no mínimo três caracteres' }
  } else {
    errors.username = { message: 'o campo não deve ser vazio' }
  }
  
  if(data.email) {
    if(data.email.length < 3) errors.email = { message: 'o e-mail deve ter no mínimo três caracteres' }
  } else {
    errors.email = { message: 'o campo não deve ser vazio' }
  }

  if(data.password) {
    if(data.password.length < 3) errors.password = { message: 'a senha deve ter no mínimo três caracteres' }
  } else{
    errors.password = { message: 'o campo não deve ser vazio' }
  }

  if(data.password != data.confirmPassword) {
    errors.confirmPassword = { message: 'as senhas não condizem' }
  }
  
  return errors;
};  

export { checkForm };