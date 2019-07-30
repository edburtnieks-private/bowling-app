<script>
  import Cell from '../Cell/index.svelte'

  export let days
  export let dayNames
  export let dayClass
  export let active
</script>

<Cell {active} {dayClass}>
  {#each days as day}
    <div>
      {dayNames[day]}
    </div>
  {/each}
</Cell>
