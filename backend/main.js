const fastify = require('fastify')({
	logger: true,
	ignoreTrailingSlash: true
})
fastify.register(require('fastify-mongodb'), {
	forceClose: true,
	url: 'mongodb://localhost:27017/throneofgamers'
})
fastify.register(require('fastify-cors'), { origin: true })

// Declare routes
fastify.register(require('./routes'), { prefix: '/api' })

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

// Start server!
start()
