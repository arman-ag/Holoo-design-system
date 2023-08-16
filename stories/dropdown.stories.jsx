import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "/src/components/select"
export default {
    title: "dropdown",
    component: Select,
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
    return (
        <div >

            <Select   >
                <SelectTrigger  >
                    <SelectValue placeholder="عنوان متن" />
                </SelectTrigger>
                <SelectContent >
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
            </Select>

        </div >
    )
}