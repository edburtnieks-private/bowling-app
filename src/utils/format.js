const formatPrice = price => `${price.toFixed(2)} €`
const formatDiscount = discount => `-${discount}%`

export {
  formatPrice,
  formatDiscount
}
