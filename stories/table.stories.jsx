import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../src/components/table";
export default {
    title: "table",
    component: Table,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argsTypes: {
        backgroundColor: { control: "color" }
    }
};
const invoices = [
    {
        invoice: "حسام",
        paymentStatus: "پرداختشده",
        totalAmount: "2500000",
        paymentMethod: "کارت اعتباری",
    },
    {
        invoice: "ارمان",
        paymentStatus: "در انتظار پرداخت",
        totalAmount: "300000",
        paymentMethod: "پی پال",
    },
    {
        invoice: "امیر علی",
        paymentStatus: "پرداختنشده",
        totalAmount: "40000",
        paymentMethod: "انتقال بانکی",
    },
    {
        invoice: "غلام رضا",
        paymentStatus: "پرداختشده",
        totalAmount: "50000",
        paymentMethod: "کارت اعتباری",
    },
    {
        invoice: "ثمین",
        paymentStatus: "پرداختشده",
        totalAmount: "60000",
        paymentMethod: "پی پال",
    },
    {
        invoice: "مهرداد",
        paymentStatus: "در انتظار پرداخت",
        totalAmount: "650000",
        paymentMethod: "انتقال بانکی",
    },
    {
        invoice: "سحر",
        paymentStatus: "پرداختنشده",
        totalAmount: "80000",
        paymentMethod: "کارت اعتباری",
    },
]

export function TableDemo() {
    return (
        <Table dir="rtl">
            <TableCaption>لیست پرداختی</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className=" text-right">صورت حساب</TableHead>
                    <TableHead className="text-right">وضعیت</TableHead>
                    <TableHead className="text-right">روش</TableHead>
                    <TableHead className="text-right">مقدار</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                        <TableCell className=" font-medium">{invoice.invoice}</TableCell>
                        <TableCell className="text-right">{invoice.paymentStatus}</TableCell>
                        <TableCell className="text-right">{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
