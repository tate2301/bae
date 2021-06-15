import { Box, Heading } from '@chakra-ui/layout'
import React from 'react'

function ExploreCities({country_name}: IExploreCitiesProps) {
    return (
        <Box w={"100%"} my={8}>
            <Heading>Explore cities in {country_name}</Heading>
        </Box>
    )
}

interface IExploreCitiesProps {
    country_name?: string
}

export default ExploreCities
