<script>
  import Cell from '../Cell/index.svelte'
  import { formatPrice } from '../../../utils/format'

  export let price
  export let active
</script>

<Cell {active}>
  {formatPrice(price)}
</Cell>
