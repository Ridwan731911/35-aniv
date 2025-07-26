import Home from "@/app/Home/page";
import Ucapan from "@/app/Ucapan/page";
import Ucapan2 from "@/app/Ucapan2/page";
import Ucapan3 from "@/app/Ucapan3/page";
import MomentPage from "./Moment/page";
import BackgroundMusic from "@/app/backgroundMusic";

export default function LandingPage() {
  return (
    <>
      <BackgroundMusic />
      <Home />
      <Ucapan />
      <Ucapan2 />
      <Ucapan3 />
      <MomentPage />
    </>
  );
}
