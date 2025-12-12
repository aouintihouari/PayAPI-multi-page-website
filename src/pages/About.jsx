import Feature from "../components/about/Feature";

import teamMembersDesktop from "../assets/about/desktop/image-team-members.jpg";
import teamMembersTablet from "../assets/about/tablet/image-team-members.jpg";
import teamMembersMobile from "../assets/about/mobile/image-team-members.jpg";
import StatsAndCulture from "../components/about/StatsAndCulture";

const About = () => {
  return (
    <section>
      <Feature />
      <picture>
        <source media="(min-width: 1440px)" srcSet={teamMembersDesktop} />
        <source media="(min-width: 768px)" srcSet={teamMembersTablet} />
        <source media="(min-width: 320px)" srcSet={teamMembersMobile} />
        <img
          className="relative z-30 -mt-50 mb-50 w-full md:-mt-100 lg:mt-100 xl:-mt-20"
          src={teamMembersDesktop}
        />
      </picture>
      <StatsAndCulture />
    </section>
  );
};

export default About;
