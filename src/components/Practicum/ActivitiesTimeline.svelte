<script lang="ts">
	import Chart from './Chart.svelte';
	import moment from 'moment';

	function chunkStringByMaxLen(string: string, maxLen: number) {
		const temp = string.split(' ').reduce(
			(acc: any, c: any) => {
				const currIndex = acc.length - 1;
				const currLen = acc[currIndex].join(' ').length;
				if (currLen + c.length > maxLen) {
					acc.push([c]);
				} else {
					acc[currIndex].push(c);
				}

				return acc;
			},
			[[]]
		);

		const out = temp.map((arr) => arr.join(' '));
		console.log(out);
		return out;
	}

	export let data: Array<any>;

	const options = {
		series: [
			{
				data: data.map((task) => ({
					x: chunkStringByMaxLen(task.name, 25),
					y: [
						moment(task.start, 'MMMM D, YYYY').toDate().getTime(),
						moment(task.end, 'MMMM D, YYYY').toDate().getTime()
					]
				}))
			}
		],
		chart: {
			height: 80 * data.length,
			type: 'rangeBar'
		},
		plotOptions: {
			bar: {
				horizontal: true
			}
		},
		xaxis: {
			type: 'datetime',
			labels: {
				style: {
					fontSize: '14px',
					fontFamily: 'Inter, Helvetica, Arial, sans-serif'
				}
			}
		},
		yaxis: {
			labels: {
				maxWidth: 300,
				style: {
					fontSize: '16px',
					cssClass: 'wrap',
					fontFamily: 'Inter, Helvetica, Arial, sans-serif'
				}
			},
			lines: {
				show: true
			}
		},
		grid: {
			xaxis: {
				lines: {
					show: true
				}
			},
			yaxis: {
				lines: {
					show: false
				}
			}
		},
		fill: {
			opacity: 1,
			colors: ['#347be6']
		}
	};
	console.log(options);
</script>

<div class="chart">
	<Chart {options} />
</div>

<style lang="scss">
	.chart {
	}
	.wrap {
		overflow-wrap: break-word;
	}
</style>
