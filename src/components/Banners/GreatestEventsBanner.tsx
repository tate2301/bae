import { Button } from '@chakra-ui/button'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import React from 'react'

function GreatestEventsBanner() {
    return (
        <Flex 
            my={12} 
            p={8} 
            h={96} 
            rounded="lg" 
            flexDirection="column"
            justifyContent="center"
            backgroundColor="milk" 
            backgroundImage="url('https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440')">
            <Box>
                <Heading>All the Greatest Events</Heading>
                <Text>
                    The top Events curated by our Team
                </Text>
            </Box>
            <Box mt={8}>
                <Button backgroundColor="gray.900" color="white">
                    Learn more
                </Button>
            </Box>
        </Flex>
    )
}

export default GreatestEventsBanner
