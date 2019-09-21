async function routes (fastify, options) {

	const collection1 = fastify.mongo.db.collection('posts')
	const collection2 = fastify.mongo.db.collection('events')

	// Home
	fastify.get('/', async (request, reply) => {
		reply.type('text/html')
		reply.send('<h2>Welcome to Throne Of Gamers News API<br /> Further access is restricted</h2>')
	})

	// News
	fastify.get('/news', async (request, reply) => {
		await collection1.find({}).toArray((err, result) => {
			if (err) {
				console.log('Unable to fetch data ', err)
			} else if (result.length) {
				// console.log(result)
				reply.send(result)
			} else {
				console.log('NO document found')
			}
		})
	})

	// Newspage
	fastify.get('/news/?id', async (request, reply) => {
		id = params.id
		await collection1.find({id: id}).toArray((err, result) => {
			if (err) {
				console.log('Unable to fetch data ', err)
			} else if (result.length) {
				reply.send(result)
			} else {
				console.log('No document found')
			}
		})
	})

	// Events
	fastify.get('/events', async (request, reply) => {
		await collection2.find({}).toArray((err, result) => {
			if (err) {
				console.log('Unable to fetch data ', err)
			} else if (result.length) {
				// console.log(result)
				reply.send(result)
			} else {
				console.log('NO document found')
			}
		})
	})

}

module.exports = routes
