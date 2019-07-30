import mongoose from 'mongoose'
import { priceSchema } from '../schemas/price'

const Price = mongoose.model('Price', priceSchema)

export { Price }
