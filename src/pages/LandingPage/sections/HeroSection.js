import { Box, IconButton, Stack } from "@mui/material";
import Section from "../../../Components/Section";
import CustomTypography, {
  fontStanderd,
} from "../../../Components/CustomTypography";
import {
  AiFillApple,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { ImTwitch } from "react-icons/im";
import { BsArrowDown } from "react-icons/bs";
import CustomButton from "../../../Components/CustomButton";  

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

function HeroSection() {
  return (
      <Section bgcolor={"primary"}>
        <Stack
          direction={"column"}
          width={"100%"}
          justifyContent="center"
          sx={{ position: "relative" }}
          textAlign={"center"}
          gap="170px"
        >
          <CustomTypography
            fontType={fontStanderd.Highlight}
            fontSize={"194px"}
            zIndex={1}
            lineHeight={"0px"}
          >
            Cash
          </CustomTypography>
          <CustomTypography
            fontType={fontStanderd.Highlight}
            fontSize={"194px"}
            zIndex={2}
            lineHeight={"0px"}
          >
            App
          </CustomTypography>
        </Stack>
        <Box
          component={"img"}
          src="./assets/intro-phone1.svg"
          sx={{ position: "absolute", zIndex: 1 }}
        />
        <Box
          component={"img"}
          src="./assets/intro-phone1.svg"
          sx={{ position: "absolute", zIndex: 1 }}
        />
        <Box
          component={"img"}
          src="./assets/Vector.svg"
          sx={{ position: "absolute", zIndex: 0, width: "100%" }}
        />
        <Box
          component={"img"}
          src="./assets/intro-stairs.svg"
          sx={{ position: "absolute", zIndex: 0, right: "144px", top: "50px" }}
        />
        <Box
          component={"img"}
          src="./assets/intro-cube2.svg"
          sx={{
            position: "absolute",
            zIndex: 0,
            left: "228px",
            top: "50.24px",
          }}
        />
        <Box
          component={"img"}
          src="./assets/intro-cubes.svg"
          sx={{
            position: "absolute",
            zIndex: 0,
            left: "208px",
            bottom: "66.28px",
          }}
        />
        <Box
          component={"img"}
          src="./assets/intro-pillar1.svg"
          sx={{
            position: "absolute",
            zIndex: 0,
            right: "258px",
            bottom: "0px",
          }}
        />

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
          <IconButton
            color="primary"
            sx={{ position: "absolute" }}
            size="large"
          >
            <BsArrowDown />
          </IconButton>

          <CustomButton
            title={"App store"}
            bgColor={"#000"}
            color={"#fff"}
            icon={
              <AiFillApple style={{ color: "#00D54B", fontSize: "25px" }} />
            }
          />
          <CustomButton
            title={"Google play"}
            bgColor={"#000"}
            color={"#fff"}
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
              <IconButton key={i} sx={{ color: "#fff " }}>
                {a.icon}
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Section>
  );
}

export default HeroSection;
