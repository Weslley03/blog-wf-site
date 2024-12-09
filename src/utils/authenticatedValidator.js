function isAuthenticaded(to, from, next) {
  const userToken = localStorage.getItem('userToken');
  if(!userToken) {
    next('/acesso')
  } else {
    next()
  }
}

export { isAuthenticaded };