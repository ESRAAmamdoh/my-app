import React from 'react'
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
export default function ChartComponent(props) {
  return (
    <>
      <ChartContainer config={props.chartConfig} className="min-h-[200px] w-full lg:w-1/2">
      <BarChart accessibilityLayer data={props.barData}>
      <CartesianGrid vertical={false} />
      <XAxis
      dataKey="date"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
     
    />
     <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="amount" fill="#fa3c65" radius={4} />
      
      </BarChart>
    </ChartContainer> 
    </>
  )
}
