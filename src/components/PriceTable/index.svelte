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
	const isInTime = price => hour >= bowling.startTime && hour <= bowling.endTime
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

		{#each prices.bowling as bowling}
			<DayCell
				dayClass={bowling.firstHalf && bowling.secondHalf}
				active={isToday(bowling.days)}
				days={bowling.days}
				{dayNames}
			/>

			{#if bowling.firstHalf && bowling.secondHalf}
				<PriceRow
					active={isToday(bowling.days) && isFirstHalf(bowling.firstHalf)}
					startTime={bowling.firstHalf.startTime}
					endTime={bowling.firstHalf.endTime}
					firstHourPrice={bowling.firstHalf.firstHour}
					nextHourPrice={bowling.firstHalf.nextHour}
					discount={bowling.firstHalf.discountFirstHour}
				/>

				<PriceRow
					active={isToday(bowling.days) && isSecondHalf(bowling.secondHalf)}
					startTime={bowling.secondHalf.startTime}
					endTime={bowling.secondHalf.endTime}
					firstHourPrice={bowling.secondHalf.firstHour}
					nextHourPrice={bowling.secondHalf.nextHour}
					discount={bowling.secondHalf.discountFirstHour}
				/>
			{:else}
				<PriceRow
					active={isToday(bowling.days) && isInTime(bowling.fullDay)}
					startTime={bowling.fullDay.startTime}
					endTime={bowling.fullDay.endTime}
					firstHourPrice={bowling.fullDay.firstHour}
					nextHourPrice={bowling.fullDay.nextHour}
					discount={bowling.fullDay.discountFirstHour}
				/>
			{/if}
		{/each}
	</div>
</Wrapper>
