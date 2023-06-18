/* eslint-disable react/no-children-prop */
import { Avatar, Box, Input, InputGroup, InputLeftAddon, InputRightAddon, Text } from '@chakra-ui/react'
import React from 'react'
import style from "../styles/navbar.module.css"
import { BsGithub,BsFileCode } from "react-icons/bs";
import { AiOutlineSearch,AiOutlinePlus } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
const Navbar = () => {
  return (
    <Box className={style.nav}>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <BsGithub color="white" fontSize={"32px"}/>
        <InputGroup size='sm' border="1px solid gray" w="90%" borderRadius={"6px"}>
          <InputLeftAddon children={<AiOutlineSearch color='gray' fontSize={"20px"}/>} bg="none" border={"none"}/>
          <Input type='tel' placeholder='Search or jump to...' border={"none"}/>
          <InputRightAddon children={<BsFileCode color='gray' fontSize={"20px"}/>} bg="none" border={"none"}/>
        </InputGroup>
      </Box>
      <Box display={"grid"}>
        <Box className={style.nav2}>
        <Text>Pull requests</Text>
        <Text>Issues</Text>
        <Text>Codespaces</Text>
        <Text>Marketplace</Text>
        <Text>Explore</Text>
        </Box>
      </Box>
      <Box className={style.nav3}>
        <IoNotificationsOutline fontSize={"25px"} color="white"/>
        <AiOutlinePlus fontSize={"25px"} color="white"/>
        <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"}>
        <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
        <IoMdArrowDropdown fontSize={"20px"} color="white"/>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar