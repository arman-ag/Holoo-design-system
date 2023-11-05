import React from "react";
import { Checkbox } from "../src/components/checkbox";
import { Label } from "../src/components/label";
export default {
    title: 'Checkbox',
    component: Checkbox,
    parameters: {

        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
export const checkbox = (args) => {
    return (<div style={{
        display: "flex",
        alignItems: "center",

    }} >
        <Label style={{ marginRight: ".5rem" }} className="">متن تست</Label>
        <Checkbox {...args} />
    </div>)
}
checkbox.args = {
    disabled: false,
    size: "md",
}