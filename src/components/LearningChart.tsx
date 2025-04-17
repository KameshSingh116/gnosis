'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { memo } from 'react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Learning Progress',
      data: [2, 3, 3, 4, 5, 7, 8],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
}

const options: ChartOptions<'line'> = {
  responsive: true,
  scales: {
    y: {
      type: 'linear',
      beginAtZero: true,
      ticks: {
        callback: function(tickValue) {
          return tickValue.toString()
        }
      },
    },
    x: {
      type: 'category',
    },
  },
}

const LearningChart = memo(function LearningChart() {
  return (
    <div className="w-full h-[300px]">
      <Line data={data} options={options} />
    </div>
  )
})

export default LearningChart 