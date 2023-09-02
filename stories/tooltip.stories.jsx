import { Button } from '../src/components/buttons';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../src/components/tooltip";
export default {
    title: "Tooltips",
    component: Tooltip,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argsTypes: {
        backgroundColor: { control: "color" }
    }
};
export const popover = () => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button>
                        show tooltip
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>اضافه کردن به لایبری</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}