import React from 'react'
import { Flex, Heading, Text } from '@chakra-ui/core'

const Main = () => {
    return (
        <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="60vh"
        >
            
                <Heading
                    as="h1"
                    size="2xl"
                    py="6"
                >
                    Chakra UI
                </Heading>
          
                <Heading
                    as="h2"
                    size="xl"
                    pb="2"
                    color="gray.500"
                >
                    Kitchen Sink Component Overview
                </Heading>

           
                <Text
                    m="4"
                    w="50vw"
                    textAlign="center"
                >
                    Every Chakra UI component is represented on this page. Hover over them for more info and a link to the documentation.</Text>

        </Flex>
    )
}

export default Main
