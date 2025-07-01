import { motion } from 'framer-motion';
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
            data: [7, 6, 2, 9, 5, 7],
            borderColor: '#2563EB',
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
            ticks: { color: 'white', font: { size: 12 } },
        },
        y: {
            display: false,
        },
    },
};

export default function BarChartH() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-[415px] max-w-xl bg-white/10 border border-white/10 rounded-xl shadow text-white"
        >
            <div className="flex flex-col justify-between h-full p-6">
                <h3 className="text-[16px] leading-[24px] font-medium text-slate-200 pb-2">Skill Growth Over Time</h3>
                <h2 className="text-4xl font-bold pb-2">15%</h2>
                <p className="text-sm text-green-400 font-semibold">Last 6 Months +2%</p>
                <div className="pt-[-10px]">
                    <Line data={data} options={options} />
                </div>
            </div>
        </motion.div>

    );
}
