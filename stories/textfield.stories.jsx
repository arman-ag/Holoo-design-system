import { zodResolver } from "@hookform/resolvers/zod";
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from "zod";
import { Button } from '../src/components/buttons';
import { Form, FormControl, FormDescription, FormField, FormItem } from '../src/components/form';
import { Textarea } from '../src/components/textarea';
export default {
    title: 'Textarea',
    component: Textarea,
    parameters: {

        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
export const textarea = (args) => {
    const FormSchema = z.object({
        description: z.string().min(2, {
            message: "description must be at least 2 characters.",
        }),
    })
    const form = useForm({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data) {
        alert(data.description)

    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <Textarea label={"توضیحات"} placeholder="description"  {...args} {...field} />

                        </FormItem>
                    )}
                />

            </form>
        </Form>

    )
}
export const form = (args) => {
    const FormSchema = z.object({
        textfield: z.string().min(2, {
            message: "textfield must be at least 2 characters.",
        }),
    })
    const form = useForm({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data) {
        alert(data.textfield)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="textfield"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea dir="rtl"  {...args} {...field} />
                            </FormControl>
                            <FormDescription dir="rtl">
                                متن کمکی
                            </FormDescription>
                        </FormItem>
                    )}
                />
                <Button type="submit">ثبت</Button>
            </form>
        </Form>
    )
}
form.args = {
    placeholder: "وارد کردن متن",
    disabled: false,
    label: "برچسب",
    dir: "rtl"
}
textarea.args = {
    placeholder: "وارد کردن متن",
    disabled: false,
    label: "برچسب",
    dir: "rtl"
}
