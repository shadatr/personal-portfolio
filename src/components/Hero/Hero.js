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
        TypeScript, React, CSS, Tailwind CSS, PostgreSQL, Supabase, and Next.js.
        With 1 year of industry experience, I have developed a comprehensive
        understanding of web development and a proven track record of delivering
        high-quality projects.
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com ")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;