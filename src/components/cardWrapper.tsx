import { useState, useEffect } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import useGoogleSheets from "../hooks/useGoogleSheet";
import Card from "./card";
import CardSkeleton from "./cardSkeleton";

const CardWrapper = () => {
  const [localData, setLocalData] = useState([]);
  const { data, loading, error, refetch } = useGoogleSheets();

  useEffect(() => {
    if (data && data.length > 0) {
      setLocalData(data);
    }
  }, [data]);

  if (loading) {
    return (
      <Box
        mt={{ base: "30px", md: "40px", lg: "50px" }}
        columnCount={{ base: 1, md: 2, lg: 4 }}
        columnGap="16px"
      >
        {[1, 2, 3, 4].map((i) => (
          <Box key={i} mb="16px" breakInside="avoid">
            <CardSkeleton />
          </Box>
        ))}
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        mt="30px"
        bg="#171717"
        borderRadius="12px"
        color="#ff6b6b"
        p="16px"
        textAlign="center"
      >
        <Text mb={2}>Error: {error}</Text>
        <Button
          onClick={refetch}
          bg="#333"
          color="white"
          _hover={{ bg: "#444" }}
        >
          Try Again
        </Button>
      </Box>
    );
  }

  return (
    <Box
      mt={{ base: "30px", md: "40px", lg: "50px" }}
      columnCount={{ base: 1, md: 2, lg: 4 }}
      columnGap="16px"
    >
      {localData.map((item, index) => (
        <Box key={index} mb="16px" breakInside="avoid">
          <Card data={item} />
        </Box>
      ))}
    </Box>
  );
};

export default CardWrapper;
