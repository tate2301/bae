import React, { ReactNode } from 'react'
import { Heading, Text, Box, Flex, Button } from '@chakra-ui/react'
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons"
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function HorizontalScroll({children, title, subtitle}: {
    children: ReactNode
    title: string
    subtitle?: string
}) {

    const [nextScrollDisabled, setNextScrollDisabled] = useState(true)
    const [prevScrollDisabled, setPrevScrollDisabled] = useState(true)
    const [config, setConfig] = useState({
        scrollLeft: 0,
        clientWidth: 0,
        offsetLeft: 0
    })
    const scrollRef = useRef(null)

    // Get scroll event and store co-ordinates in state
    useEffect(() => {
        if(scrollRef.current) {
            const e = scrollRef.current as any
            return e.addEventListener("scroll", (event: any) => {
                const { target } = event
                const { scrollLeft, clientWidth, offsetLeft } = target as any
                setConfig({clientWidth, scrollLeft, offsetLeft})
            })
        }
    }, [scrollRef])

    // toggle button active state based on scroll position
    useEffect(() => {
        if (config) {
            const { clientWidth, scrollLeft, offsetLeft } = config
            if(scrollLeft >= clientWidth) {
                setNextScrollDisabled(true)
            } else {
                setNextScrollDisabled(false)
            }

            if(scrollLeft < offsetLeft) {
                setPrevScrollDisabled(true)
            } else {
                setPrevScrollDisabled(false)
            }
        }
    }, [config.scrollLeft])

    const scrollNext = () => {
        if (scrollRef.current) {
            const e = scrollRef.current as any
            e.scroll({
                left: +config.scrollLeft + 400,
                behavior: 'smooth'
            })
            setConfig({...config, scrollLeft: e.scrollLeft})
        }
    }

    const scrollPrev = () => {
        if (scrollRef.current) {
            const e = scrollRef.current as any
            e.scroll({
                left: +config.scrollLeft - 400,
                behavior: 'smooth'
            })
            setConfig({...config, scrollLeft: e.scrollLeft})
        }
    }

    return (
        <>
            <Flex alignItems="center" justifyContent="space-between" flexDirection="row" mb={4}>
                <Box>
                    <Heading fontSize={{base: "lg", md: "2xl", xl: "4xl"}}>{title}</Heading>
                    <Text>{subtitle}</Text>
                </Box> 
                {children && 
                    <Flex experimental_spaceX={4}>
                        <Button display={{base: "none", md: "flex"}} onClick={scrollPrev} disabled={prevScrollDisabled} size="sm" p={0} rounded="full">
                            <ChevronLeftIcon />
                        </Button>
                        <Button display={{base: "none", md: "flex"}} onClick={scrollNext} disabled={nextScrollDisabled} size="sm" p={0} rounded="full">
                            <ChevronRightIcon />
                        </Button>
                        <Button display={{base: "flex", md: "none"}} size="sm" p={0} rounded="full">
                            <ChevronRightIcon />
                        </Button>
                    </Flex>
                }
            </Flex>
            <Box ref={scrollRef} w={"100%"} className="horizontal-scroll">
                {children}
            </Box>
        </>
    )
}

export default HorizontalScroll
