import React from "react";

import { RadioGroup, RadioGroupItem } from "../src/components/radioGroup";
export default {
    title: 'RadioGroup',
    component: RadioGroup,
    parameters: {

        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
export const radioGroups = (args) => {
    return (<RadioGroup defaultValue="option-one">

        <div dir="rtl" className="flex items-center space-x-2">

            <RadioGroupItem label="1ایت" {...args} value="option-one" id="option-one" />
        </div>
        <div dir="rtl" className="flex items-center space-x-2">
            <RadioGroupItem label="2ایت" {...args} value="option-two" id="option-two" />
        </div>
    </RadioGroup>)
}
radioGroups.args = {
    disabled: false,
    size: "sm",
}