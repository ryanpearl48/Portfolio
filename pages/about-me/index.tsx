import AboutMe from "@/components/AboutMe";

export const metadata = {
  title: 'About Ryan Pearl',
  description: 'Some information about Ryan Pearl, the main developer in this project.'
};

const AboutMePage = () => {
  return (
    <div className="flex align-middle justify-center">
      <AboutMe />
    </div>
  )
};

export default AboutMePage;
