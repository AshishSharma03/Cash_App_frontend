import React from "react";
import Section from "../../../Components/Section";
import CustomTypography, {
  fontColorStanderd,
  fontStanderd,
} from "../../../Components/CustomTypography";
import { Box, IconButton, Stack } from "@mui/material";
import { FaGooglePlay } from "react-icons/fa";
import { ImTwitch } from "react-icons/im";
import CustomButton from "../../../Components/CustomButton";  
import {
  AiFillApple,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
const SocialIcons = [
  {
    id: "0",
    icon: <ImTwitch />,
  },
  {
    id: "0",
    icon: <AiOutlineTwitter />,
  },
  {
    id: "0",
    icon: <AiOutlineInstagram />,
  },
];

function Investing() {
  return (
    <Section bgcolor={"secondary"}>
      <CustomTypography
        fontType={fontStanderd.Highlight}
        fontSize={"40px"}
        textTransform={"captilize"}
        position={"absolute"}
        top={"131px"}
      >
        Investing
      </CustomTypography>
      <Box
        component={"img"}
        src="./assets/Group.svg"
        sx={{
          position: "absolute",
          zIndex: 0,
          width: "100%",
          bottom: 0,
          background: "#fff",
        }}
      />
       <Box
        component={"img"}
        src="./assets/Vector3.svg"
        sx={{
          position: "absolute",
          zIndex: 0,
          width: "100%",
          bottom: 0,
       
        }}
      />
      <Stack
        direction={"row"}
        alignItems={"center"}
        gap="78px"
        
        sx={{ position: "absolute", zIndex: 1,top:"254px",padding:"0px 60px"}}
      >
        <Stack direction={"row"} gap={"37px"} >
          <Stack  gap={"8px"} paddingTop={"50px"}>
            <CustomTypography
              fontSize={"40px"}
              fontType={fontStanderd.Highlight}
              color={fontColorStanderd.normalTextB}
              textTransform={"captilize"}
              lineHeight={"40px"}
            >
              Banking
            </CustomTypography>
            <CustomTypography
              fontSize={"16px"}
              textTransform={"captilize"}
              lineHeight={"22px"}
              fontType={fontStanderd.normalText}
              color={fontColorStanderd.normalTextB}
            >
              Receive your paycheck, tax returns, and other direct deposits up
              to two days early using your Cash App routing and account number.
            </CustomTypography>
          </Stack>

          <Box component={"img"} src="./assets/investing-stocks.svg" />
        </Stack>
        <Stack direction={"row"}gap={"37px"} >
          <Box component={"img"} src="./assets/investing-bitcoin.svg" />
          <Stack gap={"8px"} paddingTop={"50px"} >
            <CustomTypography
              fontSize={"40px"}
              fontType={fontStanderd.Highlight}
              color={fontColorStanderd.normalTextB}
              textTransform={"captilize"}
              lineHeight={"40px"}
            >
              Banking
            </CustomTypography>
            <CustomTypography
              fontSize={"16px"}
              textTransform={"captilize"}
              lineHeight={"22px"}
              fontType={fontStanderd.normalText}
              color={fontColorStanderd.normalTextB}
            >
              Receive your paycheck, tax returns, and other direct deposits up
              to two days early using your Cash App routing and account number.
            </CustomTypography>
          </Stack>
        </Stack>
      </Stack>
      <Box
          sx={{
            position: "absolute",
            bottom: "17px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            gap: "20px",
            right: "63px",
            left: "60px",
            color: "#fff",
            alignItems: "center",
          }}
        >
         

          <CustomButton
            title={"App store"}
            bgColor={"#fff"}
            color = {"#000"}
            icon={
              <AiFillApple style={{ color: "#00D54B", fontSize: "25px" }} />
            }
          />
          <CustomButton
            title={"Google play"}
            bgColor={"#fff"}
            color={"#000"}
            icon={
              <FaGooglePlay style={{ color: "#00D54B", fontSize: "25px" }} />
            }
          />

          <Box sx={{ flex: 1 }} />

          <CustomTypography
            fontSize={"9px"}
            width={"363px"}
            fontWeight={"700"}
            lineHeight={"13px"}
            textTransform={"captilize"} 
            fontType={fontStanderd.normalText}
            color={fontColorStanderd.normalTextB}
          >
            Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
            See our BrokerCheck. Investing involves risk; you may lose money.
            Bitcoin trading offered by Cash App. Cash App Investing does not
            trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
            App facilitates banking services through Sutton Bank and Lincoln
            Savings Bank, Members FDIC.
          </CustomTypography>
          <Stack direction={"row"} gap={"20px"}>
            {SocialIcons.map((a,i) => (
              <IconButton key={i} sx={{ color: "#000 " }}>
                {a.icon}
              </IconButton>
            ))}
          </Stack>
        </Box>
    </Section>
  );
}

export default Investing;
