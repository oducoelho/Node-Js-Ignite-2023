import fastify from 'fastify'

const app = fastify()

// GET, PORT, PUT, PATCH, DELETE

app.get('/hello', () => {
  return 'Hello worlddd!'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is running!!!')
  })
