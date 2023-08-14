import { Box, Divider, Image, Stack, Text, VStack } from "@chakra-ui/react";

import anhhaidua from "../public/DSC_6882.png";
import frame from "../public/frame.svg";

const GromAndBride = () => {
  return (
    <VStack pb={24} spacing={16} minHeight="90vh">
      <Stack
        w="full"
        maxW="1400px"
        justify="space-around"
        alignItems="center"
        flexDirection={{
          xs: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
      >
        <VStack
          flex={1}
          alignItems={{
            xs: "center",
            sm: "center",
            md: "center",
            lg: "flex-end",
          }}
        >
          <Text data-aos="fade-up" fontSize="5xl" color="main">
            Bích Ly
          </Text>
          <Divider
            data-aos="fade-up"
            orientation="horizontal"
            width={120}
            size="md"
            borderColor="main"
            opacity={0.5}
          />
          <Text data-aos="fade-up" data-aos-offset="200" as="i" color="main">
            Cô dâu
          </Text>
          <Text data-aos="fade-up" data-aos-offset="200" color="main">
            Tìm về một nơi bên hiên nhà
          </Text>
        </VStack>

        <Box
          data-aos="zoom-in-up"
          // data-aos-duration="1000"
          // data-aos-delay="300"
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding={12}
          backgroundImage={`url(${frame.src})`}
          backgroundSize="oject-fit"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
        >
          <Image
            w={{ xs: "70%", sm: "60%" }}
            alt="anhhaidua"
            borderRadius={{ xs: 2, sm: 4 }}
            src={anhhaidua.src}
          />
        </Box>

        <VStack
          flex={1}
          alignItems={{
            xs: "center",
            sm: "center",
            md: "center",
            lg: "flex-start",
          }}
        >
          <Text data-aos="fade-up" fontSize="5xl" color="main">
            Ngọc Thịnh
          </Text>
          <Divider
            data-aos="fade-up"
            orientation="horizontal"
            width={120}
            size="md"
            borderColor="main"
            opacity={0.5}
          />
          <Text data-aos="fade-up" data-aos-offset="200" as="i" color="main">
            Chú rể
          </Text>
          <Text data-aos="fade-up" data-aos-offset="200" color="main">
            Tìm về một nơi bên hiên nhà
          </Text>
        </VStack>
      </Stack>
    </VStack>
  );
};

export default GromAndBride;
