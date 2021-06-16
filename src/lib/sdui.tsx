import components from "../components"
import React from "react"
import { Box } from "@chakra-ui/react"
import { ISDUIData } from "./types"

const PageUI = (props: {
    component_tree: IComponentTree
}) => {
    const { component_tree } = props
    return (
        <Box experimental_spaceY={{base: 16, md: 24}}>
            {component_tree.map((message: ISDUIComponent, key: number) => {
                const Component = resolveComponent(message.name)
                return (
                    <Component key={key} {...message.content} />
                )
            })}
        </Box>
    )
}

export const SDUIComponent = ({name, props, inGrid}: {
    name: string
    props: ISDUIData
    inGrid: boolean
}) => {
    const Component = resolveComponent(name)
    return (
        <Component {...props} inGrid={inGrid}/>
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