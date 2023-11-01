import { useForm } from "react-hook-form";
import { Button } from '../src/components/buttons';

import DateSelector from "../src/components/dataSelector/index.tsx";
import { Form, FormControl, FormField, FormItem } from '../src/components/form';
export default {
    title: "date selector",
    component: DateSelector,
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
                                <DateSelector
                                    placeholder="وارد کردن تاریخ"
                                    range
                                    dateSeparator=" تا "
                                    size={"lg"}
                                    label="تاریخ"
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