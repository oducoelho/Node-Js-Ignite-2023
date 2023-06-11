import http from 'node:http'

const tasks = []

console.log(tasks)

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/tasks') {
    return res
      .setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(tasks))
  }
  if (method === 'POST' && url === '/tasks') {
    tasks.push({
      id: 1,
      description: 'first task'
    })

    return res.writeHead(201).end()
  }
  return res.writeHead(404).end()
})

server.listen(3333)