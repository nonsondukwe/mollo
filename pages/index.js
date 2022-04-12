import { Box, 
  Flex, 
  Badge, 
  Text, Button,  
  List,
  ListItem,
  ListIcon, } from '@chakra-ui/react';
import Image from 'next/Image';
import homeImg from '../public/homeImg.png';
import pstore from '../public/pstore.png';
import appstore from '../public/appstore.png';
import mtns from '../public/mtns.png';
import flash from '../public/flash.png';
import mollocard from '../public/mollocard.png';
import regfon from '../public/regfon.png';
import {MdCheckCircle} from 'react-icons/md';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';


export default function Home() {
  return (
    <>
    <Navbar />
    <Box mt='100px'>
      <Flex pr='100' pl='100' flexWrap alignContent='center' alignItems='center' flexDirection ={{ base: 'column', lg:'row', md:'column' }}>
        <Box>
         <Badge bgColor='#F5EBFF' p='2' fontSize='12px' color='#3C1D59' borderRadius='20px' width='118px' textAlign='center'>DIGITAL BANK</Badge>
           <Text pb='20px' fontFamily='Roboto' fontStyle="normal" fontWeight='700' fontSize='36px' letterSpacing='0.01em' color='#3C1D59' lineHeight='50px'> All lifestyles can gain from digital banking. </Text>
           <Text  fontFamily='Abhaya Libre Medium' fontStyle="normal" fontWeight='500' fontSize='16px' letterSpacing='0.01em' color='#433D4A' lineHeight='24px' mb='20px'>
           With a free Mollo, you can unlock the power of money. All of your bills, money transfers, buy airtime can be done in one spot.
           </Text>
           <Button colorScheme='black' backgroundColor='#3C1D59' color='#ffffff' variant='solid' type='submit' size='md' fontSize='14px' fontWeight='400' width='228px'mb='6'>
             Get Started
          </Button>
           <Box>
           <Image
           mr='12'
        src={pstore}
        alt='Smiling Lade'
        />
        &nbsp;&nbsp;&nbsp;
           <Image
        src={appstore}
        alt='Smiling Lade'
        />
           </Box>

        </Box>
        <Box ml='50'  >
        <Image 
        src={homeImg}
        width = '550'
        alt='Smiling Lade'
        />
</Box>

      </Flex>

<section>
      <Box w="100%"
     backgroundImage="url('/signBg.png')"
     backgroundPosition="right"
     backgroundRepeat="no-repeat"
     pb='180'
    >
    
<Flex flexDirection ={{ base: 'column', lg:'row', md:'column' }} pr='100' pl='140' mt='30'  flexWrap alignContent='center' alignItems='center' >
  <Box>
  
  <Image 
        src={mtns}
        width = '550'
        alt='Smiling Lade'
      />
</Box>
<Box ml='148' width='500px'  >
<Badge  bgColor='#F5EBFF' p='2' fontSize='12px' color='#3C1D59' borderRadius='20px' width='118px' textAlign='center'>BILL PAYMENT</Badge>
<Text  fontFamily='Roboto' fontStyle="normal" fontWeight='700' fontSize='36px' letterSpacing='0.01em' lineHeight='40px' color='#3C1D59' mb='20px' > Take advantage of seamless payments at a low or no cost. </Text>
<Text  fontFamily='Abhaya Libre Medium' fontStyle="normal" fontWeight='500' fontSize='16px' letterSpacing='0.01em' color='#433D4A' lineHeight='24px' mb='32px'>
With only a few clicks on your smartphone, you can pay all of your bills and top up your airtime at the lowest possible price.
</Text>
<List spacing={3}>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Purchase airtime and data for all networks you can get 10%
    discount.
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Pay for your cable television, power and water bills and save
    up to 100% on fees
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    You can get up to 10% discount when you pay your bills
  </ListItem>
 
</List>
</Box>
</Flex>
</Box>
</section>
<section>
      <Box w="100%"
       backgroundImage="url('/map.png')"
       backgroundPosition="cover"
       backgroundRepeat="no-repeat"
       bgColor='#fbfff0'
       pt='10'
       pb='10'>
         
    
<Flex flexDirection ={{ base: 'column', lg:'row', md:'column' }} pr='100' pl='100' mt='30' flexWrap alignContent='center' alignItems='center'>
  <Box>
  
  <Badge  bgColor='#F5EBFF' p='2' fontSize='12px' color='#3C1D59' borderRadius='20px' width='118px' textAlign='center'>TRANSFER FUNDS</Badge>
<Text  fontFamily='Roboto' fontStyle="normal" fontWeight='700' fontSize='36px' letterSpacing='0.01em' lineHeight='40px' color='#3C1D59' mb='20px'> Send money to friends and family in a flash. </Text>
<Text  fontFamily='Abhaya Libre Medium' fontStyle="normal" fontWeight='500' fontSize='16px' letterSpacing='0.01em' color='#433D4A' lineHeight='24px' mb='32px'>
Transfers to the Mollo account are free, and you can send money to any bank account in Nigeria.
</Text>
<List spacing={3}>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    There are no conversion fees and the exchange rates are straight forward
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Transfers to local bank accounts and Mollo mobile money
    accounts are completed quickly
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Transfer of funds are easy discreet and fast
  </ListItem>
 
</List>
</Box>
<Box ml='148' width='500px'  >
<Image 
        src={flash}
        width = '550'
        alt='Smiling Lade'
      />
</Box>
</Flex>
</Box>
</section>
<section>
      <Box w="100%"
       pt='10'
       pb='10'>
         
    
<Flex pr='100' pl='100' mt='30' flexWrap alignContent='center' alignItems='center' flexDirection ={{ base: 'column', lg:'row', md:'column' }}>
  <Box>
  <Image 
        src={mollocard}
        
        alt='Smiling Lade'
      />
  
</Box>
<Box ml='148' width='500px'  >
<Badge  bgColor='#F5EBFF' p='2' fontSize='12px' color='#3C1D59' borderRadius='20px' width='118px' textAlign='center'>VIRTUAL CARDS</Badge>
<Text  fontFamily='Roboto' fontStyle="normal" fontWeight='700' fontSize='36px' letterSpacing='0.01em' lineHeight='40px' color='#3C1D59' mb='20px'> Get an authentic card that pays you back. </Text>
<Text  fontFamily='Abhaya Libre Medium' fontStyle="normal" fontWeight='500' fontSize='16px' letterSpacing='0.01em' color='#433D4A' lineHeight='24px' mb='32px'>
The Mollo debit card gives you more financial control, security, and access to deals.
</Text>
<List spacing={3}>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    You can make as many cards as you want
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    For your transactions, we offer a transparent and dependable exchange rate
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    With our cashback loyalty scheme you will be able to pay
    smarter and earn more
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Compatible with Apple Pay, Google Pay, Paypal, Netflix, Amazon, Spotify and other famous websites.
  </ListItem>
 
</List>
</Box>
</Flex>
</Box>
</section>
<section>
  <Box  
  mr='100' 
  ml='100' 
  mt='30' 
  pl='20' 
  pr='20' 
  bgColor='#3C1D59' 
  h={{ lg:'380px', md: '100%', base: '100%' }} 
  borderRadius='10' 
  backgroundImage="url('/pupbg.png')"
  backgroundPosition="right 200px bottom 140px"
  backgroundRepeat="no-repeat">
    <Flex alignItems='center' justify='space-between' flexDirection ={{ base: 'column', lg:'row', md:'column' }} >
      <Box >
    <Text  fontFamily='Roboto' fontStyle="normal" fontWeight='700' fontSize='36px' letterSpacing='0.01em' lineHeight='40px' color='#ffffff' mb='20px'> Register For Free </Text>
    <Text  fontFamily='Abhaya Libre Medium' fontStyle="normal" fontWeight='500' fontSize='16px' letterSpacing='0.01em' color='#ffffff' lineHeight='24px' mb='32px'>
    Mollo is available on Google Play and the App Store.To enjoy ultimate financial security
    </Text>
    <Image
           mr='12'
        src={pstore}
        alt='Smiling Lade'
        />
        &nbsp;&nbsp;&nbsp;
           <Image
        src={appstore}
        alt='Smiling Lade'
        />
    </Box>
      <Box mt={{ lg:'-10', base: '0', md: '0' }}>
      <Image 
        src={regfon}
        alt='Smiling Lade'
      />
    </Box>

    </Flex>

  </Box>
</section>
<footer>
  <Footer />
</footer>
    </Box>
    </>
  )
}
