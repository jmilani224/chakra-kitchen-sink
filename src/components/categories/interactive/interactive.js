import React, { useState, useRef } from 'react'
import Category from '../../category.js'
import ConsolidatedPopover from '../../popover.js'

import {
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
    Button,
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
    Tooltip
  } from "@chakra-ui/core";

const AccordionDemo = ({ data }) => {
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

const AlertDemo = ({ data }) => {
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

const DrawerDemo = ({ data }) => {
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

const AlertDialogDemo = ({ data }) => {
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

const CloseButtonDemo = ({ data }) => {
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

const CollapseDemo = ({ data }) => {
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);
    return (
        <ConsolidatedPopover
        name={data.Collapse.name}
        href={data.Collapse.href}
        description={data.Collapse.description}
        w="40vw"
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


const IconButtonDemo = ({ data }) => {
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

const LinkDemo = ({ data }) => {
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

const ModalDemo = ({ data }) => {
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

const PopoverDemo = ({ data }) => {
    return (
        <ConsolidatedPopover
        name={data.Popover.name}
        href={data.Popover.href}
        description={data.Popover.description}
        >
            <Popover
            placement="bottom"
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

const TabsDemo = ({ data }) => {
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

const ToastDemo = ({ data }) => {
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

const TooltipDemo = ({ data }) => {
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

const Interactive = ({ data }) => {    
    
    return (
        <Category name="Interactive" id="interactive">
            
            <AccordionDemo data={data} />

            <AlertDemo data={data} />

            <AlertDialogDemo data={data} />

            <CloseButtonDemo data={data} />

            <CollapseDemo data={data} />
            
            <DrawerDemo data={data}/>

            <IconButtonDemo data={data} />

            <LinkDemo data={data} />

            <ModalDemo data={data} />

            <PopoverDemo data={data} />

            <TabsDemo data={data} />
            
            <ToastDemo data={data} />

            <TooltipDemo data={data} />
            
        </Category>
    )
}

export default Interactive
