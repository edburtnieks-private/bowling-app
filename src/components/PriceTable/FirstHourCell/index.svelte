<script>
  import Cell from '../Cell/index.svelte'
  import Input from '../Input/index.svelte'
  import { formatPrice } from '../../../utils/format'

  export let price
  export let startTime
  export let endTime
  export let active

  let priceInput = formatPrice(price)
  let startTimeInput = startTime
  let endTimeInput = endTime

  // TEMPORARY
  const isAdmin = true
</script>

<style>
  div {
    display: flex;
    margin-bottom: 10px;
  }
</style>

<Cell {active}>
  <div>
    {#if isAdmin}
      <Input value={startTimeInput} {active} />
    {:else}
      <time datetime="{startTime}">
        {startTime}
      </time>
    {/if}
    -
    {#if isAdmin}
      <Input value={endTimeInput} {active} />
    {:else}
      <time datetime="{endTime}">
        {endTime}
      </time>
    {/if}
  </div>

  {#if isAdmin}
    <Input value={priceInput} {active} />
  {:else}
    {formatPrice(price)}
  {/if}
</Cell>
