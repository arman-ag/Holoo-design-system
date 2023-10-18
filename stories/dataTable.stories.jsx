
import { ArrowUpDown } from "lucide-react";
import * as React from "react";
import { Button } from "../src/components/buttons";
import { Checkbox } from "../src/components/checkbox";
import { DataTable } from "../src/components/dataTable";

export default {
    title: "data-table",
    component: DataTable,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argsTypes: {
        backgroundColor: { control: "color" }
    }
};
const data = [
    {
        id: "m5gr84i9",
        amount: 316,
        status: "success",
        email: "ken99@yahoo.com",
    },
    {
        id: "3u1reuv4",
        amount: 242,
        status: "success",
        email: "Abe45@gmail.com",
    },
    {
        id: "derv1ws0",
        amount: 837,
        status: "processing",
        email: "Monserrat44@gmail.com",
    },
    {
        id: "5kma53ae",
        amount: 874,
        status: "success",
        email: "Silas22@gmail.com",
    },
    {
        id: "bhqecj4p",
        amount: 721,
        status: "failed",
        email: "carmella@hotmail.com",
    },
    {
        id: "m5gr94casi9",
        amount: 316,
        status: "success",
        email: "ken99@yahoo.com",
    },
    {
        id: "3u1rsaccsacv4",
        amount: 242,
        status: "success",
        email: "Abe45@gmail.com",
    },
    {
        id: "descav1wcsas0",
        amount: 837,
        status: "processing",
        email: "Monserrat44@gmail.com",
    },
    {
        id: "5kcasmacas53ae",
        amount: 874,
        status: "success",
        email: "Silas22@gmail.com",
    },
    {
        id: "bhqcaecsaccj4p",
        amount: 721,
        status: "failed",
        email: "carmella@hotmail.com",
    },
    {
        id: "m5gr8casci9",
        amount: 316,
        status: "success",
        email: "ken99@yahoo.com",
    },
    {
        id: "3u1reacsauv4",
        amount: 242,
        status: "success",
        email: "Abe45@gmail.com",
    },
    {
        id: "dervacasc1ws0",
        amount: 837,
        status: "processing",
        email: "Monserrat44@gmail.com",
    },
    {
        id: "5kmacsa53ae",
        amount: 874,
        status: "success",
        email: "Silas22@gmail.com",
    },
    {
        id: "bhqeacssacj4p",
        amount: 721,
        status: "failed",
        email: "carmella@hotmail.com",
    },
]

const columns = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("status")}</div>
        ),
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="text"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    },
    {
        accessorKey: "amount",
        header: ({ column }) => <Button variant={"text"}
            onClick={() => column.toggleSorting(column.getIsSorted() === "desc")} className="text-right">Amount</Button>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))

            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original

            return (
                <div style={{ backgroundColor: "blue" }}></div>
            )
        },
    },
]

export const DataTableDemo = () => {
    return (
        <DataTable columns={columns} data={data} />
    )
}