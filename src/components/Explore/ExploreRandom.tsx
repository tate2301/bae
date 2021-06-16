import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/layout'
import EventCard from '../../components/Cards/EventCard'
import React from 'react'
import { ISDUIData } from 'lib/types'
import HorizontalScroll from "../../layouts/HorizontalScroll"

function ExploreRandom({title, subtitle, data}: {
    title: string
    subtitle?: string,
    data?: Array<ISDUIData>
}) {
    return (
        <Box w={"100%"} my={8}>
            <HorizontalScroll title={title} subtitle={subtitle}>
                {
                    data?.map((value, key) => 
                        <EventCard 
                            key={key}
                            title={value.title}
                            price={value.price} 
                            city={value.city_name} 
                            tickets={value.tickets} 
                            favorite={value.favorite}
                            remaining_slots={value.remaining_slots} />
                    )
                }
            </HorizontalScroll>
        </Box>
    )
}

export default ExploreRandom
