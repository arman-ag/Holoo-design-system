import { useForm } from "react-hook-form";
import { Button } from '../src/components/buttons';

import { Form, FormControl, FormField, FormItem } from '../src/components/form';
import TimeSelector from "../src/components/timeSelector/index.tsx";
export default {
    title: "time selector",
    component: TimeSelector,
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
export const dataSelector = (args) => {
    const form = useForm()

    function onSubmit(data) {
        console.log(data?.calender)

    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="calender"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <TimeSelector
                                    placeholder="وارد کردن زمان"
                                    size={"lg"}
                                    label="زمان"
                                    id={5}
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button className="mt-4" type="submit">ثبت</Button>
            </form>
        </Form>


    )
}
dataSelector.args = {

}