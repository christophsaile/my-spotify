// Open your browser and enter this address http://localhost:3000/login. You will get your tokens as an array result from two API calls: the first one is to get access token and refresh token, the second one to grant the refresh token.
// There you go. You finally have your refresh token for your website. You can continue implement Spotify to your website now. Happy coding!
require('dotenv').config();
const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
app.use(cors())

CLIENT_ID = process.env.SPOTIFY_CLIENT_ID // your spotify client id
CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET // your spotify client secret
REDIRECT_URI = 'http://localhost:3000/callback' // my case is 'http://localhost:3000/callback'
SCOPE = ['user-read-currently-playing', 'user-top-read', 'user-read-recently-played'] // add the scopes you will need for your API calls, https://developer.spotify.com/documentation/web-api/concepts/scopes#user-top-read

app.get('/login', (request, response) => {
  const redirect_url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${SCOPE}&state=123456&redirect_uri=${REDIRECT_URI}&prompt=consent`
  response.redirect(redirect_url)
})

app.get('/callback', async (request, response) => {
  const code = request.query['code']
  await axios
    .post(
      (url = 'https://accounts.spotify.com/api/token'),
      (data = new URLSearchParams({
        grant_type: 'authorization_code',
        redirect_uri: REDIRECT_URI,
        code: code,
      })),
      (config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: {
          grant_type: 'client_credentials',
        },
        auth: {
          username: CLIENT_ID,
          password: CLIENT_SECRET,
        },
      })
    )
    .then(resp1 => {
      axios
        .post(
          (url = 'https://accounts.spotify.com/api/token'),
          (data = new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: resp1.data.refresh_token,
            access_token: resp1.data.access_token,
          })),
          (config = {
            auth: {
              username: CLIENT_ID,
              password: CLIENT_SECRET,
            },
          })
        )
        .then(resp2 => {
          return response.send(JSON.stringify([resp1.data, resp2.data]))
        })
    })
})
// your port of REDIRECT_URI
app.listen(3000, () => {
  console.log('Listening on :3000')
})