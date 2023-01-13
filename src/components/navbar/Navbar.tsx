import { Flex } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <nav>
      <Flex as={'ul'} alignItems={'center'} color={'white'} justifyContent={'end'} gap={'9'} p={'8'} bg={'primary.500'}>
        {/* <Flex as={'li'}>
          <Link href='#'>Sorteos</Link>
        </Flex>
        <Flex as={'li'}>
          <Link href='#'>Revisar billete</Link>
        </Flex> */}
      </Flex>
    </nav>
  );
};

export default Navbar;
