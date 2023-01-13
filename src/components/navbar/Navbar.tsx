import { Flex, Link } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <nav>
      <Flex as={'ul'} alignItems={'center'} justifyContent={'end'} gap={'9'} p={'8'} bg={'primary.500'}>
        <Flex as={'li'}>
          <Link href='#' color={'#EFFDFB'}>
            Sorteos
          </Link>
        </Flex>
        <Flex as={'li'}>
          <Link href='#' color={'#EFFDFB'}>
            Revisar billete
          </Link>
        </Flex>
      </Flex>
    </nav>
  );
};

export default Navbar;
