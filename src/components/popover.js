import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    Link,
    Icon,
    Box
  } from "@chakra-ui/core";

const ConsolidatedPopover = ({ children, name, description, href, placement, w }) => {
    return (
        <Popover
        trigger="hover"
        placement={placement}
        >
        <PopoverTrigger>
            <Box
            m="10"
            minW="10em"
            w={w}
            >
              {children}
            </Box>
        </PopoverTrigger>
        <PopoverContent zIndex={4}>
          <PopoverArrow />
          <PopoverHeader>
              <Link
                href={href}
                target="blank"
                fontWeight="600"
                color="teal.500"
                isExternal
                >
                {name}<Icon name="external-link" mx="1" mb="1" />
              </Link>
          </PopoverHeader>
          <PopoverBody dangerouslySetInnerHTML={{ __html: description }}></PopoverBody>
        </PopoverContent>
      </Popover>
    )
}

export default ConsolidatedPopover
