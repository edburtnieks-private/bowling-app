import mongoose from '../../routes/api/_db'
import { priceSchema } from '../schemas/price'

const Price = mongoose.model('Price', priceSchema)

export { Price }
