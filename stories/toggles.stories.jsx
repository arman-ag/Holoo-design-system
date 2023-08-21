import React from "react"
import { Switch } from "../src/components/switch"
export default {
    title: "toggles",
    component: Switch,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: "color"
    }
}
export const toggles = (args) => {
    return (

        <Switch {...args} />
    )
}
toggles.args = {
    id: "toggles",
    disabled: false
}