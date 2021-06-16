import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import { SDUIComponent } from 'lib/sdui'
import { ISDUIData } from 'lib/types'
import React from 'react'

function GridList({title, config, data}: {
    title?: string
    config: {
        columns: {
            base: number
            sm?: number
            md?: number
            lg?: number
            xl?: number
        }
        spacing: number
    }
    data: [{
        name: string
        props: ISDUIData
    }]
}) {
    if (typeof config?.columns === "number") {
        config.columns = {
            base: config.columns
        }
    }

    return (
        <Box experimental_spaceY={4} py={8}>
            <Heading fontSize={{base: "lg", md: "2xl", xl: "4xl"}}>
                {title}    
            </Heading>  
            <SimpleGrid columns={{...config.columns}} spacing={config.spacing}>
                {
                    data?.map((value: { name: string, props: ISDUIData }, key: number) => <SDUIComponent key={key} name={value.name} props={value.props} inGrid={true} />)
                }
            </SimpleGrid> 
        </Box>
    )
}

export default GridList
