

import Navbar from "../layouts/Navbar"
import IntroPersonalBrand from "../components/Intro"
import Dashboard from "../components/Dashboard";
function App() {



  return (
    <>
      <Navbar />

      <IntroPersonalBrand />

      <Dashboard />

      <div>
        <h1 className="text-[22px] font-bold leading-7 pl-[325px] mt-7 mb-6">
          Add New Skill
        </h1>

        <div className="flex flex-col gap-4 items-start pl-[325px]">
          <div className="flex flex-col gap-2 w-[400px]">
            <label className="w-max text-4 font-medium text-[#0D141C]" htmlFor="">Skill Name</label>
            <input className="w-[448px] h-[56px] border p-[15px] border-[#D1DBE8] rounded-lg text-4 text-[#4F7396] placeholder:text-4 placeholder:text-[#4F7396] placeholder:font-regular" placeholder="e.g., Machine Learning" type="text" />

            <label className="w-max text-4 font-medium text-[#0D141C] pt-3 " htmlFor="">Proviciency (0-100)</label>
            <input className="w-[448px] h-[56px] border p-[15px] border-[#D1DBE8] rounded-lg text-4 text-[#4F7396] placeholder:text-4 placeholder:text-[#4F7396] placeholder:font-regular" placeholder="e.g., 85" type="text" />

            <label className="w-max text-4 font-medium text-[#0D141C] pt-3" htmlFor="">Last Used (YYYY-MM-DD)</label>
            <input className="w-[448px] h-[56px] border p-[15px] border-[#D1DBE8] rounded-lg text-4 text-[#4F7396] placeholder:text-4 placeholder:text-[#4F7396] placeholder:font-regular" placeholder="e.g., 2022-01-01" type="text" />
          </div>

          <div className="flex w-full justify-end mt-4 pr-[325px]">
            <button className="w-[92px] h-[40px] rounded-lg font-bold text-[14px] leading-[21px] tracking-[0px] text-white bg-[#1A80E5] hover:bg-blue-500 transition ">Add Skill</button>
          </div>
        </div>
      </div>

      <div className="h-[1000px] "></div>
    </>
  );
}

export default App