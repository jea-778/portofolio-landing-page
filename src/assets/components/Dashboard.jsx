import SkillValue from './SkillValue';
import BarChart from './BarChart';

export default function Dashboard() {


    return (
        <>
            <div className="w-full bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-9 mt-10 text-white shadow-xl max-w-6xl mx-auto">

                <header className='mx-6'>
                    <h1 className="text-[22px] font-bold leading-[28px] tracking-[0px] text-white/90">Skills Dashboard</h1>
                </header>

                <BarChart />

                <SkillValue />
            </div>

        </>
    )
}
