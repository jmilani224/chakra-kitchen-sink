import React from 'react'
import {
    Box,
    List,
    PseudoBox
} from '@chakra-ui/core'
import scrollTo from 'gatsby-plugin-smoothscroll'


const navItems = [
    {
        name: "Inputs",
        a: "#inputs"
    },
    {
        name: "Interactive",
        a: "#interactive"
    },
    {
        name: "Layout",
        a: "#layout"
    },
    {
        name: "Text",
        a: "#text"
    },
    {
        name: "UI Elements",
        a: "#uielement"
    },
]

const Nav = () => {
    return (
        <Box>
            <List
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
            >
                    {navItems.map(item => (
                        <PseudoBox
                        as="li"
                        onClick={() => scrollTo(item.a)}
                        onKeyDown={() => scrollTo(item.a)}
                        p="3"
                        cursor="pointer"
                        fontSize="med"
                        _hover={{ color: "teal.500" }}
                        >
                            {item.name}
                        </PseudoBox>
                            
                    ))}
            </List>
        </Box>
    )
}

export default Nav
