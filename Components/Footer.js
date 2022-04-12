import React from 'react';
import Image from 'next/image';
import mollo1 from '../public/mollo1.png';
import socials from '../public/socials.png';
import { Box, 
    Flex, 
    Badge, 
    Text, Button, 
    Center, 
    Spacer,  
    List,
    ListItem,
    ListIcon,
    } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box p='100'>
     <Flex justify='space-between' flexDirection ={{ sm: 'column', lg:'row', md:'column' }}>
     <Box>
     <Image
        src={mollo1}
        alt='Smiling Lade'
        />
     </Box>
     <Box>
         <Text fontSize='18px' fontWeight='bold' lineHeight='24px' letterSpacing='0.01em' mb='5' color='#3C1D59'>COMPANY</Text>
     <List spacing={3} color='#433D4A' fontSize='16px'  fontWeight='500'>
  <ListItem>
  Our Story
  </ListItem>
  <ListItem>
  Blog
  </ListItem>
  <ListItem>
  Careers
  </ListItem>
  <ListItem>
  Media Center
  </ListItem>
</List>
     </Box>
     <Box>
     <Text fontSize='18px' fontWeight='bold' lineHeight='24px' letterSpacing='0.01em' mb='5' color='#3C1D59'>CONTACT</Text>
     <List spacing={3} color='#433D4A' fontSize='16px'  fontWeight='500'>
  <ListItem>
  Enquiry
  </ListItem>
</List>
     </Box>
     <Box>
     <Image
        src={socials}
        alt='Smiling Lade'
        />
     </Box>
     </Flex>
     <Box>
     <Text fontSize='14px' color='#433D4A' pt='4'>
        Copyright © 2021 Mollo Technology. All Rights Reserved.
        </Text>
     </Box>
    </Box>
  )
}

export default Footer