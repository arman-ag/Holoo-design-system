import { Mail, MessageSquare, PlusCircle, UserPlus } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger
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
        <DropdownMenu dir="rtl">
            <DropdownMenuTrigger >Open</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem >پروفایل</DropdownMenuItem>
                <DropdownMenuItem >پرداختی ها </DropdownMenuItem>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger >
                        <UserPlus className="ml-2 h-4 w-4" />
                        <span>دعوت نامه</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal  >
                        <DropdownMenuSubContent >
                            <DropdownMenuItem>
                                <Mail className="ml-2 h-4 w-4" />
                                <span>Email</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <MessageSquare className="ml-2 h-4 w-4" />
                                <span>Message</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <PlusCircle className="ml-2 h-4 w-4" />
                                <span>More...</span>
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>

                <DropdownMenuItem >تیم ها </DropdownMenuItem>
                <DropdownMenuItem >عضویت</DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>

    )
}