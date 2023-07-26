const session = async () => {

   const res = await fetch('/api/session')
   const data = res.json()
   console.log(res)
}
session()