import React from 'react'
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react'

export function NicheCard({name, tagline, img, tag}: {
    name: string
    tagline: string
    img: string
    tag: string
}) {
    return (
        <Flex
            justifyContent="space-between"
            flexDir="column" 
            minH={72}
            w={{base: "90%", md: "50%"}}
            py={4}
            px={8}
            rounded={"md"} 
            experimental_spaceY={4} 
            backgroundColor="gray.900"
            backgroundImage={`url('${img}')`}
            backgroundPosition="center"
            backgroundSize="cover"
            className="horizontal-scroll-item">
            <Box w={{base: "100%", md: "50%", lg: "30%"}} color="white" experimental_spaceY={1} my={2}>
                <Text>{tag}</Text>
                <Heading fontSize="xl">
                    {name}
                </Heading>
                <Text>
                    {tagline}
                </Text>
            </Box>
            <Box>
                <Button backgroundColor="white" color="gray.900">
                    Show all
                </Button>
            </Box>
        </Flex>
    )
}

export default NicheCard
