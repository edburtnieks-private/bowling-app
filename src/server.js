import sirv from 'sirv'
import polka from 'polka'
import compression from 'compression'
import * as sapper from '@sapper/server'
import mongoose from 'mongoose'

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'
const MONGO_DB_CONNECTION_STRING = dev
	? 'mongodb://localhost/bowling-app'
	: 'mongodb+srv://edburtnieks:IHExTtlVDs230S4w@edburtnieks-opf8r.mongodb.net/bowling-app?retryWrites=true&w=majority'

mongoose.connect(MONGO_DB_CONNECTION_STRING, {
  useNewUrlParser: true
})

polka()
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err)
	})
