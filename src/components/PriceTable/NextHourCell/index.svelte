<script>
  import Cell from '../Cell/index.svelte'
  import Input from '../Input/index.svelte'
  import { formatPrice } from '../../../utils/format'

  export let price
  export let active

  const isAdmin = true
  let nextHourInput = formatPrice(price)
</script>

<Cell {active}>
  {#if isAdmin}
    <Input value={nextHourInput} {active} />
  {:else}
    {formatPrice(price)}
  {/if}
</Cell>
