import React from 'react'
import Category from '../../category.js'
import ConsolidatedPopover from '../../popover.js'

import { Button } from '@chakra-ui/core';

export const Inputs = ({ data }) => {
    console.log(data.Accordion.name)
    return (
        <Category name="Inputs">
            <ConsolidatedPopover name={data.Button.name} >
                <Button />
            </ConsolidatedPopover>

        </Category>
    )
}

export default Inputs