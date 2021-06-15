import React from 'react'
import { Box, Image, Heading, Text } from '@chakra-ui/react'


function CityCard({city_name, subtitle}: {
    city_name: string
    subtitle: string
}) {
    return (
        <Box rounded={"md"} experimental_spaceY={4}>
            <Image 
                w={"100%"} 
                h={96} 
                rounded="md"
                src="https://a0.muscache.com/im/pictures/172eaf51-6aaa-4beb-b671-5e76a82a1367.jpg?im_w=480" />
            <Box experimental_spaceY={1} my={2}>
                <Heading fontSize="lg">
                    {city_name}
                </Heading>
                <Text>
                    {subtitle}
                </Text>
            </Box>
        </Box>
    )
}

export default CityCard
