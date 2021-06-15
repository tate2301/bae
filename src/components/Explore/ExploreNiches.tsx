import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import NicheCard from 'components/Cards/NicheCard'
import { INicheSDUIData } from 'lib/types'
import React from 'react'

function ExploreNiches({title, subtitle, data}: {
    title?: string
    subtitle?: string
    data?: Array<INicheSDUIData> 
}) {
    return (
        <Box w={"100%"} my={8}>
            <Heading>{title}</Heading>
            <Text>{subtitle}</Text>
            <SimpleGrid columns={{base: 1, md: 2}} spacing={8} my={4}>
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
            </SimpleGrid>
        </Box>
    )
}

export default ExploreNiches
