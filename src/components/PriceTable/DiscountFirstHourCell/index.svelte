<script>
  import Cell from '../Cell/index.svelte'
  import Input from '../Input/index.svelte'
  import { formatDiscount } from '../../../utils/format'

  export let discount
  export let active

  const isAdmin = true
  let discountInput = formatDiscount(discount)
</script>

<Cell {active}>
  {#if isAdmin}
    <Input value={discountInput} {active} />
  {:else}
    {formatDiscount(discount)}
  {/if}
</Cell>
