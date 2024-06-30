const API_URL = 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work'

export default defineNuxtPlugin(
  () => {
    const api = $fetch.create({
      baseURL: API_URL,

      onRequestError({ request }) {
        console.error('[API request error ]', request)
      },
      onResponseError({ response }) {
        console.error('[API response error ]', response)
      },
    })

    return {
      provide: {
        api,
      },
    }
  },

)
