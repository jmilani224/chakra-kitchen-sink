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
    Flex
  } from "@chakra-ui/core";

const ConsolidatedPopover = ({ children, name, description, href, placement, w, minW, h, direction }) => {
  
  return (
        <Popover
        trigger="hover"
        placement={placement}
        >
        <PopoverTrigger>
            <Flex
            m="12"
            minW={minW}
            w={w}
            h={h}
            justify="center"
            align="center"
            flexDirection={direction}
            >
              {children}
            </Flex>
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
