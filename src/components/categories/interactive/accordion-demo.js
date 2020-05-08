import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionPanel,
    AccordionIcon,
    Box
  } from "@chakra-ui/core";
  import ConsolidatedPopover from '../../popover.js'

const AccordionDemo = ({ name, href, description }) => {
    return (
        <ConsolidatedPopover
        name={name}
        href={href}
        description={description}
        >
        <Accordion>
            <AccordionItem>
                <AccordionHeader>
                <Box flex="1" textAlign="left">
                    Section 1 title
                </Box>
                <AccordionIcon />
                </AccordionHeader>
                <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader>
                <Box flex="1" textAlign="left">
                    Section 2 title
                </Box>
                <AccordionIcon />
                </AccordionHeader>
                <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
        </ConsolidatedPopover>
    )
}

export default AccordionDemo
