import React from 'react'
import Section from '../../../Components/Section'
import { Box,Stack } from '@mui/material'
import CustomTypography, { fontColorStanderd, fontStanderd } from '../../../Components/CustomTypography'


function CashCardNBoostSection() {
  return (
    <Section  bgcolor={"primary"} >
      <Box  
          component={"img"}
          src="./assets/boost-phone.svg"
          sx={{ position: "absolute", zIndex: 2}} 
        />
      <Box  
          component={"img"}
          src="./assets/boost-stairs-1.svg"
          sx={{ position: "absolute", zIndex: 1,bottom:0,right:0}}
        />
      <Box  
          component={"img"}
          src="./assets/boost-stairs-2.svg"
          sx={{ position: "absolute", zIndex: 1,bottom:0,left:0}}
        />
      <Box  
          component={"img"}
          src="./assets/boost-burger.svg"
          sx={{ position: "absolute", zIndex: 1,bottom:"268px",right:"414px"}}
        />
      <Box  
          component={"img"}
          src="./assets/boost-card.svg"
          sx={{ position: "absolute", zIndex: 1,bottom:"403px",right:"310px"}}
        />
      <Box  
          component={"img"}
          src="./assets/boost-card.svg"
          sx={{ position: "absolute", zIndex: 1,bottom:"403px",right:"310px"}}
        />
      <Box  
          component={"img"}
          src="./assets/boost-hand.svg"
          sx={{ position: "absolute", zIndex: 1,bottom:"564px",right:"203px"}}
        />
      <Box  
          component={"img"}
          src="./assets/boost-coffee.svg"
          sx={{ position: "absolute", zIndex: 1,bottom:"115px",right:"308px"}}
        />
      <Box  
          component={"img"}
          src="./assets/boost-shoe.svg"
          sx={{ position: "absolute", zIndex: 1,bottom:"267px",right:"20px"}}
        />
      <Stack 
          width="352px"
          sx={{position:"absolute",zIndex:2,top:"313px",left:"225px"}}
          gap={"13px"}
          >
          <CustomTypography 
          fontSize={"40px"}
          fontType={fontStanderd.Highlight}
          color={fontColorStanderd.Highlight}
          textTransform={"captilize"}
          lineHeight={"40px"}
          >Cash Card
          & Boost</CustomTypography>
          <CustomTypography 
          fontSize={"16px"}
          textTransform={"captilize"} 
          lineHeight={"22px"}
          fontType={fontStanderd.normalText}
          color={fontColorStanderd.normalTextW}
          >
         The Cash Card is a free, customizable debit card that lets you pay online and in stores. It’s the only way to get Boosts—instant discounts that work at places where you want to spend.
          </CustomTypography>
        </Stack>
    </Section>    
  )
}

export default CashCardNBoostSection