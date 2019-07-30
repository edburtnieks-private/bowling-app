<script>
  import FirstHourCell from '../FirstHourCell/index.svelte'
  import NextHourCell from '../NextHourCell/index.svelte'
  import DiscountFirstHourCell from '../DiscountFirstHourCell/index.svelte'

  export let active
  export let startTime
  export let endTime
  export let firstHourPrice
  export let nextHourPrice
  export let discount
</script>

<FirstHourCell
  active={active}
  price={firstHourPrice}
  startTime={startTime}
  endTime={endTime}
/>

<NextHourCell
  active={active}
  price={nextHourPrice}
/>

<DiscountFirstHourCell
  active={active}
  discount={discount}
/>
