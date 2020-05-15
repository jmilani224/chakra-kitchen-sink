import React from 'react'
import Category from '../../category.js'

import {
    AspectRatioBoxDemo,
    BoxDemo,
    DividerDemo,
    FlexDemo,
    GridDemo,
    PseudoBoxDemo,
    SimpleGridDemo,
    StackDemo
} from '../../demo/demo.js'

 const Layout = ({ data }) => {
    
    return (
        <Category name="Layout" id="layout">
            
            <BoxDemo data={data}/>

            <AspectRatioBoxDemo data={data}/>

            <FlexDemo data={data}/>

            <GridDemo data={data}/>

            <SimpleGridDemo data={data}/>

            <DividerDemo data={data}/>
            
            <PseudoBoxDemo data={data}/>

            <StackDemo data={data}/>

        </Category>
    )
}

export default Layout
