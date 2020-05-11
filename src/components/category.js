import React from 'react'
import { Box, Heading, Divider, Flex } from '@chakra-ui/core'

const Category = ({ children, name, id }) => {
    return (
        <>
        <Box mt="8">
            <Heading
             color="gray.800"
             size="xl"
             my="2"
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

        <Divider my="6"/>
        </>
    )
}

export default Category
