<script context="module">
	export async function preload() {
		const response = await this.fetch('api/v1/prices')
		const prices = await response.json()

		return {
			prices
		}
	}
</script>

<script>
	import PriceTable from '../components/PriceTable/index.svelte'

	export let prices
</script>

<svelte:head>
	<title>Bowling App</title>
</svelte:head>

<PriceTable {prices} />
