import { useForm } from "react-hook-form"
import { Button } from "../src/components/buttons"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage
} from "../src/components/form"
import {
    ReSelect
} from "../src/components/reselect"
export default {
    title: "reselect",
    component: ReSelect,
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
export const dropdown = (args) => {
    // const FormSchema = z.object({
    //     email: z
    //         .string({
    //             required_error: "Please select an email to display.",
    //         })
    //         .email(),
    // })


    const form = useForm()

    function onSubmit(data) {
        alert(data)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <ReSelect  {...args} />
                            </FormControl>
                            <FormDescription>
                                You can manage email addresses in your
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
dropdown.args = {
    dir: "rtl",
    options: [
        { value: 'عنوان', label: 'عنوان' },
        { value: '2عنوان', label: '2عنوان' },
        { value: '3عنوان', label: '3عنوان' },
    ],
    searchable: true,
    placeholder: "عنوان یا متن جستو جو",
    label: "لیبل",
    disabled: false
}