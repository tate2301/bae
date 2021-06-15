import React from 'react'
import { Box, Heading, List, ListItem, SimpleGrid, Text } from '@chakra-ui/layout'
import Link from 'next/link'

function FooterContent() {
    return (
        <Box w={"100%"} py={8}>
            <SimpleGrid columns={3} spacing={8}>
                <Box>
                    <Heading fontSize="sm">ABOUT</Heading>
                    <List spacing={4} mt={4}>
                        <ListItem>
                            <Link href="/help/how-it-works">
                                <a>
                                    <Text>How it works</Text>
                                </a>
                            </Link>
                            
                        </ListItem>
                        <ListItem>
                            <Link href="/help/faqs">
                                <a>
                                    <Text>FAQs</Text>
                                </a>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="/help/check-in">
                                <a>
                                    <Text>Event Check In</Text>
                                </a>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="/pricing">
                                <a>
                                    <Text>Pricing</Text>
                                </a>
                            </Link>
                        </ListItem>
                    </List>
                </Box>
                <Box>
                    <Heading fontSize="sm">COMMUNITY</Heading>
                    <List spacing={4} mt={4}>
                        <ListItem>
                            <Link href="/help/against-discrimination">
                                <a>
                                    <Text>Against Discrimination</Text>
                                </a>
                            </Link>
                            
                        </ListItem>
                        <ListItem>
                            <Link href="/help/referrals">
                                <a>
                                    <Text>Referrals</Text>
                                </a>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="/patnerships">
                                <a>
                                    <Text>Patnerships</Text>
                                </a>
                            </Link>
                        </ListItem>
                    </List>
                </Box>
                <Box>
                    <Heading fontSize="sm">SUPPORT</Heading>
                    <List spacing={4} mt={4}>
                        <ListItem>
                            <Link href="/help/cancellation-options">
                                <a>
                                    <Text>Cancellation Options</Text>
                                </a>
                            </Link>
                            
                        </ListItem>
                        <ListItem>
                            <Link href="/help/trust-and-safety">
                                <a>
                                    <Text>Trust and Safety</Text>
                                </a>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="/help/report">
                                <a>
                                    <Text>Report</Text>
                                </a>
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </SimpleGrid>
        </Box>
    )
}

export default FooterContent
