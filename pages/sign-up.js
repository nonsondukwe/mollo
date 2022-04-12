import React, {useState} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {Flex, Box,Button, Text, InputRightElement, Input, InputGroup  } from '@chakra-ui/react';
import Image from 'next/Image';
import mlogo from '../public/mlogo.png';
import hero from '../public/hero.svg';



const SignUp = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (  
    <>
    <Head>
        <title>Sign Up</title>
      </Head>
    <nav>
    <Box>
      <Flex pl='100' pt='10' pr='100'>
      <Link href='/'>
        <Image 
        width= '147px'
        height= '38px'
        src={mlogo}
        alt='logo'
      /></Link>
      </Flex>
    </Box>
    </nav>

    <Box w="100%"
     backgroundImage="url('/signBg.png')"
     backgroundPosition="right bottom"
     backgroundRepeat="no-repeat"
    >
    
<Flex pr='100' pl='100' flexWrap alignContent='center' alignItems='center'>
  <Box width='500px'>
<Text pb='36px' fontFamily='Roboto' fontStyle="normal" fontWeight='700' fontSize='36px' letterSpacing='0.01em' color='#3C1D59'>Sign Up to Mollo</Text>
<Text  fontFamily='Abhaya Libre Medium' fontStyle="normal" fontWeight='500' fontSize='16px' letterSpacing='0.01em' color='#433D4A' lineHeight='24px'>
Please enter your Mollo password and the email address associated with your account to sign in.
</Text>

  <Text mt='28px' fontStyle="normal" fontWeight='400' fontSize='14px'  color='#000000' mb='5px'>Fullname</Text>
  <Input placeholder='fullname' size='md' mb='10px' />
  <Text mt='28px' fontStyle="normal" fontWeight='400' fontSize='14px'  color='#000000' mb='5px'>Phone Number</Text>
  <Input placeholder='Phone Number' size='md' mb='10px' />
  <Text mt='28px' fontStyle="normal" fontWeight='400' fontSize='14px'  color='#000000' mb='5px'>Email</Text>
  <Input type='email' placeholder='Email' size='md' mb='10px' />
  <Text mt='28px' fontStyle="normal" fontWeight='400' fontSize='14px'  color='#000000' mb='5px'>Password</Text>
  <InputGroup size='md' mb='15px'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>

    <Button colorScheme='black' backgroundColor='#3C1D59' color='#ffffff' variant='solid' type='submit' size='md' fontSize='14px' fontWeight='400' isFullWidth>
    Sign Up
  </Button>
</Box>
<Box ml='50'  >
<Image 
        src={hero}
        width = '550'
        alt='Smiling Lade'
      />
</Box>
</Flex>
</Box>
</>
  
  
  );
}

export default SignUp