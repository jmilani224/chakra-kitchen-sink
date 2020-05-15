import React from 'react'
import Category from '../../category.js'

import {
    CodeDemo,
    HeadingDemo,
    ListDemo,
    StatDemo,
    TextDemo
} from '../../demo/demo.js'

 const Text = ({ data }) => {
    
    return (
        <Category name="Text" id="text">

            <CodeDemo data={data} />

            <HeadingDemo data={data} />

            <ListDemo data={data} />

            <StatDemo data={data} />

            <TextDemo data={data} />

        </Category>
    )
}

export default Text
