import React from 'react'
import { Box, Heading, Divider, Flex } from '@chakra-ui/core'

const Category = ({ children, name, id }) => {
    console.log(children)
    return (
        <>
        <Box mt="8">
            <Heading
             color="white"
             backgroundColor="teal.500"
             size="xl"
             my={2}
             py={6}
             textAlign="center"
             id={id}
            >
                {name}
            </Heading>
            <Flex
            justify="center"
            align="center"
            flexWrap="wrap"
            >
                {children}
            </Flex>
        </Box>

        
        </>
    )
}

export default Category
