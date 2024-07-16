import React from 'react'
import { useState } from "react";
import { cn } from "@/lib/utils"

import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
export default function ComboBox(props) {

    const [open, setOpen] = useState(false)
    const [customers, setCustomers] = useState(props.customersList);
  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {props.filterId
            ? customers.find(customer =>  customer.id == props.filterId)?.name
            : "Select customer..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search customers..." />
          <CommandEmpty>No customers found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
            {customers.map((customer) => (
              <CommandItem
                key={customer.id}
                value={customer.id}
                onSelect={(currentValue) => {
                  props.setFilterId(currentValue === props.filterId ? "" : customers.find(customer=>customer.name == currentValue).id)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    props.filterId === customer.id ? "opacity-100" : "opacity-0"
                  )}
                />
                {customer.name}
              </CommandItem>
            )) }
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
    </>
  )
}
