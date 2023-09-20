import { Box, Stack } from "@mui/material";
import Section from "../../../Components/Section";
import CustomTypography, {
  fontColorStanderd,
  fontStanderd,
} from "../../../Components/CustomTypography";


function PaymentsSection() {
  return (
      <Section>
      <Box
          component={"img"}
          src="./assets/vector2.svg"
          sx={{ position:"absolute", zIndex: 1,bottom:"21px", width: "100%" }}
        />
         <Box
          component={"img"}
          src="./assets/payments-phone-1.svg"
          sx={{ position: "absolute", zIndex: 1 ,bottom:"202px"}}
        />

          <Stack 
          width="352px"
          sx={{position:"absolute",zIndex:2,top:"234px",left:"237px"}}
          gap={"13px"}
          >
          <CustomTypography 
          fontSize={"40px"}
          fontType={fontStanderd.Highlight}
          color={fontColorStanderd.Highlight}
          textTransform={"captilize"}
          lineHeight={"22px"}
          >Payments</CustomTypography>
          <CustomTypography 
          fontSize={"16px"}
          textTransform={"captilize"} 
          lineHeight={"22px"}
          fontType={fontStanderd.normalText}
          color={fontColorStanderd.normalTextB}
          >
          Send and receive money with anyone, donate  to an important cause, or tip professionals. 
            Just enter a $cashtag, phone number, or 
            scan their  QR code to pay.
          </CustomTypography>
        </Stack>
         <Box
          component={"img"}
          src="./assets/payments-column.svg"
          sx={{ position: "absolute", zIndex: 1 ,bottom:"47px",right:"0px" }}
        />
         <Box
          component={"img"}
          src="./assets/payments-columnRight.svg"
          sx={{ position: "absolute", zIndex: 1 ,left:0,bottom:0 }}
        />
         <Box
          component={"img"}
          src="./assets/payments-columnRight.svg"
          sx={{ position: "absolute", zIndex: 1 ,left:0,bottom:0 }}
        />
        <Box
          component={"img"}
          src="./assets/payments-pillar-medium.svg"
          sx={{ position: "absolute", zIndex: 2 ,left:"150px",bottom:"25.7px" }}
        />
        <Box
          component={"img"}
          src="./assets/payments-pillar-small.svg"
          sx={{ position: "absolute", zIndex: 1 ,left:"259px",bottom:"58px" }}
        />

        <Box
          component={"img"}
          src="./assets/payments-pillar-medium.svg"
          sx={{ position: "absolute", zIndex: 2,left:"511px",bottom:"37.5px" }}
        />
        <Box
          component={"img"}
          src="./assets/payments-column2.svg"
          sx={{ position: "absolute", zIndex: 2 ,right:"261px",bottom:0 }}
        />
        <Box
          component={"img"}
          src="./assets/payments-pillar-medium.svg"
          sx={{ position: "absolute", zIndex: 1 ,right:"219px",bottom:"169px" }}
        />
        <Box
          component={"img"}
          src="./assets/payments-pillar-medium3.svg"
          sx={{ position: "absolute", zIndex: 2 ,right:"536px",bottom:0 }}
        />
        <Box
          component={"img"}
          src="./assets/payments-pillar-large.svg"
          sx={{ position: "absolute", zIndex: 1 ,right:"518px",bottom:"84.69px" }}
        />  
      </Section>
     
  );
}

export default PaymentsSection;
