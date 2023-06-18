import { Badge, Box, Text } from '@chakra-ui/react'
import React from 'react'
import { RiBookLine } from "react-icons/ri";
import style from "../styles/landing.module.css";
import { AiOutlineHeart,AiOutlineEye,AiOutlineStar } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoRepoForked } from "react-icons/go";
const Landing = () => {
  return (
    <Box className={style.main}>
        <Box className={style.right}>
            <RiBookLine color='#7d8590' fontSize={"22px"}/>
            <Text color={"blue.400"} fontSize={"20px"} display={"flex"} gap={"10px"}>Main-ui <Text color='grey'>/</Text> <Text  fontWeight={"bold"} >chakra-ui</Text></Text>
            <Badge variant='outline' colorScheme='gray' borderRadius="10px" fontSize={"10px"}>
                Public
            </Badge>
        </Box>
        <Box className={style.left}>
            <Box bg="gray.800">
                <AiOutlineHeart color='pink'/>
                <Text>Sponsor</Text>
            </Box>
            <Box bg="gray.800">
                <AiOutlineEye color='grey' fontSize={"20px"}/>
                <Text display={"flex"} gap={"5px"}>Watch <Text borderRadius={"5px"}  fontSize={"15px"} bg="gray.700">203</Text></Text>
                <IoMdArrowDropdown color='white' fontSize={"20px"}/>
            </Box>
            <Box bg="gray.800">
                <GoRepoForked color='grey' fontSize={"20px"}/>
                <Text display={"flex"} gap={"5px"}>Fork<Text borderRadius={"5px"} fontSize={"15px"} bg="gray.700">2.9k</Text></Text>
                <IoMdArrowDropdown color='white' fontSize={"20px"}/>
            </Box>
            <Box bg="gray.800">
                <AiOutlineStar color='grey' fontSize={"20px"}/>
                <Text display={"flex"} gap={"5px"}>Star<Text borderRadius={"5px"}  fontSize={"15px"} bg="gray.700">33.2k</Text></Text>
                <IoMdArrowDropdown color='white' fontSize={"20px"}/>
            </Box>
        </Box>
    </Box>
  )
}

export default Landing