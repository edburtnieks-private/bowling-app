<script>
	import Wrapper from './Wrapper/index.svelte'
	import Header from './Header/index.svelte'
	import Cell from './Cell/index.svelte'
	import DayCell from './DayCell/index.svelte'
	import PriceRow from './PriceRow/index.svelte'

  export let prices
  
  const todayDate = new Date()
	const dayNames = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	]
	const todayIndex = todayDate.getDay()
	const today = dayNames[todayIndex]
	const hour = `${todayDate.getHours()}:${todayDate.getMinutes()}`

  const isToday = days => todayIndex === days[days.indexOf(todayIndex)]
	const isFirstHalf = firstHalf => hour >= firstHalf.startTime && hour < firstHalf.endTime
	const isSecondHalf = secondHalf => hour >= secondHalf.startTime && hour <= secondHalf.endTime
	const isInTime = price => hour >= price.startTime && hour <= price.endTime
</script>

<style>
	div {
		display: grid;
		grid-gap: 1px;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 1fr);
	}
</style>

<Wrapper>
	<div>
		<Header />

		{#each prices.reservation as price}
			<DayCell
				dayClass={price.firstHalf && price.secondHalf}
				active={isToday(price.days)}
				days={price.days}
				{dayNames}
			/>

			{#if price.firstHalf && price.secondHalf}
				<PriceRow
					active={isToday(price.days) && isFirstHalf(price.firstHalf)}
					startTime={price.firstHalf.startTime}
					endTime={price.firstHalf.endTime}
					firstHourPrice={price.firstHalf.firstHour}
					nextHourPrice={price.firstHalf.nextHour}
					discount={price.firstHalf.discountFirstHour}
				/>

				<PriceRow
					active={isToday(price.days) && isSecondHalf(price.secondHalf)}
					startTime={price.secondHalf.startTime}
					endTime={price.secondHalf.endTime}
					firstHourPrice={price.secondHalf.firstHour}
					nextHourPrice={price.secondHalf.nextHour}
					discount={price.secondHalf.discountFirstHour}
				/>
			{:else}
				<PriceRow
					active={isToday(price.days) && isInTime(price.fullDay)}
					startTime={price.fullDay.startTime}
					endTime={price.fullDay.endTime}
					firstHourPrice={price.fullDay.firstHour}
					nextHourPrice={price.fullDay.nextHour}
					discount={price.fullDay.discountFirstHour}
				/>
			{/if}
		{/each}
	</div>
</Wrapper>
