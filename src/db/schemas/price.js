import mongoose from '../../routes/api/_db'

const bowlingPriceSchema = new mongoose.Schema({
  startTime: String,
  endTime: String,
  firstHour: Number,
  nextHour: Number,
  discountFirstHour: Number
})

const bowlingSchema = new mongoose.Schema({
  days: [Number],
  firstHalf: bowlingPriceSchema,
  secondHalf: bowlingPriceSchema,
  fullDay: bowlingPriceSchema
})

const priceSchema = new mongoose.Schema({
  bowling: [bowlingSchema],
  shoes: Number
})

export { priceSchema }
