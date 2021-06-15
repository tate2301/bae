import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import NicheCard from 'components/Cards/NicheCard'
import React from 'react'

function ExploreNiches() {
    return (
        <Box w={"100%"} my={8}>
            <Heading>Explore event niches</Heading>
            <SimpleGrid columns={{base: 1, md: 3}} my={4}>
                <NicheCard 
                    title="Featured Collection: WanderLust" 
                    subtitle="Travel from home with online experiences"/>
            </SimpleGrid>
        </Box>
    )
}

export default ExploreNiches
