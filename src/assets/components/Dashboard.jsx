import SkillValue from './SkillValue';
import BarChart from './BarChart';

export default function Dashboard() {


    return (
        <>
            <header className='flex pl-[320px] p-6 pt-[60px]'>
                <h1 className='text-[22px] font-bold text-[#0D141C] leading-[28px] tracking-[0px]'>Skills Dashboard</h1>
            </header>

            <BarChart />

            <SkillValue />

        </>
    )
}
