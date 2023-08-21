import { Settings } from "lucide-react"
import { Button } from "../src/components/buttons"
export default {
    title: "Icon button",
    component: Button,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: {
            control: "color"
        }
    }
}
export const iconButton = ({ ...props }) => <Button {...props} >
    {<Settings className="h-[18px] w-[18px]" />}
</Button>

iconButton.args = {
    disabled: false,
    variant: "outline",
    size: "icon"
}