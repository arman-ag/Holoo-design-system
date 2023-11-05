import { Button } from "../src/components/buttons";
import { Toaster } from "../src/components/toast";
import { useToast } from "../src/components/toast/use-toast";

export default {
    title: "snack bars",
    component: Toaster,
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
            <Toaster dir={"rtl"} />
            <Button
                onClick={() => {
                    toast({
                        title: "تست نوتیفیکیشن",
                        description: "لورم ایپسوم متن ساختگی با تولید ن بلکه  موجود طراحی اساسا مورد استفاده قرار گیرد  لورم ایپسوم متن ساختگی با تولید ",
                        action: <button>
                            action
                        </button>

                    })
                }}
            >
                Show Toast
            </Button>
        </div>
    )
}