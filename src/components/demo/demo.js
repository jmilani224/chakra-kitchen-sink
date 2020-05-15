import React, { useRef, useState } from 'react'
import ConsolidatedPopover from '../popover.js'

import { 
    Button,
    Checkbox,
    ControlBox,
    VisuallyHidden,
    Icon,
    Editable,
    EditableInput,
    EditablePreview,
    FormControl,
    FormLabel,
    FormHelperText,
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
    Textarea,
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionPanel,
    AccordionIcon,
    Box,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Collapse,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    IconButton,
    Link,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    useToast,
    Tooltip,
    AspectRatioBox,
    Text,
    Divider,
    Grid,
    PseudoBox,
    SimpleGrid,
    Stack,
    Heading,
    Code,
    List,
    ListItem,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
} from '@chakra-ui/core'

export const ButtonDemo = ({ data }) => {
        return (
            <ConsolidatedPopover
            name={data.Button.name}
            href={data.Button.href}
            description={data.Button.description}
            >
                <Button variantColor="green">Button</Button>
            </ConsolidatedPopover>
        )
}

export const CheckboxDemo = ({ data }) => {
    return (
        <ConsolidatedPopover
        name={data.Checkbox.name}
        href={data.Checkbox.href}
        description={data.Checkbox.description}
        >
            <Checkbox defaultIsChecked>Checkbox</Checkbox>
        </ConsolidatedPopover>
    )
}

export const ControlBoxDemo = ({ data }) => {
    return (
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
    )
}

export const EditableDemo = ({ data }) => {
    return (
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
    )
}

export const FormControlDemo = ({ data }) => {
    return (
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
    )
}

export const InputDemo = ({ data }) => {
    return (
        <ConsolidatedPopover
        name={data.Input.name}
        href={data.Input.href}
        description={data.Input.description}
        >
            <Input placeholder="Input" />
        </ConsolidatedPopover>
    )
}

export const MenuDemo = ({ data }) => {
    return (
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
    )
}

export const NumberInputDemo = ({ data }) => {
    return (
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
    )
}

export const RadioDemo = ({ data }) => {
    return (
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
    )
}

export const SelectDemo = ({ data }) => {
    return (
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
    )
}

export const SliderDemo = ({ data }) => {
    return (
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
    )
}

export const SwitchDemo = ({ data }) => {
    return (
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
    )
}

export const TextareaDemo = ({ data }) => {
    return (
            <ConsolidatedPopover
            name={data.Textarea.name}
            href={data.Textarea.href}
            description={data.Textarea.description}
            >
                <Textarea placeholder="Textarea" />
            </ConsolidatedPopover>
    )
}

export const AccordionDemo = ({ data }) => {
    return (
        <ConsolidatedPopover
            name={data.Accordion.name}
            href={data.Accordion.href}
            description={data.Accordion.description}
            >
                <Accordion>
                    <AccordionItem>
                        <AccordionHeader>
                        <Box flex="1" textAlign="left">
                            Accordion 1
                        </Box>
                        <AccordionIcon />
                        </AccordionHeader>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionHeader>
                        <Box flex="1" textAlign="left">
                            Accordion 2
                        </Box>
                        <AccordionIcon />
                        </AccordionHeader>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </ConsolidatedPopover>
    )
}

export const AlertDemo = ({ data }) => {
    return (
        <ConsolidatedPopover
        name={data.Alert.name}
        href={data.Alert.href}
        description={data.Alert.description}
        w="30em"
        >
            <Alert status="error">
                <AlertIcon />
                    <AlertTitle mr={2}>Alert!</AlertTitle>
                    <AlertDescription>Something has happened.</AlertDescription>
                    <CloseButton position="absolute" right="8px" top="8px" />
                </Alert>
        </ConsolidatedPopover>
    )
}

export const DrawerDemo = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
    
    return (
        <ConsolidatedPopover
            name={data.Drawer.name}
            href={data.Drawer.href}
            description={data.Drawer.description}
            >
                <Button ref={btnRef} variantColor="teal" onClick={onOpen}>
                    Drawer
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder="Type here..." />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                        Cancel
                        </Button>
                        <Button color="blue">Save</Button>
                    </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </ConsolidatedPopover>
    )
}

export const AlertDialogDemo = ({ data }) => {
    const [isOpen, setIsOpen] = useState();
    const onClose = () => setIsOpen(false);
    const cancelRef = useRef();
    return (
        <ConsolidatedPopover
        name={data.AlertDialog.name}
        href={data.AlertDialog.href}
        description={data.AlertDialog.description}
        >
            <Button variantColor="red" onClick={() => setIsOpen(true)}>
                    AlertDialog
                </Button>

                <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                >
                    <AlertDialogOverlay />
                    <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Do This Thing
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        Are you sure you want to do this thing? You can't undo this thing afterwards.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                        Cancel
                        </Button>
                        <Button variantColor="red" onClick={onClose} ml={3}>
                        Do It
                        </Button>
                    </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            
        </ConsolidatedPopover>
    )
}

export const CloseButtonDemo = ({ data }) => {
    return (
        <ConsolidatedPopover
        name={data.CloseButton.name}
        href={data.CloseButton.href}
        description={data.CloseButton.description}
        >
            <CloseButton />
        </ConsolidatedPopover>
    )
}

export const CollapseDemo = ({ data }) => {
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);
    return (
        <ConsolidatedPopover
        name={data.Collapse.name}
        href={data.Collapse.href}
        description={data.Collapse.description}
        w="40vw"
        direction="column"
        >
            <Button variantColor="blue" onClick={handleToggle}>
                    Collapse
                </Button>
                <Collapse mt={4} isOpen={show}>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
                </Collapse>
        </ConsolidatedPopover>
    )
}

export const IconButtonDemo = ({ data }) => {
    return (
        <ConsolidatedPopover
        name={data.IconButton.name}
        href={data.IconButton.href}
        description={data.IconButton.description}
        >
            <IconButton aria-label="Search database" icon="search" />
        </ConsolidatedPopover>
    )
}

export const LinkDemo = ({ data }) => {
    return (
        <ConsolidatedPopover
        name={data.Link.name}
        href={data.Link.href}
        description={data.Link.description}
        >
            <Link>Link</Link>
        </ConsolidatedPopover>
    )
}

export const ModalDemo = ({ data }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <ConsolidatedPopover
        name={data.Modal.name}
        href={data.Modal.href}
        description={data.Modal.description}
        >
            <Button onClick={onOpen}>Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.</p>
                    <p>Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.</p>
                </ModalBody>

                <ModalFooter>
                <Button variantColor="blue" mr={3} onClick={onClose}>
                    Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </ConsolidatedPopover>
    )
}

export const PopoverDemo = ({ data }) => {
    return (
        <ConsolidatedPopover
        name={data.Popover.name}
        href={data.Popover.href}
        description={data.Popover.description}
        >
            <Popover
            placement="top"
            >
            <PopoverTrigger>
                <Button>Popover</Button>
            </PopoverTrigger>
            <PopoverContent zIndex={4}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Yo Dawg</PopoverHeader>
                <PopoverBody>I heard you like popovers.</PopoverBody>
            </PopoverContent>
            </Popover>
        </ConsolidatedPopover>
    )
}

export const TabsDemo = ({ data }) => {
    return (
        <ConsolidatedPopover
        name={data.Tabs.name}
        href={data.Tabs.href}
        description={data.Tabs.description}
        w="30em"
        >
            <Tabs>
            <TabList>
                <Tab>Tab One</Tab>
                <Tab>Tab Two</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                <p>one!</p>
                </TabPanel>
                <TabPanel>
                <p>two!</p>
                </TabPanel>
            </TabPanels>
            </Tabs>
        </ConsolidatedPopover>
    )
}

export const ToastDemo = ({ data }) => {
    const toast = useToast();
    return (
        <ConsolidatedPopover
        name={data.Toast.name}
        href={data.Toast.href}
        description={data.Toast.description}
        >
            <Button
            onClick={() =>
                toast({
                title: "Account created.",
                description: "We've created your account for you.",
                status: "success",
                duration: 9000,
                isClosable: true,
                })
            }
            >
            Toast
            </Button>
        </ConsolidatedPopover>
    )
}

export const TooltipDemo = ({ data }) => {
    return (
        <ConsolidatedPopover
        name={data.Tooltip.name}
        href={data.Tooltip.href}
        description={data.Tooltip.description}
        >
            <Tooltip label="This is a tooltip">Tooltip</Tooltip>
        </ConsolidatedPopover>
    )
}

export const AspectRatioBoxDemo = ({ data }) => {

    return (
        <ConsolidatedPopover
        name={data.AspectRatioBox.name}
        href={data.AspectRatioBox.href}
        description={data.AspectRatioBox.description}
        >
            <AspectRatioBox
                h="300px"
                w="400px"
                ratio={4 / 3}>
                
                <Flex
                    h="300px"
                    w="400px"
                    bg="gray.200"
                    justifyContent="center"
                    alignItems="center"
                    >
                    <Text
                    fontSize="4em"
                    color="gray.500"
                    >
                        4 : 3
                    </Text>
                </Flex>

            </AspectRatioBox>
        </ConsolidatedPopover>
    )
}

export const BoxDemo = ({ data }) => {
    return (
        <ConsolidatedPopover
        name={data.Box.name}
        href={data.Box.href}
        description={data.Box.description}
        >
            <Box bg="tomato" w="100%" p={24} color="white" fontSize="3xl">
            Box
            </Box>
        </ConsolidatedPopover>
    )
}

export const DividerDemo = ({ data }) => {
    return (
        <ConsolidatedPopover
        name={data.Divider.name}
        href={data.Divider.href}
        description={data.Divider.description}
        >
            <Flex>
                <span>Divider</span>
                <Divider orientation="vertical" />
                <span>Divider</span>
            </Flex>
        </ConsolidatedPopover>
    )
}

export const FlexDemo = ({ data }) => {
    return (
        <ConsolidatedPopover
        name={data.Flex.name}
        href={data.Flex.href}
        description={data.Flex.description}
        >
            <Flex align="center">
                <Flex bg="green.50" align="flex-end">
                    <Text>Flex</Text>
                </Flex>
                <Flex bg="blue.50" size="150px" align="center" justify="center">
                    <Text textAlign="center" bg="pink.50">
                    Flex
                    </Text>
                </Flex>
                <Box>
                    <Text bg="tomato" color="white">
                    Flex
                    </Text>
                </Box>
            </Flex>
        </ConsolidatedPopover>
    )
}

export const GridDemo = ({ data }) => {
    return (
        <ConsolidatedPopover
        name={data.Grid.name}
        href={data.Grid.href}
        description={data.Grid.description}
        >
            <Grid w="40vw" templateColumns="repeat(5, 1fr)" gap={6}>
                <Box w="100%" p="10" bg="blue.500" color="white">Grid</Box>
                <Box w="100%" p="10" bg="blue.500" color="white">Grid</Box>
                <Box w="100%" p="10" bg="blue.500" color="white">Grid</Box>
                <Box w="100%" p="10" bg="blue.500" color="white">Grid</Box>
            </Grid>
        </ConsolidatedPopover>
    )
}

export const PseudoBoxDemo = ({ data }) => {
    return (
        <ConsolidatedPopover
        name={data.PseudoBox.name}
        href={data.PseudoBox.href}
        description={data.PseudoBox.description}
        >
            <PseudoBox
            as="button"
            color="blue.700"
            fontWeight="semibold"
            py={2}
            px={4}
            mx={8}
            borderWidth="1px"
            borderColor="blue.500"
            rounded="md"
            _hover={{ bg: "blue.500", color: " white" }}
            _focus={{ boxShadow: "outline" }}
            >
                PseudoBox (Hover)
            </PseudoBox>
        </ConsolidatedPopover>
    )
}

export const SimpleGridDemo = ({ data }) => {
    return (
        <ConsolidatedPopover
        name={data.SimpleGrid.name}
        href={data.SimpleGrid.href}
        description={data.SimpleGrid.description}
        >
            <SimpleGrid columns={2} spacing={6}>
                <Box bg="tomato" height="80px" color="white" p="3">SimpleGrid</Box>
                <Box bg="tomato" height="80px" color="white" p="3">SimpleGrid</Box>
                <Box bg="tomato" height="80px" color="white" p="3">SimpleGrid</Box>
                <Box bg="tomato" height="80px" color="white" p="3">SimpleGrid</Box>
            </SimpleGrid>
        </ConsolidatedPopover>
    )
}

function Feature({ title, desc, ...rest }) {
    return (
      <Box p={5} shadow="md" borderWidth="1px" {...rest}>
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    );
  }

export const StackDemo = ({ data }) => {
    return (
        <ConsolidatedPopover
        name={data.Stack.name}
        href={data.Stack.href}
        description={data.Stack.description}
        >
            <Stack spacing={8}>
                <Feature
                    title="Stack"
                    desc="The future can be even brighter but a goal without a plan is just a wish"
                />
                <Feature
                    title="Stack"
                    desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
                />
            </Stack>
        </ConsolidatedPopover>
    )
}

export const CodeDemo = ({ data }) => {
    return (
        <ConsolidatedPopover
        name={data.Code.name}
        href={data.Code.href}
        description={data.Code.description}
        >
            <Code>Code Code Code Code</Code>
        </ConsolidatedPopover>
    )
}

export const HeadingDemo = ({ data }) => {
    return (
        <ConsolidatedPopover
        name={data.Heading.name}
        href={data.Heading.href}
        description={data.Heading.description}
        >
            <Heading>Heading Heading</Heading>
        </ConsolidatedPopover>
    )
}

export const ListDemo = ({ data }) => {
    return (
        <ConsolidatedPopover
        name={data.List.name}
        href={data.List.href}
        description={data.List.description}
        >
            <List styleType="disc">
                <ListItem>List</ListItem>
                <ListItem>List List</ListItem>
                <ListItem>List List List</ListItem>
                <ListItem>List List List List</ListItem>
            </List>
        </ConsolidatedPopover>
    )
}

export const StatDemo = ({ data }) => {
    return (
        <ConsolidatedPopover
        name={data.Stat.name}
        href={data.Stat.href}
        description={data.Stat.description}
        >
            <Stat>
                <StatLabel>Stat</StatLabel>
                <StatNumber>£0.00</StatNumber>
                <StatHelpText>Feb 12 - Feb 28</StatHelpText>
            </Stat>
        </ConsolidatedPopover>
    )
}

export const TextDemo = ({ data }) => {
    return (
        <ConsolidatedPopover
        name={data.Text.name}
        href={data.Text.href}
        description={data.Text.description}
        >
            <Stack spacing={3}>
                <Text fontSize="lg">Text</Text>
                <Text fontSize="md">Text</Text>
                <Text fontSize="sm">Text</Text>
                <Text fontSize="xs">Text</Text>
            </Stack>
        </ConsolidatedPopover>
    )
}


//next: add text components and add to that section