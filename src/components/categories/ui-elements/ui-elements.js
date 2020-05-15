import React from 'react'
import Category from '../../category.js'

import {
    AvatarDemo,
    BadgeDemo,
    BreadcrumbDemo,
    CircularProgressDemo,
    IconDemo,
    ImageDemo,
    ProgressDemo,
    SkeletonDemo,
    SpinnerDemo,
    TagDemo
} from '../../demo/demo.js'

 const UIElements = ({ data }) => {
    
    return (
        <Category name="UI Elements" id="uielements">

            <AvatarDemo data={data} />

            <BadgeDemo data={data} />

            <BreadcrumbDemo data={data} />

            <CircularProgressDemo data={data} />

            <IconDemo data={data} />

            <ImageDemo data={data} />

            <ProgressDemo data={data} />

            <SkeletonDemo data={data} />

            <SpinnerDemo data={data} />

            <TagDemo data={data} />

        </Category>
    )
}

export default UIElements