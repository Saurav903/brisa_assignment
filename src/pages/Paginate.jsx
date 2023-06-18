
import React from 'react'
import {Box, Button} from "@chakra-ui/react"

const Paginate = ({page,total,setPage}) => {
  
  return (
    <Box display={"flex"} gap={"20px"}>
      <Button isDisabled={page===1} onClick={()=>setPage(page-1)} bg="none" border={"none"} color={"white"} _hover={{backgroundColor:"none",border:"3px solid #3699d4"}}>Previous</Button>
      <Button bg="none" border={"2px solid #3699d4"} color={"white"} _hover={{backgroundColor:"none"}}>{page}</Button>
      <Button isDisabled={page===total} onClick={()=>setPage(page+1)} bg="none" border={"none"} color={"white"} _hover={{backgroundColor:"none",border:"3px solid #3699d4"}}>Next</Button>
    </Box>
  )
}

export default Paginate