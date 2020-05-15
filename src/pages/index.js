import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Nav from '../components/nav.js'
import Main from '../components/main.js'
import Inputs from '../components/categories/inputs/inputs.js'
import Interactive from '../components/categories/interactive/interactive.js'
import Layout from '../components/categories/layout/layout.js'
import Text from '../components/categories/text/text.js'
import { Box } from '@chakra-ui/core'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      dataJson {
        Accordion {
          name
          href
          description
        }
        Alert {
          name
          href
          description
        }
        AlertDialog {
          name
          href
          description
        }
        AspectRatioBox {
          name
          href
          description
        }
        Avatar {
          name
          href
          description
        }
        Badge {
          name
          href
          description
        }
        Box {
          name
          href
          description
        }
        Breadcrumb {
          name
          href
          description
        }
        Button {
          name
          href
          description
        }
        Checkbox {
          name
          href
          description
        }
        CircularProgress {
          name
          href
          description
        }
        Code {
          name
          href
          description
        }
        CloseButton {
          name
          href
          description
        }
        Collapse {
          name
          href
          description
        }
        ControlBox {
          name
          href
          description
        }
        Divider {
          name
          href
          description
        }
        Drawer {
          name
          href
          description
        }
        Editable {
          name
          href
          description
        }
        Flex {
          name
          href
          description
        }
        FormControl {
          name
          href
          description
        }
        Grid {
          name
          href
          description
        }
        Heading {
          name
          href
          description
        }
        Icon {
          name
          href
          description
        }
        IconButton {
          name
          href
          description
        }
        Image {
          name
          href
          description
        }
        Input {
          name
          href
          description
        }
        Link {
          name
          href
          description
        }
        List {
          name
          href
          description
        }
        Tooltip {
          name
          href
          description
        }
        Toast {
          name
          href
          description
        }
        Textarea {
          name
          href
          description
        }
        Text {
          name
          href
          description
        }
        Tag {
          name
          href
          description
        }
        Tabs {
          name
          href
          description
        }
        Switch {
          name
          href
          description
        }
        Stat {
          name
          href
          description
        }
        Stack {
          name
          href
          description
        }
        Spinner {
          name
          href
          description
        }
        Slider {
          name
          href
          description
        }
        Skeleton {
          name
          href
          description
        }
        SimpleGrid {
          name
          href
          description
        }
        Select {
          name
          href
          description
        }
        Radio {
          name
          href
          description
        }
        PseudoBox {
          name
          href
          description
        }
        Progress {
          name
          href
          description
        }
        Popover {
          name
          href
          description
        }
        NumberInput {
          name
          href
          description
        }
        Modal {
          name
          href
          description
        }
        Menu {
          name
          href
          description
        }
      }
    }
  `)
  const dataProp = data.dataJson

  return (
              <Box px="8">
                <Nav />

                <Main />

                <Inputs data={dataProp} id="inputs" />

                <Interactive data={dataProp} id="interactive" />

                <Layout data={dataProp} id="layout" />

                <Text data={dataProp} id="text"/>
                
              </Box>
          )        
}

export default IndexPage