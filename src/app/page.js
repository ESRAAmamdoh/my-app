"use client"
import {customersList,transactionsList} from "@/api/api"
import { useState } from "react";



import ComboBox from "@/components/PageComponents/ComboBox";
import TableComponent from "@/components/PageComponents/TableComponent";
import ChartComponent from "@/components/PageComponents/ChartComponent";


var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export default function Home() {
  const [filterId,setFilterId] = useState()


  const filterCostomerId= transactionsList.filter((el) => el.customer_id==filterId );
  const filterCostomerName= customersList.find((el) => el.id==filterId )?.name;


  const amountsGroupedByDate = groupBy(filterCostomerId, 'date');
  const amountKeys=Object.keys(amountsGroupedByDate);
  const amountValues=Object.values(amountsGroupedByDate);
  const amounts=amountValues.map(el=>el.reduce((sum,x)=>sum+=x.amount, 0));

  const barData=amountKeys.map((el,i)=> Object.fromEntries([["date",el],["amount", amounts[i]]]));
  const chartConfig = {
    amount: {
      label: "Amount",
      color: "#2563eb",
    }
  } 




 
  
  return (
   <>

<div className="w-3/4 ">
   <h1 className="text-center mt-[2rem] text-2xl font-bold text-white">Transactions Dashboard</h1>
      <div className="customers flex flex-col items-center justify-center py-[5rem]">
  
              
        <ComboBox filterId={filterId} setFilterId={setFilterId}  customersList={customersList} />
       {  filterId&&  <div className="flex justify-between items-center mt-[10rem]  w-full">

      <TableComponent filterCostomerId={filterCostomerId} amounts={amounts} filterCostomerName={filterCostomerName} />

       <ChartComponent chartConfig={chartConfig} barData={barData} />
   
    </div>}

      </div>
      </div>
   </>
  );
}
