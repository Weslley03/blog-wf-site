function existPost(to, from, next) {
  const idPost = to.params.idPost;
  if(!idPost || idPost !== '123456') {
    next('/error-not-found');
  } else {
    next();
  }
}

export { existPost };