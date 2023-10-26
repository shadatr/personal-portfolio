import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Shada Daab<tr></tr> Welcome To <br />
        My Personal Portfolio!
      </SectionTitle>
      <SectionText>
        I am an experienced developer with a strong background in JavaScript,
        TypeScript, React.js, Node.js, CSS, Tailwind CSS, PostgreSQL, Supabase, and Next.js
       , skilled in designing and implementing and passion for creating dynamic online experience
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com ")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;