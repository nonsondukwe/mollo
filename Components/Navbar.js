import React from 'react';
import Image from 'next/image';
import mlogo from '../public/mlogo.png';
import { Menu, 
    MenuList, 
    MenuItem, 
    Flex, 
    Box, 
    Spacer, 
    MenuButton, 
    Button, 
    Text, 
    Center,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    List,
  ListItem,
  ListIcon,
    DrawerCloseButton,} from '@chakra-ui/react';
    import {AiOutlineWallet} from 'react-icons/ai';
import Link from 'next/link';
import {IoMdArrowDropdown} from 'react-icons/io';
import {BsBag} from 'react-icons/bs';
import {FiCreditCard} from 'react-icons/fi';

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()


  return (
    <nav>
        
        <Flex mt='10'>
    <Center  pl={{base: '5', md: '5', lg:'100' }} 
    pr={{base: '5', md: '5', lg:'100' }}>
   
      <Link href='/'>
        <Image 
        width= '147px'
        height= '38px'
        src={mlogo}
        alt='logo'
      /></Link>
    </Center>
    <Spacer />
    <Center display={{ base: 'none', md: 'none', lg: 'flex' }}  pl={{base: '5', md: '5', lg:'100' }}  pr={{base: '5', md: '5', lg:'100' }}>
    <Menu >
    <MenuButton border='0px' bgColor='transparent' as={Button} rightIcon={<IoMdArrowDropdown />}>
    Company
  </MenuButton>
  <MenuList >
          <Link href='/' passHref>
            <MenuItem icon={<AiOutlineWallet/>}>Wallet</MenuItem>
          </Link>
          <Link href='/' passHref>
            <MenuItem icon={<BsBag />}>Finance Manager</MenuItem>
          </Link>
          <Link href='/' passHref>
            <MenuItem icon={<FiCreditCard />}>Cards</MenuItem>
          </Link>
   
  </MenuList>
</Menu>
    <Menu>
    <MenuButton border='0px' bgColor='transparent' as={Button} rightIcon={<IoMdArrowDropdown />}>
    Features
  </MenuButton>
  <MenuList>
  <Link href='/' passHref>
            <MenuItem icon={<AiOutlineWallet/>}>Wallet</MenuItem>
          </Link>
          <Link href='/' passHref>
            <MenuItem icon={<BsBag />}>Finance Manager</MenuItem>
          </Link>
          <Link href='/' passHref>
            <MenuItem icon={<FiCreditCard />}>Cards</MenuItem>
          </Link>
  </MenuList>
</Menu>

<Menu>
    <MenuButton border='0px' bgColor='transparent' as={Button} rightIcon={<IoMdArrowDropdown />}>
    Help
  </MenuButton>
  <MenuList>
  <Link href='/' passHref>
            <MenuItem>FAQ</MenuItem>
          </Link>
          <Link href='/' passHref>
            <MenuItem>Contact Us</MenuItem>
          </Link>
          <Link href='/' passHref>
            <MenuItem>Help</MenuItem>
          </Link>
  </MenuList>
</Menu>
    </Center>
    <Center  pl={{base: '5', md: '5', lg:'100' }} pr={{base: '5', md: '5', lg:'100' }} display={{  base: 'none', md: 'none', lg: 'flex' }} >
    <Menu>
    <Link href='/sign-in' passHref>
  <Text mr='10' cursor='pointer' fontSize='16px' fontWeight='bold' lineHeight='24px' letterSpacing='0.01em' color='#3C1D59'> 
      Login
  </Text>
  </Link>
  <Link href='/sign-up' passHref>
  <Button colorScheme='black' backgroundColor='#3C1D59' color='#ffffff' variant='solid' type='submit' size='md' fontSize='14px' fontWeight='400' width='228px'>
             Sign Up
          </Button>
  </Link>
</Menu>
    </Center>

    <Center display={{  sm: 'flex', md: 'flex', lg: 'none'  }}>
    <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Menu
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          

          <DrawerBody>
          <List spacing={3} color='#433D4A' fontSize='16px'  fontWeight='500'>
             <ListItem>
              Company
             </ListItem>
             <ListItem>
             Features
             </ListItem>
             <ListItem>
             Help
             </ListItem>
             <Link href='/sign-in' passHref>
             <ListItem cursor='pointer'>
             Sign In
             </ListItem>
             </Link>
             <Link href='/sign-up' passHref>
             <ListItem cursor='pointer'>
            Sign Up
             </ListItem>
             </Link>
            </List>
          </DrawerBody>

          
        </DrawerContent>
      </Drawer>
    </Center>
  </Flex>
    </nav>
  )
}

export default Navbar