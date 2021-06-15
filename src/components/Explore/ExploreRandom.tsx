import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/layout'
import EventCard from '../../components/Cards/EventCard'
import React from 'react'

function ExploreRandom({title, subtitle}: {
    title: string
    subtitle?: string
}) {
    return (
        <Box w={"100%"} my={8}>
            <Box>
                <Heading>{title}</Heading>
                <Text fontSize="xl">
                    {subtitle}
                </Text>
            </Box>
            <SimpleGrid columns={{base: 1, md: 3, xl: 4}} my={4}>
                <EventCard 
                    title="Living Room Hunter's Scavenger" 
                    price={12.00} 
                    city={"Chinhoyi"} 
                    tickets={50} 
                    favorite={false}
                    remaining_slots={20} />
            </SimpleGrid>
        </Box>
    )
}

export default ExploreRandom
