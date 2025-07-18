export default function SkillValue() {
    function ProficiencyBar({ value }) {
        return (
            <div className="w-[85px] h-[4px] bg-white/20 rounded">
                <div className="h-[4px] bg-blue-400 rounded" style={{ width: `${value}%` }}></div>
            </div>

        );
    }

    const skills = [
        { name: "JavaScript", proficiency: 80, lastUsed: "2024-1-2", growth: "10%" },
        { name: "React", proficiency: 75, lastUsed: "2024-7-15", growth: "8%" },
        { name: "Node.js", proficiency: 60, lastUsed: "2023-5-10", growth: "6%" },
        { name: "CSS", proficiency: 90, lastUsed: "2024-1-2", growth: "12%" },
    ];
    return (
        <>
            <div className="flex w-[80%] mx-auto bg-white/10 text-white border border-white/10 rounded-lg overflow-hidden shadow-lg backdrop-blur">

                <table className="w-full">
                    <thead className="bg-white/10 text-white">
                        <tr className="grid grid-cols-4 px-6 py-6 font-semibold border-b border-white/10 text-slate-200">
                            <th className="text-left text-[14px] font-medium ">Skill</th>
                            <th className="text-left text-[14px] font-medium ">Proficiency</th>
                            <th className="text-left text-[14px] font-medium ">Last Used</th>
                            <th className="text-left text-[14px] font-medium ">Growth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {skills.map((skill, idx) => (
                            <tr key={skill.name} className={`grid grid-cols-4 px-6 py-6 ${idx !== skills.length - 1 ? 'border-b border-white/10' : ''}`}>

                                <td>{skill.name}</td>
                                <td className='flex items-center gap-3'>
                                    <ProficiencyBar value={skill.proficiency} />
                                    <h1 className='text-[14px] leading-[22px] tracking-[0px] '>{skill.proficiency}</h1>
                                </td>
                                <td className="text-blue-300 text-[14px]">{skill.lastUsed}</td>
                                <td className="text-green-300 text-[14px]">{skill.growth}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
