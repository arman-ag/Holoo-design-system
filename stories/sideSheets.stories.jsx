import { DirectionProvider } from "@radix-ui/react-direction"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../src/components/dialog"
export default {
    title: "Side sheets",
    component: Dialog,
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
export const SideSheets = ({ dir, ...props }) => {
    return (
        <DirectionProvider dir="ltr">
            <Dialog dir="rtl">
                <DialogTrigger dir="rtl">Open</DialogTrigger>
                <DialogContent dir={"rtl"}>
                    <DialogHeader dir="rtl">
                        <DialogTitle dir="rtl">عنوان</DialogTitle>
                        <DialogDescription>
                            <div dir="rtl">
                                زسشز
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </DirectionProvider>

    )
}
SideSheets.args = {
    dir: "rtl"
}