import React from 'react'
import { Box, Image, Heading, Text } from '@chakra-ui/react'


function NicheCard({title, subtitle}: {
    title: string
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
                    {title}
                </Heading>
                <Text>
                    {subtitle}
                </Text>
            </Box>
        </Box>
    )
}

export default NicheCard
