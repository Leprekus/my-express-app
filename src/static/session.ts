const session = async () => {

   const res = await fetch('/api/auth/session',{
      method: 'POST', 
      headers:{ 'content-type': 'application/json' },
      body: JSON.stringify({
          username: 'john',
          password: '123abc'
      })
  })
   const data = await res.json()
   console.log({scriptSide: data})
   return data
}

export default session