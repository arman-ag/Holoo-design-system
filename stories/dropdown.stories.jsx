import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "../src/components/buttons"
import {
    DropDown
} from "../src/components/dropDown"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "../src/components/form"
export default {
    title: "dropdown",
    component: DropDown,
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
const FormSchema = z.object({
    awesomeSelect: z.array(z.object(
        { value: z.string(), label: z.string() }
    ))
})

export const dropdown = (args) => {
    const form = useForm({ resolver: zodResolver(FormSchema), })

    function onSubmit(data) {
        alert(JSON.stringify(data))
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="awesomeSelect"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormControl>
                                    <DropDown
                                        id={56}
                                        name={field.name}
                                        value={field.value}
                                        onChange={field.onChange}
                                        ref={field.ref}
                                        onBlur={field.onBlur}
                                        {...args} />
                                </FormControl>
                                <FormMessage className="mt-2" />
                            </FormItem>
                        )
                    }}
                />
                <div div style={{ marginTop: "25px" }}>
                    <Button size={"sm"} type="submit">Submit</Button>
                </div >
            </form >
        </Form >
    )
}
dropdown.args = {
    dir: "rtl",
    options: [
        { value: 'عنوان', label: 'عنوان' },
        {
            value: '0000000000000000000000000000002عنوان', label: '0000000000000000000000000000002عنوان'
        },
        { value: '3عنوان', label: '3عنوان' },
        { value: '4عنوان', label: '4عنوان' },
        { value: '5عنوان', label: '5عنوان' },
        { value: '6عنوان', label: '6عنوان' },
        { value: '7عنوان', label: '7عنوان' },
        { value: '8عنوان', label: '8عنوان' },
        { value: '9عنوان', label: '9عنوان' },
    ],
    searchable: true,
    placeholder: "عنوان یا متن جستو جو",
    label: "لیبل",
    disabled: false,
    multiItem: true,
    noOptionsMessage: "آیتم مورد نظر یافت نشد"
}