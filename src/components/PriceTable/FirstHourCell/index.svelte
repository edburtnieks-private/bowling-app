<script>
  import Cell from '../Cell/index.svelte'
  import { formatPrice } from '../../../utils/format'

  export let price
  export let startTime
  export let endTime
  export let active
</script>

<Cell {active}>
  <div>
    <time datetime="{startTime}">
      {startTime}
    </time>
    -
    <time datetime="{endTime}">
      {endTime}
    </time>
  </div>

  {formatPrice(price)}
</Cell>
