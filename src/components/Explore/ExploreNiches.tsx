import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import NicheCard from 'components/Cards/NicheCard'
import HorizontalScroll from 'layouts/HorizontalScroll'
import { INicheSDUIData } from 'lib/types'
import React from 'react'

function ExploreNiches({title, subtitle, data}: {
    title: string
    subtitle?: string
    data?: Array<INicheSDUIData> 
}) {
    return (
        <Box w={"100%"} my={8}>               
            <HorizontalScroll title={title} subtitle={subtitle}>
                {
                    data?.map((value, key) => 
                        <NicheCard
                            key={key}
                            name={value.name} 
                            tag={value.tag}
                            img={value.img}
                            tagline={value.tagline}/>
                    )
                }
            </HorizontalScroll>
        </Box>
    )
}

export default ExploreNiches
