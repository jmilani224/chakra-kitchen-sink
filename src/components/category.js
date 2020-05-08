import React from 'react'
import { Box, Heading, Divider } from '@chakra-ui/core'

const Category = ({ children, name }) => {
    return (
        <>
        <Box>
            <Heading
             size="lg"
             mx="6"
            >
                {name}
            </Heading>
            {children}
        </Box>

        <Divider />
        </>
    )
}

export default Category
