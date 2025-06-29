import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Filler,
    Tooltip
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Filler, Tooltip);

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            fill: true,
            data: [7, 6, 1, 9, 5, 7],
            borderColor: '#1A80E5',
            backgroundColor: (ctx) => {
                const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 200);
                gradient.addColorStop(0, 'rgba(26, 128, 229, 0.15)');
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
                return gradient;
            },
            tension: 0.5,
            pointRadius: 0,
            borderWidth: 2,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
    },
    scales: {
        x: {
            grid: { display: false },
            ticks: { color: '#6B7280', font: { size: 12 } },
        },
        y: {
            display: false,
        },
    },
};

export default function BarChartH() {
    return (
        <div className="w-[432px] h-[394px] max-w-xl bg-white border rounded-xl shadow transition-shadow duration-300 hover:shadow-2xl">
            <div className='flex flex-col justify-between h-full p-6'>
                <h3 className="text-[16px] leading-[24px] tracking-[0px] font-medium text-[#0D141C] pb-2">Skill Growth Over Time</h3>
                <h2 className="text-4xl font-bold pb-2">15%</h2>
                <p className="text-sm text-green-500 font-semibold">Last 6 Months +2%</p>
                <div className="mt-6">
                    <Line data={data} options={options} />
                </div>
            </div>
        </div>
    );
}
