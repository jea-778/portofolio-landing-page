import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const data = {
    labels: ['Python', 'JavaScript', 'Java', 'C++', 'SQL', 'Cloud'],
    datasets: [
        {
            label: 'Skill',
            data: [85, 75, 70, 65, 68, 80],
            backgroundColor: '#E5EBF1',
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
            ticks: { color: '#6B7280', font: { size: 12 } },
        },
        y: {
            display: false,
            beginAtZero: true,
        },
    },
};

export default function BarChartV() {
    return (
        <div className="w-[432px] h-[394px] max-w-xl bg-white p-6 rounded-xl border shadow-lg transition-shadow duration-300 hover:shadow-2xl">
            <h3 className="text-[16px] leading-[24px] tracking-[0px] font-medium pb-2">Skills Proficiency</h3>
            <h2 className="text-4xl font-bold pb-2">85%</h2>
            <p className="text-sm text-green-500 font-semibold">Overall +5%</p>
            <div className="mt-6 transition-all duration-700">
                <Bar
                    data={data}
                    options={{
                        ...options,
                        animation: {
                            duration: 1200,
                            easing: 'easeOutQuart',
                        },
                    }}
                />
            </div>
        </div>
    );
}
