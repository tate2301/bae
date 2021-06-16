import { Box, Heading } from '@chakra-ui/layout'
import CityCard from 'components/Cards/CityCard'
import { INicheSDUIData } from 'lib/types'
import React from 'react'
import HorizontalScroll from "../../layouts/HorizontalScroll"

function ExploreCities({country_name, subtitle, data}: IExploreCitiesProps) {
    console.log({data})

    return (
        <Box w={"100%"} my={8}>
            <HorizontalScroll title={`Explore cities in ${country_name}`}>
                {
                    data?.map((value: any, key: number) => 
                        <CityCard
                            key={key}
                            city_name={value.city_name}
                            subtitle={value.subtitle}/>
                    )
                }
            </HorizontalScroll>
        </Box>
    )
}

interface IExploreCitiesProps {
    country_name?: string
    subtitle?: string
    data?: Array<INicheSDUIData> 
}

export default ExploreCities
