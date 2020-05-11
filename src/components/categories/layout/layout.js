import React from 'react'
import Category from '../../category.js'
import ConsolidatedPopover from '../../popover.js'

import { 
    AspectRatioBox,
    Box
 } from "@chakra-ui/core";

const AspectRatioBoxDemo = ({ data }) => {
    return (
        <ConsolidatedPopover
        name={data.AspectRatioBox.name}
        href={data.AspectRatioBox.href}
        description={data.AspectRatioBox.description}
        >
            <AspectRatioBox maxW="560px" ratio={1}>
  <Box
    as="iframe"
    title="naruto"
    src="https://www.youtube.com/embed/QhBnZ6NPOY0"
    allowFullScreen
  />
</AspectRatioBox>
        </ConsolidatedPopover>
    )
}   

 const Layout = ({ data }) => {
    return (
        <Category name="Layout" id="layout">
            
            <AspectRatioBoxDemo data={data}/>

        </Category>
    )
}

export default Layout
