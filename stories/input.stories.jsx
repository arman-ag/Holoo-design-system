// import { zodResolver } from '@hookform/resolvers/zod';
import { zodResolver } from "@hookform/resolvers/zod";
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from "zod";
import { Button } from '../src/components/buttons';
import { Form, FormControl, FormDescription, FormField, FormItem } from '../src/components/form';
import { Input } from "../src/components/input";

export default {
    title: 'Input',
    component: Input,
    parameters: {

        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export const password = (args) => {
    const FormSchema = z.object({
        password: z.string().min(2, {
            message: "password must be at least 2 characters.",
        }),
    })
    const form = useForm({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data) {
        alert(data.password)

    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (

                        <FormItem>
                            <Input label={"پسورد"} type="password" placeholder="password"  {...args} {...field} />

                        </FormItem>
                    )}
                />

            </form>
        </Form>

    )
};
export const phone = (args) => {
    const FormSchema = z.object({
        phone: z.string().min(2, {
            message: "phone must be at least 8 characters.",
        }),
    })
    const form = useForm({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data) {
        alert(data.phone)

    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input type="tel"  {...args} {...field} />
                            </FormControl>

                        </FormItem>
                    )}
                />

            </form>
        </Form>

    )
};
export const text = (args) => {
    const FormSchema = z.object({
        text: z.string().min(2, {
            message: "text must be at least 8 characters.",
        }),
    })
    const form = useForm({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data) {
        alert(data.text)

    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="text" type="text"  {...args} {...field} />
                            </FormControl>

                        </FormItem>
                    )}
                />

            </form>
        </Form>

    )

};
export const number = (args) => {

    const FormSchema = z.object({
        number: z.string().min(2, {
            message: "number must be at least 2 characters.",
        }),
    })
    const form = useForm({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data) {
        alert(data.number)

    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="number"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input type="number"  {...args} {...field} />
                            </FormControl>

                        </FormItem>
                    )}
                />

            </form>
        </Form>

    )
}

export const form = (args) => {
    const FormSchema = z.object({
        username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
    })
    const form = useForm({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data) {
        alert(data.username)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input dir="rtl"  {...args} {...field} />
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
    type: "text",
    size: "md",
    dir: "rtl",
    placeholder: "متن نوشته شده",
    label: "برچسب",
    disabled: false

}
number.args = {
    size: "md",
    dir: "rtl",
    placeholder: "عدد نوشته شده",
    label: "برچسب",
    disabled: false

}
text.args = {
    size: "md",
    dir: "rtl",
    placeholder: "متن نوشته شده",
    label: "برچسب",
    disabled: false

}
password.args = {
    size: "md",
    dir: "rtl",
    placeholder: "پسورد",
    label: "برچسب",
    disabled: false


}
phone.args = {
    size: "md",
    dir: "rtl",
    placeholder: "موبایل",
    label: "برچسب",
    disabled: false


}