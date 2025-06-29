import React from 'react'
import BarChartV from './BarChartV'
import BarChartH from './BarChartH'

export default function BarChart() {
    return (
        <>
            <section className="flex justify-center items-center p-6 gap-4">
                <BarChartV />
                <BarChartH />
            </section>
        </>
    )
}
