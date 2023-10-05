import { Button } from "../src/components/buttons";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../src/components/dropdown-menu";
export default {
    title: "dropdown-Menu",
    component: DropdownMenu,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argsTypes: {
        backgroundColor: { control: "color" }
    }
};
export const DropdownMenuDemo = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger><Button>Open</Button></DropdownMenuTrigger>
            <DropdownMenuContent >
                <DropdownMenuLabel >My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}