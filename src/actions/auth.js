const baseUrl = 'http://localhost:3001'

export const createAccount = async details => {
  
}

export const login = async (details) => {
  const resp = await fetch(baseUrl + '/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(details)
  })

  const data = await resp.json();

  console.log(data);
}

export const logout = async () => {

}

export const getCurrentUser = async (handleCurrentUser) => {
  const resp = await fetch(baseUrl + '/current-user')
  const data = await resp.json()

  handleCurrentUser(data);
}