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
    Collapse
  } from "@chakra-ui/core";

const Interactive = ({ data }) => {
    
    //AlertDialog
    const [isOpen, setIsOpen] = useState();
    const onClose = () => setIsOpen(false);
    const cancelRef = useRef();

    //Collapse
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);
    
    return (
        <Category name="Interactive" id="interactive">
            <ConsolidatedPopover
            name={data.Accordion.name}
            href={data.Accordion.href}
            description={data.Accordion.description}
            >
                <Accordion>
                    <AccordionItem>
                        <AccordionHeader>
                        <Box flex="1" textAlign="left">
                            Section 1 title
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
                            Section 2 title
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

            <ConsolidatedPopover
            name={data.Alert.name}
            href={data.Alert.href}
            description={data.Alert.description}
            w="30em"
            >
                <Alert status="error">
                <AlertIcon />
                    <AlertTitle mr={2}>Alert!</AlertTitle>
                    <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
                    <CloseButton position="absolute" right="8px" top="8px" />
                </Alert>
            </ConsolidatedPopover>

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

            <ConsolidatedPopover
            name={data.CloseButton.name}
            href={data.CloseButton.href}
            description={data.CloseButton.description}
            >
                <CloseButton />
            </ConsolidatedPopover>

            <ConsolidatedPopover
            name={data.Collapse.name}
            href={data.Collapse.href}
            description={data.Collapse.description}
            w="80vw"
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
        </Category>
    )
}

export default Interactive
