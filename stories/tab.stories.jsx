import { GalleryHorizontal } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../src/components/tabs";
export default {
    title: "tabs",
    component: Tabs,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argsTypes: {
        backgroundColor: { control: "color" }
    }
};
export const tabs = ({ title, disabled, ...props }) => {
    return (
        <div>
            <Tabs defaultValue="account" className="w-[800px]">
                <TabsList>
                    <TabsTrigger disabled={disabled} halfBorder={false} value="account">
                        <div className="flex items-center">
                            <GalleryHorizontal className="mx-8" size={"14px"} />
                            {
                                title
                            }
                        </div>
                    </TabsTrigger>
                    <TabsTrigger halfBorder={true} value="password">{title}</TabsTrigger>
                    <TabsTrigger halfBorder={true} value="test">
                        <div style={{ padding: "8px 0 ", justifyContent: "space-around", display: "flex", flexDirection: "column" }} className="flex-col justify-between items-center h-[64px]">
                            <GalleryHorizontal className="mx-8" size={"14px"} />
                            <span>
                                {
                                    title
                                }
                            </span>
                        </div>
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <div style={{ minHeight: "200px" }} className=" flex items-center font-yekan bg-red-900 ">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </div>

                </TabsContent>
                <TabsContent value="test">
                    <div style={{ minHeight: "200px" }} className=" flex items-center font-yekan bg-red-900 ">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص ط
                    </div>

                </TabsContent>
                <TabsContent style={{ minHeight: "200px" }} value="password">  <div className="bg-gray-500 ">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                </div></TabsContent>
            </Tabs>
        </div>
    )
}
tabs.args = {
    title: "عنوان",
    disabled: false
}