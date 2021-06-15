import components from "../components"
import React from "react"

const PageUI = (props: {
    component_tree: IComponentTree
}) => {
    const { component_tree } = props
    return (
        <>
            {component_tree.map((message: ISDUIComponent, key: number) => {
                const Component = resolveComponent(message.name)
                return (
                    <Component key={key} {...message.content} />
                )
            })}
        </>
    )
}

export const resolveComponent = (componentName: string) => {
    return read_prop(components, componentName)
}

function read_prop(obj: { [key: string]: any }, prop: string) {
    return obj[prop]
}

export type IComponentTree = Array<ISDUIComponent>

export interface ISDUIComponent {
    name: string,
    content?: {
        [key: string]: any 
    }
}

export default PageUI