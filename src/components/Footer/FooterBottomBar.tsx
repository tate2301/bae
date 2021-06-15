import { Box, Flex, HStack, Text } from '@chakra-ui/layout'
import DefaultLayout from 'layouts/DefaultLayout'
import Link from 'next/link'
import React from 'react'

function FooterBottomBar() {
    return (
        <Box backgroundColor="milk" py={4}>
            <DefaultLayout>
                <Flex justifyContent="space-between">
                    <HStack spacing={4}>
                        <Text>
                            &copy; {new Date().getFullYear()} BAE,
                        </Text>
                        <Link href="/help/privacy">
                            <a>
                                <Text>
                                    Privacy
                                </Text>
                            </a>
                        </Link>
                        <Link href="/help/privacy">
                            <a>
                                <Text>
                                    Terms
                                </Text>
                            </a>
                        </Link>
                        <Link href="/sitemaps/v1">
                            <a>
                                <Text>
                                    Sitemap
                                </Text>
                            </a>
                        </Link>
                    </HStack>
                </Flex>
            </DefaultLayout>
        </Box>
    )
}

export default FooterBottomBar
