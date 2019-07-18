<script>
  export let active
  export let dayClass
  export let header
  export let adults
</script>

<style>
  div {
    align-items: center;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
  }

  .active {
		background-color: #ccc;
  }

  .day {
		grid-row: span 2;
	}

  .header {
    background-color: #eee;
		font-weight: 700;
  }

  .adults {
		grid-column: span 2;
	}
</style>

<div
  class:active
  class:day={dayClass}
  class:header
  class:adults
>
  <slot></slot>
</div>
