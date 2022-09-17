import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { BsArrowRight } from 'react-icons/bs';
import ReactTyped from 'react-typed';

const GitHubBadge = () => {
    return (
        <Flex
            _hover={{ bg: 'rgb(34, 35, 37)', textDecoration: 'none' }}
            alignItems="center"
            as={Link}
            bg="#131314"
            border="thin solid"
            borderColor="rgb(34, 35, 37)"
            color="white"
            cursor="pointer"
            dir="row"
            fontSize="sm"
            h="8"
            href="https://github.com/buidler-hub/solkudos"
            isExternal
            px="6"
            rounded="full"
            transition="all 0.2s"
        >
            We&apos;re Open Source on GitHub |
            <Text
                alignItems="center"
                color="pink.500"
                display="flex"
                flexDir="row"
                fontWeight="500"
                gap="1"
                ml="2"
            >
                GITHUB <BsArrowRight />
            </Text>
        </Flex>
    );
};

const MainText = () => {
    return (
        <Box
            color="white"
            fontSize={['3xl', '6xl']}
            fontWeight="900"
            zIndex={2}
            fontFamily="argentum"
        >
            <Box display="flex">
                Celebrate and Mint&nbsp;
                <Text color="pink.500" display={{ base: 'block', lg: 'none' }}>
                    wins
                </Text>
                <Text color="pink.500" display={{ base: 'none', lg: 'block' }}>
                    <ReactTyped
                        loop
                        strings={['wins', 'achievements']}
                        typeSpeed={50}
                    />
                </Text>
            </Box>
            <Text>as NFTs, together</Text>
        </Box>
    );
};

export { GitHubBadge, MainText };
