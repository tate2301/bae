import { Button } from '@chakra-ui/button'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import React from 'react'

function WelcomeAroundBanner() {
    return (
        <Flex 
            my={12} 
            p={8} 
            h={96} 
            flexDirection="column"
            rounded="lg" 
            justifyContent="center" 
            backgroundColor="milk"
            backgroundImage="url('https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440')">
            <Box color="white">
                <Heading>Welcome to the Events place</Heading>
                <Text fontSize="xl">
                    Can't find that event? Host it yourself and earn some buck
                </Text>
            </Box>
            <Box mt={8}>
                <Button backgroundColor="white" color="gray.900">
                    Get started
                </Button>
            </Box>
        </Flex>
    )
}

export default WelcomeAroundBanner
