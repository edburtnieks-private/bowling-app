<script>
  export let value
  export let active
</script>

<style>
  input {
    background-color: transparent;
    border-color: #ccc;
    border-width: 0 0 2px;
    max-width: 50px;
    padding-bottom: 5px;
    text-align: center;
  }

  .active {
    border-color: #fff;
  }
</style>

<input bind:value class:active={active} />
