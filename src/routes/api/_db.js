import mongoose from 'mongoose'
import { Price } from '../../db/models/Price'

mongoose.connect('mongodb://localhost:27017/bowling-app', {
  useNewUrlParser: true
})

export default mongoose
