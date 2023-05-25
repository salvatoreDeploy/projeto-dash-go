import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Henrique Araujo</Text>
          <Text color="gray.300" fontSize="small">
            henrique.araujo@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" src="https://github.com/salvatoreDeploy.png" />
    </Flex>
  );
}
