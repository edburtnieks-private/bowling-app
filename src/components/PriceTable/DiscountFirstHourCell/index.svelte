<script>
  import Cell from '../Cell/index.svelte'
  import { formatDiscount } from '../../../utils/format'

  export let discount
  export let active
</script>

<Cell {active}>
  {formatDiscount(discount)}
</Cell>
