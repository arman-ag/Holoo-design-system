import { Button } from "../src/components/buttons";
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
            <Toaster dir={"rtl"} />
            <Button
                onClick={() => {
                    toast({
                        title: "تست نوتیفیکیشن",
                        description: "لورم ایپسوم متن ساختگی با تولید ن بلکه  موجود طراحی اساسا مورد استفاده قرار گیرد  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با رد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
                    })
                }}
            >
                Show Toast
            </Button>
        </div>
    )
}