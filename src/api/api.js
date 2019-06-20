const authLogin = (email, password) => {
  setTimeout(() => {
    if (email === 'test@test.com' && password === 'password' ) {
      return true
    }
    return false
  }, 500)
}

export default { authLogin }
