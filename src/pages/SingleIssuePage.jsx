import { Box, Button, Divider, Flex, Input, InputGroup, InputLeftAddon, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BiCode } from "react-icons/bi";
import { BsFileRuled,BsBook } from "react-icons/bs";
import { VscIssues } from "react-icons/vsc";
import { FaCodeBranch } from "react-icons/fa";
import { GoCommentDiscussion,GoMilestone } from "react-icons/go";
import { AiOutlinePlayCircle,AiOutlineCheck } from "react-icons/ai";
import { MdSecurity,MdInsights } from "react-icons/md";
import { CiShoppingTag } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import style from "../styles/singleissue.module.css";
import ItemsPages from './ItemsPages';
import axios from 'axios';
import Paginate from './Paginate';


const SingleIssuePage = () => {

  const [data,setData] = useState([]);
  const [len,setLen] = useState([]);
  const [page,setPage] = useState(1);

  const getData = async(page)=>{
    let response = await axios.get(`https://api.github.com/repos/chakra-ui/chakra-ui/issues?state=open&per_page=7&page=${page}`);
    let respons = await axios.get(`https://api.github.com/repos/chakra-ui/chakra-ui/issues?state=open`);
    setLen(respons.data);
    setData(response.data);
  }

  useEffect(()=>{
    getData(page);
  },[page])

  return (
    <>
    <Box w="75%" marginRight={"auto"} mt="20px" paddingLeft={"45px"}>
      <Box className={style.upper}>
        <Box>
          <BiCode fontSize={"20px"} color="grey"/>
          <Text>Code</Text>
        </Box>
        <Box>
          <VscIssues color="grey"/>
          <Text borderBottomStyle={"solid"} borderBottomWidth={"2px"} width={"fit-content"} borderBottomColor={"orange.400"}>Issues </Text>
        </Box>
        <Box>
          <FaCodeBranch color="grey"/>
          <Text>Pull requests</Text>
        </Box>
        <Box>
          <GoCommentDiscussion color="grey"/>
          <Text>Discussions</Text>
        </Box>
        <Box>
          <AiOutlinePlayCircle color="grey"/>
          <Text>Actions</Text>
        </Box>
        <Box>
          <BsFileRuled color="grey"/>
          <Text>Projects</Text>
        </Box>
        <Box>
          <BsBook color="grey"/>
          <Text>Wiki</Text>
        </Box>
        <Box>
          <MdSecurity color="grey"/>
          <Text>Security</Text>
        </Box>
        <Box>
          <MdInsights color="grey"/>
          <Text>Insights</Text>
        </Box>
      </Box>
    </Box>
    <Box mt="20px">
      <Divider borderColor={"gray.700"}/>
    </Box>
    <Box className={style.mid}>
      <Text>👋Want to contribute to chakra-ui/chakra-ui?</Text>
      <Text>If you have a bug or an idea, read the <span style={{color:"#4299e1"}}>contributing guidelines</span> before opening an issue.</Text>
    </Box>


    <Box className={style.inputs}>
      <Box className={style.inp}>
      <InputGroup size='sm' border="1px solid rgb(90, 90, 90)" w="98%" borderRadius={"6px"}>
          <InputLeftAddon children={"filter"} bg={"gray.800"} color="white" border={"none"}/>
          <Input type='search' color={"white"} placeholder='is:issue is:open ' border={"none"}/>
        </InputGroup>
      </Box>
      <Box className={style.lable}>
        <Box>
          <CiShoppingTag color='rgb(112, 112, 112)'/>
          <Text color='rgb(112, 112, 112)'>Labels</Text>
        </Box>
        <Box>
          <GoMilestone color='rgb(112, 112, 112)'/>
          <Text color='rgb(112, 112, 112)'>Milestones</Text>
        </Box>
      </Box>
      <Box className={style.inplast}>
        <Button bg="rgb(35,134,54)" color="white" _hover={{backgroundColor:"green"}} padding={"5px 15px"} marginLeft={"10px"}>New issue</Button>
      </Box>
    </Box>
    <Box className={style.mainheads}>
      <Box className={style.head}>
        <Box className={style.headleft}>
          <Box>
            <VscIssues fontSize={"25px"} color='white'/>
            <Text fontWeight={"400"} color='white'>{len.length} Open</Text>
          </Box>
          <Box>
            <AiOutlineCheck color='rgb(112, 112, 112)'/>
            <Text color='rgb(112, 112, 112)'>3,180 Closed</Text>
          </Box>
        </Box>
        <Box className={style.headtext}>
          <Text>Author <IoMdArrowDropdown color='rgb(112, 112, 112)'/></Text>
          <Text>Label <IoMdArrowDropdown color='rgb(112, 112, 112)'/></Text>
          <Text>Projects <IoMdArrowDropdown color='rgb(112, 112, 112)'/></Text>
          <Text>Milestones <IoMdArrowDropdown color='rgb(112, 112, 112)'/></Text>
          <Text>Assignee <IoMdArrowDropdown color='rgb(112, 112, 112)'/></Text>
          <Text>Sort <IoMdArrowDropdown color='rgb(112, 112, 112)'/></Text>
        </Box>
      </Box>
      {data?.map((el)=>(
        <ItemsPages key={el.id} el={el}/>
      ))}
      
    </Box>
    <Box className={style.pages}>
      <Paginate page={page} total={Math.ceil(len.length/7)} setPage={setPage}/>
    </Box>
    </>
  )
}

export default SingleIssuePage