import React from 'react'
import Category from '../../category.js'

import {
    CheckboxDemo,
    ControlBoxDemo,
    EditableDemo,
    FormControlDemo,
    InputDemo,
    MenuDemo,
    NumberInputDemo,
    RadioDemo,
    SelectDemo,
    SliderDemo,
    SwitchDemo,
    TextareaDemo
} from '../../demo/demo.js'

const Inputs = ({ data }) => {
    
    return (
        <Category name="Inputs" id="inputs">
            <CheckboxDemo data={data} />

            <EditableDemo data={data} />

            <ControlBoxDemo data={data} />

            <FormControlDemo data={data} />

            <InputDemo data={data} />

            <MenuDemo data={data} />

            <NumberInputDemo data={data} />

            <RadioDemo data={data} />

            <SelectDemo data={data} />

            <SliderDemo data={data} />

            <SwitchDemo data={data} />

            <TextareaDemo data={data} />

        </Category>
    )
}

export default Inputs