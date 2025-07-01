import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const data = {
    labels: ['Python', 'JavaScript', 'Java', 'C++', 'SQL', 'Cloud'],
    datasets: [
        {
            label: 'Skill',
            data: [85, 75, 70, 65, 68, 80],
            backgroundColor: '#1A80E5',
            borderRadius: 6,
            barThickness: 40,
        },
    ],
};

const options = {
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
    scales: {
        x: {
            grid: { display: false },
            ticks: { color: 'white', font: { size: 12 } },
        },
        y: {
            display: false,
            beginAtZero: true,
        },
    },
};

export default function BarChartV() {


    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-[415px] max-w-xl bg-white/10 p-6 rounded-xl border border-white/10 shadow-lg"
        >
            <h3 className="text-[16px] leading-[24px] font-medium pb-2 text-slate-200">Skills Proficiency</h3>
            <h2 className="text-4xl font-bold pb-2">85%</h2>
            <p className="text-sm text-green-400 font-semibold">Overall +5%</p>
            <div className="pt-[30px]">
                <Bar data={data} options={options} />
            </div>
        </motion.div>

    );
}
