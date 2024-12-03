function isAuthenticaded(to, from, next) {
  const userId = localStorage.getItem('userId');
  if(!userId) {
    next('/acesso')
  } else {
    next()
  }
}

export { isAuthenticaded };