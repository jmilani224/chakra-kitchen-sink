import React from 'react'
import { Box, Heading, Divider, Flex } from '@chakra-ui/core'

const Category = ({ children, name }) => {
    return (
        <>
        <Box pr="6">
            <Heading
             size="xl"
             my="8"
             textAlign="center"
            >
                {name}
            </Heading>
            <Flex
            justifyContent="space-evenly"
            alignItems="center"
            flexWrap="wrap"
            >
                {children}
            </Flex>
        </Box>

        <Divider my="6"/>
        </>
    )
}

export default Category
