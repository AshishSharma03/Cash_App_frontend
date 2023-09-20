import { Box} from "@mui/material";
import HeroSection from "./sections/HeroSection";
import PaymentsSection from "./sections/PaymentSection";
import BankingSection from "./sections/BankingSection";
import CashCardNBoostSection from "./sections/CashCardNBoostSection";
import Investing from "./sections/Investing";
import Navbar from "../../Components/Navbar";
import { useEffect, useState } from "react";




function LandingPage() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
   
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };


    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(scrollPosition)
  return (
    <Box component={"div"} sx={{position:"relative",background:"#000"}}>
        <Navbar position={(scrollPosition > 100)? "Static":"fixed"}/> 
        <HeroSection/>
        <PaymentsSection/>
        <BankingSection/>
        <CashCardNBoostSection zIndex={1}/>
         <Investing/>
    </Box>
  );
}

export default LandingPage;
