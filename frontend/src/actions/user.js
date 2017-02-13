
export function addUser(obj) {
  return dispatch => {
    return fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then((res) => res.json())
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

