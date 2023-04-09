import React from "react";
import Header from "./Sectionholder/Header";
import Footer from "./Sectionholder/footer";
import Presentation from "./Sectionholder/Presentation";
import Master from "./Sectionholder/master";
import Faq from "./Sectionholder/faq";
import TeamMember from "./Sectionholder/teamMember";
import KeyPoint from "./Sectionholder/keyPoint";
import OnlineDigital from "./Sectionholder/onlineDigital";
import Testiomonal from "./Sectionholder/testiomonal";
import Market from "./Sectionholder/market";
import Learning from "./Sectionholder/learning";
import Alumni from "./Sectionholder/Alumni";
import Herosec from "./Sectionholder/hero_sec";
import Methlogy from "./Sectionholder/methlogy";
function Home() {
  return (
    <div>
      <Header />
      <Herosec />

      <Market />
      <KeyPoint />
      <OnlineDigital />
      <Master />

      <Alumni />
      <Methlogy />

      <Presentation />

      <TeamMember />
      <Learning />
      <Testiomonal />
      <Faq />

      <Footer />
    </div>
  );
}

export default Home;
