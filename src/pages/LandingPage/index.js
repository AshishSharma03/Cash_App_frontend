import { Box} from "@mui/material";
import HeroSection from "./sections/HeroSection";
import PaymentsSection from "./sections/PaymentSection";
import BankingSection from "./sections/BankingSection";
import CashCardNBoostSection from "./sections/CashCardNBoostSection";
import Investing from "./sections/Investing";
import Navbar from "../../Components/Navbar";




function LandingPage() {
  return (
    <Box component={"div"} sx={{position:"relative"}}>
        <Navbar/> 
        <HeroSection/>
        <PaymentsSection/>
        <BankingSection/>
        <CashCardNBoostSection zIndex={1}/>
         <Investing/>
    </Box>
  );
}

export default LandingPage;
