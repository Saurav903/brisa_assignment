import { Box, Divider, Text } from '@chakra-ui/react';
import React from 'react'
import { VscIssues } from "react-icons/vsc";
import { BiMessage } from "react-icons/bi";
import style from "../styles/singleissue.module.css";
const ItemsPages = ({el}) => {
  return (
    <Box className={style.datas}>
        <Divider borderColor={"gray"}/>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} padding={"10px"}>
            <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                <VscIssues color='green' fontSize={"25px"}/>
                <Text color='white' fontSize={"16px"} fontWeight={"500"}>{el.title}</Text>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                <BiMessage color='white' fontSize={"20px"}/>
                <Text color={"whiteAlpha.600"}>{el.comments}</Text>
            </Box>
        </Box>
        <Text color={"gray.400"} fontSize={"13px"} paddingLeft={"40px"} marginTop={"-10px"} paddingBottom={"5px"}>#{el.number} opened 2 days ago by {el.user.login} 1 of 3 tasks</Text>
    </Box>
  )
}

export default ItemsPages