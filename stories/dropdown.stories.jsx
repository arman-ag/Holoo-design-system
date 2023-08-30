import { useForm } from "react-hook-form"
import { Button } from "../src/components/buttons"
import {
    DropDown
} from "../src/components/dropDown"
import {
    Form,
    FormField
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
export const dropdown = (args) => {
    const form = useForm()

    function onSubmit(data) {
        console.log("data", data)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="select"
                    render={({ field }) => (
                        <div style={{ width: "200px" }} >
                            <DropDown
                                id={56}
                                name={field.name}
                                value={field.value}
                                onChange={field.onChange}
                                ref={field.ref}
                                onBlur={field.onBlur}
                                {...args} />

                        </div>

                    )
                    }
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