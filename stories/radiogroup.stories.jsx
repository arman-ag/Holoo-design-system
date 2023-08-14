import React from "react";

import { Label } from "../src/components/label";
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
            <RadioGroupItem {...args} value="option-one" id="option-one" />
            <Label className="mr-7" htmlFor="option-one">ایتم1</Label>
        </div>
        <div dir="rtl" className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">ایتم 2</Label>
        </div>
    </RadioGroup>)
}
radioGroups.args = {
    disabled: false
}