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
export const radioGroups = ({ size, ...args }) => {
    return (<RadioGroup defaultValue="option-one">

        <div className="flex items-center ">
            <label htmlFor="option-two" className="mx-8 text-sm font-yekan">عنوان</label>
            <RadioGroupItem label="عنوان" size={size}  {...args} value="option-one" id="option-one" />
        </div>
        <div className="flex items-center ">
            <label htmlFor="option-two" className="mx-8 text-sm font-yekan">عنوان</label>

            <RadioGroupItem size={size} {...args} value="option-two" id="option-two" />
        </div>
    </RadioGroup>)
}
radioGroups.args = {
    disabled: false,
    size: "sm",
}