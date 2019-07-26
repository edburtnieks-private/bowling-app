<script>
	import PriceTable from '../components/PriceTable/index.svelte'

	const prices = {
		bowling: [
			{
				days: [1, 2, 3, 4],
				firstHalf: {
					startTime: '12:00',
					endTime: '18:00',
					firstHour: 6.00,
					nextHour: 3.00,
					discountFirstHour: 30
				},
				secondHalf: {
					startTime: '18:00',
					endTime: '24:00',
					firstHour: 9.00,
					nextHour: 3.50,
					discountFirstHour: 20
				}
			},
			{
				days: [5],
				firstHalf: {
					startTime: '12:00',
					endTime: '18:00',
					firstHour: 7.00,
					nextHour: 3.00,
					discountFirstHour: 30	
				},
				secondHalf: {
					startTime: '18:00',
					endTime: '24:00',
					firstHour: 12.00,
					nextHour: 5.00,
					discountFirstHour: 20
				}
			},
			{
				days: [6],
				fullDay: {
					startTime: '11:00',
					endTime: '24:00',
					firstHour: 12.50,
					nextHour: 6.50,
					discountFirstHour: 20
				}
			},
			{
				days: [0],
				fullDay: {
					startTime: '11:00',
					endTime: '24:00',
					firstHour: 10.00,
					nextHour: 5.00,
					discountFirstHour: 20
				}
			}
		],
		shoes: 1.20
	}
</script>

<svelte:head>
	<title>Bowling App</title>
</svelte:head>

<h1>Bowling App</h1>

<PriceTable {prices} />
