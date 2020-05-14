import React from 'react'
import Category from '../../category.js'

import {
    AspectRatioBoxDemo,
    BoxDemo,
    DividerDemo,
    FlexDemo,
    GridDemo,
    PseudoBoxDemo
} from '../../demo/demo.js'

 const Layout = ({ data }) => {
    return (
        <Category name="Layout" id="layout">
            
            <BoxDemo data={data}/>

            <AspectRatioBoxDemo data={data}/>

            <DividerDemo data={data}/>

            <FlexDemo data={data}/>

            <GridDemo data={data}/>

            <PseudoBoxDemo data={data}/>
            
        </Category>
    )
}

export default Layout
