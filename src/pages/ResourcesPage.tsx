import { useMemo, useState } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import filterIcon from "../../public/assets/filter-icon.svg";
import Filters from "../components/Filters";
import ResourceCard from "../components/ResourceCard";
import { resources } from "../resources/data";
import { bannerSubTitleProps, bannerTitleProps, showFilterProps } from "../styles/nav";

export default function ResourcesPage() {
  const [query, setQuery] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const showSidebar = useBreakpointValue({ base: false, lg: true });

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return resources;
    return resources.filter((r) =>
      [r.title, r.topic, r.category].some((v) => v.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <Stack spacing={6}>
      <Stack spacing={2} align="center" textAlign="center" bg="#fafafa" w="full">
        <Heading
          size={{ base: "xl", md: "2xl" }}
          pt={{ base: "1rem", md: "4rem" }}
          {...bannerTitleProps}
        >
          Resources
        </Heading>
        <Text maxW="2xl" {...bannerSubTitleProps}>
          Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
          commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae
          congue
        </Text>
        <Flex justify="center" width="100%">
          <InputGroup
            size="lg"
            width={{ base: "80%", md: "70%" }}
            height="59px"
          >
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} color="gray.400" />
            </InputLeftElement>
            <Input
              placeholder="Search by title or keyword"
              bg="white"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </InputGroup>
        </Flex>
      </Stack>

      {!showSidebar && (
        <Flex>
          <Button
           leftIcon={<img src={filterIcon} alt="Filter"/>}
            variant="outline"
            onClick={onOpen}
            w="full"
            {...showFilterProps}
          >
            Show Filters
          </Button>
        </Flex>
      )}

      <Grid
        templateColumns={{ base: "1fr", lg: "258px 1fr" }}
        gap={6}
        alignItems="start"
      >
        {showSidebar && (
          <GridItem>
            <Filters />
          </GridItem>
        )}
        <GridItem>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
            {filtered.map((r) => (
              <ResourceCard key={r.id} resource={r} />
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filters</DrawerHeader>
          <DrawerBody>
            <Filters />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
}
