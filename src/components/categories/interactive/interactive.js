import React from 'react'
import Category from '../../category.js'

import {
    AlertDialogDemo,
    DrawerDemo,
    ModalDemo,
    PopoverDemo,
    ToastDemo,
    IconButtonDemo,
    CollapseDemo,
    CloseButtonDemo,
    LinkDemo,
    TooltipDemo,
    TabsDemo,
    AlertDemo,
    AccordionDemo,
    ButtonDemo
} from '../../demo/demo.js'

const Interactive = ({ data }) => {    
    
    return (
        <Category name="Interactive" id="interactive">

            <ButtonDemo data={data} />

            <AlertDialogDemo data={data} />
            
            <DrawerDemo data={data}/>

            <ModalDemo data={data} />

            <PopoverDemo data={data} />

            <ToastDemo data={data} />

            <IconButtonDemo data={data} />

            <CollapseDemo data={data} />

            <CloseButtonDemo data={data} />

            <LinkDemo data={data} />

            <TooltipDemo data={data} />

            <TabsDemo data={data} />
            
            <AlertDemo data={data} />

            <AccordionDemo data={data} />
            
        </Category>
    )
}

export default Interactive
