import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/layout'
import EventCard from '../../components/Cards/EventCard'
import React from 'react'

function ExploreRandom() {
    return (
        <Box w={"100%"} my={8}>
            <Box>
                <Heading>Discover Events</Heading>
                <Text fontSize="xl">
                    Unique activities with local experts—in person or online.
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
