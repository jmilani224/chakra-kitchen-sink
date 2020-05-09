import React from 'react'
import Category from '../../category.js'
import ConsolidatedPopover from '../../popover.js'

import {
    Button,
    Checkbox,
    ControlBox,
    VisuallyHidden,
    Icon,
    Box,
    Editable,
    EditableInput,
    EditablePreview,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Radio,
    RadioGroup,
    Select,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Switch,
    Flex,
    Textarea
} from '@chakra-ui/core';

export const Inputs = ({ data }) => {
    return (
        <Category name="Inputs" id="inputs">
            <ConsolidatedPopover
            name={data.Button.name}
            href={data.Button.href}
            description={data.Button.description}
            >
                <Button variantColor="green">Button</Button>
            </ConsolidatedPopover>

            <ConsolidatedPopover
            name={data.Checkbox.name}
            href={data.Checkbox.href}
            description={data.Checkbox.description}
            >
                <Checkbox defaultIsChecked>Checkbox</Checkbox>
            </ConsolidatedPopover>

            <ConsolidatedPopover
            name={data.ControlBox.name}
            href={data.ControlBox.href}
            description={data.ControlBox.description}
            >
                <label>
                    <VisuallyHidden as="input" type="checkbox" defaultChecked />

                    <ControlBox
                        borderWidth="1px"
                        size="24px"
                        rounded="sm"
                        _checked={{ bg: "green.500", color: "white", borderColor: "green.500" }}
                        _focus={{ borderColor: "green.600", boxShadow: "outline" }}
                    >
                        <Icon name="check" size="16px" />
                    </ControlBox>

                    <Box as="span" verticalAlign="top" ml={3}>
                        ControlBox
                    </Box>
                </label>
            </ConsolidatedPopover>

            <ConsolidatedPopover
            name={data.Editable.name}
            href={data.Editable.href}
            description={data.Editable.description}
            >
                <Editable defaultValue="Editable">
                    <EditablePreview />
                    <EditableInput />
                </Editable>
            </ConsolidatedPopover>

            <ConsolidatedPopover
            name={data.FormControl.name}
            href={data.FormControl.href}
            description={data.FormControl.description}
            >
                <FormControl>
                    <FormLabel htmlFor="email">FormControl</FormLabel>
                    <Input type="email" id="email" aria-describedby="email-helper-text" />
                    <FormHelperText id="email-helper-text">
                        Some other text.
                    </FormHelperText>
                </FormControl>
            </ConsolidatedPopover>

            <ConsolidatedPopover
            name={data.Input.name}
            href={data.Input.href}
            description={data.Input.description}
            >
                <Input placeholder="Input" />
            </ConsolidatedPopover>

            <ConsolidatedPopover
            name={data.Menu.name}
            href={data.Menu.href}
            description={data.Menu.description}
            placement="top"
            >
                <Menu>
                    <MenuButton as={Button} rightIcon="chevron-down">
                        Menu
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem as="a" href="#">
                        Attend a Workshop
                        </MenuItem>
                    </MenuList>
                </Menu>
            </ConsolidatedPopover>

            <ConsolidatedPopover
            name={data.NumberInput.name}
            href={data.NumberInput.href}
            description={data.NumberInput.description}
            >
                <NumberInput>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </ConsolidatedPopover>

            <ConsolidatedPopover
            name={data.Radio.name}
            href={data.Radio.href}
            description={data.Radio.description}
            >
                <RadioGroup>
                    <Radio value="1">First</Radio>
                    <Radio value="2">Second</Radio>
                    <Radio value="3">Third</Radio>
                </RadioGroup>
            </ConsolidatedPopover>

            <ConsolidatedPopover
            name={data.Select.name}
            href={data.Select.href}
            description={data.Select.description}
            >
                <Select placeholder="Select option">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </Select>
            </ConsolidatedPopover>

            <ConsolidatedPopover
            name={data.Slider.name}
            href={data.Slider.href}
            description={data.Slider.description}
            minW="15em"
            >
                <Slider defaultValue={30}>
                    <SliderTrack />
                    <SliderFilledTrack />
                    <SliderThumb />
                </Slider>
            </ConsolidatedPopover>

            <ConsolidatedPopover
            name={data.Switch.name}
            href={data.Switch.href}
            description={data.Switch.description}
            >
                <Flex justify="center" align="center">
                    <FormLabel htmlFor="demo-switch">Switch</FormLabel>
                    <Switch id="demo-switch" />
                </Flex>
            </ConsolidatedPopover>

            <ConsolidatedPopover
            name={data.Textarea.name}
            href={data.Textarea.href}
            description={data.Textarea.description}
            >
                <Textarea placeholder="Textarea" />
            </ConsolidatedPopover>

        </Category>
    )
}

export default Inputs