
const authLogin = async (email, password) => {
  console.log('hello')
  await setTimeout(() => {
    console.log('wait')
    if (email === 'test@test.com' && password === 'password') {
      return true
    }
    return false
  }, 100)
}

export default { authLogin }
