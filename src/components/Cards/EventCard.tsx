import { Image } from '@chakra-ui/react'
import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { TicketIcon, HeartIcon as HeartOutline } from "@heroicons/react/outline"
import { HeartIcon as HeartSolid } from "@heroicons/react/solid"

const EventCard = ({title, city, tickets, remaining_slots, price, favorite}: EventCardProps) => {
    return (
        <Box w={{base: "90%", md: "28%", lg: "24%", xl: "18%"}} rounded="md">
            <Box className="eventCardImageBox">
                <Image 
                    w={"100%"} 
                    h={64} 
                    rounded="md"
                    src="https://a0.muscache.com/im/pictures/172eaf51-6aaa-4beb-b671-5e76a82a1367.jpg?im_w=480" />
                <Box 
                    color="red.500" 
                    backgroundColor="white" 
                    shadow="md" 
                    rounded="full" 
                    className="eventCardImageLike" 
                    p={1} 
                    h={7} 
                    w={7}>
                    {
                        favorite ? <HeartSolid /> : <HeartOutline />
                    }
                </Box>
            </Box>
            <Box py={4}>
                <Flex justifyContent="space-between" alignItems="center">
                    <Text fontSize="sm" color="gray.500">{city}</Text>
                    <Flex experimental_spaceX={2} alignItems="center">
                        <Box w={5} h={5}>
                            <TicketIcon className="h-5 w-5"/>
                        </Box>
                        <Text fontSize="sm" color="gray.500">{tickets}</Text>
                    </Flex>
                    <Text fontSize="sm" color="gray.500">{remaining_slots} remaining</Text>
                </Flex>
                <Text fontSize="lg">
                    {title}
                </Text>
                <HStack py={1} spacing={2} alignItems="center">
                    <Heading fontSize="md">
                       From ${Intl.NumberFormat().format(price)}USD 
                    </Heading>
                    <Text> per person</Text>
                </HStack>
            </Box>
        </Box>
    )
}

interface EventCardProps {
    title: string
    price: number
    city: string
    tickets: number
    remaining_slots: number
    favorite: boolean
}

export default EventCard
