import {
  Avatar,
  Box,
  HStack,
  Tab,
  TabList,
  Tabs,
  Text,
  Image,
  Grid,
  GridItem,
  Switch,
  IconButton,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import logo from "../../../public/assets/logo.svg";
import {
  navTabBaseProps,
  navTabSelectedProps,
  navTextBaseProps,
  navTextProfileProps,
} from "../../styles/nav";

export default function TopNav() {
  return (
    <Box
      borderBottomWidth="1px"
      borderColor="#ECECEC"
      bg="white"
      w="100vw"
      h="76px"
      opacity={1}
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
    >
      <Grid
        templateColumns={{ base: "auto 1fr auto", md: "auto 1fr auto" }}
        px={{ base: 4, md: 6 }}
        h="full"
        alignItems="center"
        w="full"
        columnGap={4}
      >
        <GridItem>
          <HStack minW={0} spacing={3}>
            <Image src={logo} alt="Logo" boxSize="24px" />
            <Text
              fontFamily="Inter"
              fontWeight={800}
              fontSize="23px"
              lineHeight="100%"
              letterSpacing="0"
              noOfLines={1}
            >
              LOGO
            </Text>
          </HStack>
        </GridItem>
        <GridItem
          justifySelf="start"
          ml={{ base: 2, md: 6 }}
          h="full"
          display={{ base: "none", md: "block" }}
        >
          <Tabs variant="unstyled" defaultIndex={1} h="full" _focus={{ boxShadow: 'none', outline: 'none' }}
						_focusVisible={{ boxShadow: 'none', outline: 'none' }}>
            <TabList h="full">
              <Tab
                {...navTabBaseProps}
                _hover={{ bg: "transparent", border: "none" }}
                _active={{ bg: "transparent" }}
                _selected={navTabSelectedProps}
                h="full"
              >
                Dashboard
              </Tab>
              <Tab
                {...navTabBaseProps}
                _hover={{ bg: "transparent", border: "none" }}
                _active={{ bg: "transparent" }}
                _selected={navTabSelectedProps}
                h="full"
              >
                Resources
              </Tab>
              <Tab
                {...navTabBaseProps}
                _hover={{ bg: "transparent", border: "none" }}
                _active={{ bg: "transparent" }}
                _selected={navTabSelectedProps}
                h="full"
              >
                Toolkit
              </Tab>
            </TabList>
          </Tabs>
        </GridItem>

        <GridItem justifySelf="end">
          <HStack spacing={3}>
            <HStack spacing={3} display={{ base: "none", md: "flex" }}>
              <HStack spacing={2}>
                <Switch color="#314EF9" size="md" defaultChecked />
                <Text {...navTextBaseProps}>Switch to Employee</Text>
              </HStack>
              <Box w="1px" h="20px" bg="#314EF9" />
              <Avatar
                {...navTextProfileProps}
                size="sm"
                bg="#17E4A1"
                name="Jonathan Adams"
              />
              <HStack spacing={1}>
                <Text {...navTextBaseProps}>Jonathan</Text>
                <ChevronDownIcon boxSize={4} color="#2C3237" />
              </HStack>
            </HStack>
            <HStack spacing={3} display={{ base: "flex", md: "none" }}>
              <Switch color="#314EF9" size="md" defaultChecked />
              <Avatar
                {...navTextProfileProps}
                size="sm"
                bg="#17E4A1"
                name="Jonathan Adams"
              />
              <IconButton
                aria-label="Menu"
                icon={<HamburgerIcon />}
                variant="ghost"
                size="md"
                color="#2C3237"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
              />
            </HStack>
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  );
}
