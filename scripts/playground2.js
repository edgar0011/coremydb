import axios from 'axios'
import fetch from 'node-fetch'
import * as bacon from 'baconjs'

const options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'accept-encoding': 'application/gzip',
    'x-rapidapi-key': 'ed4e2408a6msh5231c51b433d0c8p178a3ajsn98d28e18c097',
    'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
  },
  data: { q: 'Hello, world!', source: 'en', target: 'es' },
}


async function call() {
  const URL = 'https://google-translate1.p.rapidapi.com/language/translate/v2'
  const headers = {
    // 'content-type': 'application/x-www-form-urlencoded',
    // 'content-type': 'application/json',
    'accept-encoding': 'application/gzip',
    'x-rapidapi-key': 'ed4e2408a6msh5231c51b433d0c8p178a3ajsn98d28e18c097',
    'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
    // useQueryString: true,
  }

  const request = {
    q: 'yes',
    source: 'en',
    target: 'de',
  }

  let response
  try {
    // response = await axios.post(URL, { data: request }, { headers })
    response = axios.request(options)
  } catch (error) {
    console.error(error)
  }
  return (response)
}

// call().then(console.log)

async function call2() {
  const stream = new bacon.Bus()
  stream
    .map((name) => ({ name }))
    .onValue((data) => {
      console.log('stram oValue,', data)
    })
  stream.push('Linda')
  stream.push('Nicol')
//   return fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/x-www-form-urlencoded',
//       'accept-encoding': 'application/gzip',
//       'x-rapidapi-key': 'ed4e2408a6msh5231c51b433d0c8p178a3ajsn98d28e18c097',
//       'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
//     },
//     body: {
//       q: 'Hello, world!',
//       source: 'en',
//       target: 'es',
//     },
//   })
//     .then((response) => {
//       console.log(response)
//       return response
//     })
//     .catch((err) => {
//       console.error(err)
//     })
}

call2()


// TODO
// https://www.youtube.com/watch?v=9QveBbn7t_c
