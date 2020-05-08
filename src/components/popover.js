import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    Link,
    Icon
  } from "@chakra-ui/core";

const ConsolidatedPopover = ({ children, name, description, href }) => {
    return (
        <Popover trigger="hover">
        <PopoverTrigger>
            {children}
        </PopoverTrigger>
        <PopoverContent zIndex={4}>
          <PopoverArrow />
          <PopoverHeader>
              <Link
                href={href}
                target="blank"
                fontWeight="600"
                color="teal.600"
                isExternal
                >
                {name}<Icon name="external-link" mx="1" mb="1" />
              </Link>
          </PopoverHeader>
          <PopoverBody>{description}</PopoverBody>
        </PopoverContent>
      </Popover>
    )
}

export default ConsolidatedPopover
