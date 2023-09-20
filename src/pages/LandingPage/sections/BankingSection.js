import React from 'react'
import Section from '../../../Components/Section'
import { Box ,Stack} from '@mui/material';
import CustomTypography, { fontColorStanderd, fontStanderd } from '../../../Components/CustomTypography';


function BankingSection() {
  return (
    <Section bgcolor={"secondary"}>
      <Box  
          component={"img"}
          src="./assets/banking-phone.svg"
          sx={{ position: "absolute", zIndex: 1}}
        />

        <Stack 
          width="352px"
          sx={{position:"absolute",zIndex:2,top:"313px",left:"225px"}}
          gap={"13px"}
          >
          <CustomTypography 
          fontSize={"40px"}
          fontType={fontStanderd.Highlight}
          color={fontColorStanderd.normalTextW}
          textTransform={"captilize"}
          lineHeight={"22px"}
          >Banking</CustomTypography>
          <CustomTypography 
          fontSize={"16px"}
          textTransform={"captilize"} 
          lineHeight={"22px"}
          fontType={fontStanderd.normalText}
          color={fontColorStanderd.normalTextB}
          >
         Receive your paycheck, tax returns, and other direct deposits up to two days early using your Cash App routing 
        and account number.
          </CustomTypography>
        </Stack>
        <Box
          component={"img"}
          src="./assets/banking-hole.svg"
          sx={{ position: "absolute", zIndex: 1 ,left:0,top:0 }}
        />
        <Box
          component={"img"}
          src="./assets/banking-hole-bottom.svg"
          sx={{ position: "absolute", zIndex: 1 ,right:"258px",bottom:0 }}
        />
        <Box
          component={"img"}
          src="./assets/banking-column.svg"
          sx={{ position: "absolute", zIndex: 1 ,top:"105px",left:"74px" }}
        />
        <Box
          component={"img"}
          src="./assets/banking-stairs-2.svg"
          sx={{ position: "absolute", zIndex: 1 ,bottom:"113px",left:"57px" }}
        />
        <Box
          component={"img"}
          src="./assets/banking-track-1.svg"
          sx={{ position: "absolute", zIndex: 0 ,top:"165px",left:"354px" }}
        />
        <Box
          component={"img"}
          src="./assets/banking-ramp-2.svg"
          sx={{ position: "absolute", zIndex: 0 ,bottom:"44px",left:"157px" }}
        />
        <Box
          component={"img"}
          src="./assets/banking-tube.svg"
          sx={{ position: "absolute", zIndex: 0 ,bottom:0,left:"489px" }}
        />
        <Box
          component={"img"}
          src="./assets/banking-cubes.svg"
          sx={{ position: "absolute", zIndex: 0 ,bottom:"83.89px",right:"273px" }}
        />
        <Box
          component={"img"}
          src="./assets/banking-stairs-1.svg"
          sx={{ position: "absolute", zIndex: 0 ,bottom:"220px",right:"123px" }}
        />
        <Box
          component={"img"}
          src="./assets/banking-track-2.svg"
          sx={{ position: "absolute", zIndex: 0 ,top:"16px",right:"177px" }}
        />
        <Box
          component={"img"}
          src="./assets/banking-monster.svg"
          sx={{ position: "absolute", zIndex: 0 ,bottom:"63px",right:"68px" }}
        />
        <Box
          component={"img"}
          src="./assets/banking-track-2.svg"
          sx={{ position: "absolute", zIndex: 0 ,top:"16px",right:"177px" }}
        />
    </Section>
  )
}

export default BankingSection;