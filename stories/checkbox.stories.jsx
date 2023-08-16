import React from "react";
import { Checkbox } from "../src/components/checkbox";
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
    return (<div>
        <Checkbox {...args} />
    </div>)
}
checkbox.args = {
    disabled: false,
    size: "md",
}