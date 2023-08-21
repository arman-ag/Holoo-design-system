import { Toast } from "../src/components/toast";
import { Toaster } from "../src/components/toast/toaster";
import { useToast } from "../src/hooks/use-toast";
export default {
    title: "snack bars",
    component: Toast,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argsTypes: {
        backgroundColor: { control: "color" }
    }
};
export const snackBars = () => {
    const { toast } = useToast()

    return (
        <div>
            <Toaster />
            <button
                onClick={() => {
                    toast({
                        title: "Scheduled: Catch up",
                        description: "Friday, February 10, 2023 at 5:57 PM",
                    })
                }}
            >
                Show Toast
            </button>
        </div>
    )
}