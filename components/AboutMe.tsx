import React from 'react';
import { Card } from '@nextui-org/react';
import { Image } from '@nextui-org/react';

const AboutMe = () => {
  return (
    <Card className=' max-w-xl flex '>
      <Card.Header>Ryan Pearl - Software Engineer</Card.Header>
      <Card.Divider></Card.Divider>
      <Card.Body>
        When I was 19 I joined the United States Air Force, and after around 6 years of service I decided to move on from
        being an Avionics Tech. and take a risk to attempt to be a Software Engineer! I've recently graduated from the Fullstack Academy coding
        bootcamp. Which, just like it sounds focuses on both front-end and back-end web development. It was a 20-week course and I met some really
        amazing people and created some projects I care for greatly. If you visit the "Projects" tab under "Settings", you can check those out.
      </Card.Body>
      <Card.Divider></Card.Divider>
      <Card.Footer>
      <Image
      width={50}
      height={50}
      src='../../public/github.png'
      alt="Default Image"
      objectFit="cover"
    />
      </Card.Footer>
    </Card>
  )
}

export default AboutMe
