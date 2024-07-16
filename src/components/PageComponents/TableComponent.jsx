import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
   
export default function TableComponent(props) {
  return (
    <>
      <Table>
      <TableCaption>A list of your recent transactions.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.filterCostomerId.map((el) => (
          <TableRow key={el.id}>
            <TableCell>{el.id}</TableCell>
            <TableCell className="font-medium">{props.filterCostomerName}</TableCell>
            <TableCell>{el.date}</TableCell>
            <TableCell className="text-right">{el.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">${props.amounts.reduce((sum,x)=>sum+=x, 0)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table> 
    </>
  )
}
