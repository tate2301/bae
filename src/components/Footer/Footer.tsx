import { Box, Divider } from '@chakra-ui/layout'
import DefaultLayout from 'layouts/DefaultLayout'
import React from 'react'
import FooterBottomBar from './FooterBottomBar'
import FooterContent from './FooterContent'

function Footer() {
    return (
        <Box w={"100%"} pt={8} backgroundColor="milk">
            <DefaultLayout>
                <FooterContent />
            </DefaultLayout>
            <Divider/>
            <FooterBottomBar />
        </Box>
    )
}

export default Footer
