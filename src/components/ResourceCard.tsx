import { Box, Heading, Stack, Badge } from "@chakra-ui/react";

export type Resource = {
  id: string;
  title: string;
  category: string;
  topic: string;
  type: "link" | "video" | "doc";
  color: string;
};

type Props = {
  resource: Resource;
};

export default function ResourceCard({ resource }: Props) {
  const getIconPath = (id: string) => {
    if (id === "1" || id === "3") return "public/assets/link-icon.svg";
    if (id === "2" || id === "4") return "public/assets/video-icon.svg";
    if (id === "5" || id === "6") return "public/assets/pdf-icon.svg";
    return "/assets/link-icon.svg";
  };

  const getSvgPath = (id: string) => {
    return `public/assets/card-${id}.svg`;
  };

  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="lg"
      boxShadow="sm"
      position="relative"
    >
      <Box position="relative" h="120px" borderTopRadius="lg" overflow="hidden">
        <Box
          position="absolute"
          top="-40px"
          left="0"
          right="0"
          bottom="0"
          backgroundImage={`url(${getSvgPath(resource.id)})`}
          backgroundSize="cover"
          backgroundPosition="top left"
          backgroundRepeat="no-repeat"
          borderTopRadius="lg"
        />

        <Box position="absolute" bottom="4" left="4">
          <Box
            as="img"
            src={getIconPath(resource.id)}
            alt={`${resource.type} icon`}
            boxSize="10"
          />
        </Box>
      </Box>
      <Stack p={4} pt={8} spacing={6}>
        <Heading
          size="sm"
          lineHeight="1.3"
          mt={2}
          w="209px"
          h="50px"
          fontFamily="Poppins"
          fontWeight="700"
          fontSize="18px"
          color="#2C3237"
          css={{
            whiteSpace: "pre-line",
          }}
        >
          {resource.title}
        </Heading>
        <Stack spacing={4}>
          <Badge
            variant="subtle"
            fontSize="xs"
            alignSelf="flex-start"
            textTransform="none"
            color="#828282"
            bg="transparent"
            border="none"
            fontWeight="400"
          >
            {resource.topic}
          </Badge>
          <Badge
            px="11px"
            py="5px"
            bg="#F2F2F2"
            display="flex"
            alignItems="center"
            justifyContent="center"
            variant="subtle"
            fontSize="xs"
            alignSelf="flex-start"
            borderRadius="19px"
            textTransform="none"
          >
            {resource.category}
          </Badge>
        </Stack>
      </Stack>
    </Box>
  );
}
