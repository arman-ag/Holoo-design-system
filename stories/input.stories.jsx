// import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from "../src/components/input";
const FormSchema = z.object({
    username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
});
const onSubmit = (data) => {
    console.log(data);
}


export default {
    title: 'Input',
    component: Input,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const password = {
    args: {
        type: "password",
        placeholder: "password",
        size: "md",



    },
};
export const telephone = {
    args: {
        type: "tel",
        placeholder: "telephone",


    },
};
export const text = {
    args: {
        type: 'text',
        placeholder: "text",
        errors: {

        }


    },
};
export const number = {
    args: {
        type: 'number',


    },

};
export const error = {
    args: {
        type: 'password',
        name: "test",

    },

};