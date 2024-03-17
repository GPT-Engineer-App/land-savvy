import React from "react";
import { Box, Heading, Text, Button, Stack, Flex, Image, Grid, GridItem, Icon } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const properties = [
    {
      id: 1,
      title: "Lush Green Acres",
      description: "Beautiful 5-acre land with scenic views.",
      image: "https://images.unsplash.com/photo-1465541064977-5a2d76b09f1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGxhbmQlMjBhY3Jlc3xlbnwwfHx8fDE3MTA2NTc0MDZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 2,
      title: "Riverside Retreat",
      description: "Stunning 3-acre property along the river.",
      image: "https://images.unsplash.com/photo-1662667856989-e74560676977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyaXZlcnNpZGUlMjBsYW5kJTIwcHJvcGVydHl8ZW58MHx8fHwxNzEwNjU3NDA2fDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 3,
      title: "Mountain View Estate",
      description: "Spacious 8-acre land with breathtaking mountain views.",
      image: "https://images.unsplash.com/photo-1466384920976-6d2352dd04c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHZpZXclMjBsYW5kfGVufDB8fHx8MTcxMDY1NzQwN3ww&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Box>
      {/* Header */}
      <Box bg="gray.100" py={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Dream Land Properties
        </Heading>
        <Text fontSize="xl" textAlign="center" mt={4}>
          Discover your perfect piece of land
        </Text>
      </Box>

      {/* Featured Properties */}
      <Box p={8}>
        <Heading as="h2" size="xl" mb={8}>
          Featured Properties
        </Heading>
        <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={8}>
          {properties.map((property) => (
            <GridItem key={property.id}>
              <Box borderWidth={1} borderRadius="lg" overflow="hidden">
                <Image src={property.image} alt={property.title} />
                <Box p={6}>
                  <Heading as="h3" size="lg" mb={2}>
                    {property.title}
                  </Heading>
                  <Text>{property.description}</Text>
                  <Button colorScheme="blue" size="lg" mt={4}>
                    Learn More
                  </Button>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>

      {/* About Section */}
      <Box bg="gray.100" p={8}>
        <Heading as="h2" size="xl" mb={4}>
          About Us
        </Heading>
        <Text fontSize="lg">Dream Land Properties is a premier land selling company dedicated to helping you find the perfect property to build your dream home or invest in your future. With years of experience and a wide selection of stunning land options, we are committed to providing exceptional service and guiding you through every step of the buying process.</Text>
      </Box>

      {/* Contact Section */}
      <Box p={8}>
        <Heading as="h2" size="xl" mb={8}>
          Contact Us
        </Heading>
        <Flex direction={["column", "row"]} justify="space-between">
          <Stack spacing={4} mb={[8, 0]}>
            <Flex align="center">
              <Icon as={FaMapMarkerAlt} mr={2} />
              <Text>123 Land Street, City, Country</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaPhone} mr={2} />
              <Text>+1 123-456-7890</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaEnvelope} mr={2} />
              <Text>info@dreamlandproperties.com</Text>
            </Flex>
          </Stack>
          <Box>
            <Image src="https://images.unsplash.com/photo-1700480555928-198c674a6ab8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYW5kJTIwcHJvcGVydHklMjBtYXB8ZW58MHx8fHwxNzEwNjU3NDA3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Contact Map" />
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={8} textAlign="center">
        <Text>&copy; {new Date().getFullYear()} Dream Land Properties. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
