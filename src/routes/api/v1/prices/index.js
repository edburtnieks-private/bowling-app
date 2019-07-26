import { Price } from '../../../../db/models/Price'

export async function get(_, res) {
  const prices = await Price.findOne()

  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  res.end(JSON.stringify(prices))
}
