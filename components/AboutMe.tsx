 import React from 'react';
import { Card } from '@nextui-org/react';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <Card className=' max-w-xl flex '>
      <Card.Header>Ryan Pearl - Software Engineer</Card.Header>
      <Card.Divider></Card.Divider>
      <Card.Body>
        <span><b>Thank you for visiting my Portfolio Website!</b></span>
        <span>I'm a Junior Developer and graduate of the Fullstack Academy Software Engineering Bootcamp.</span>
        <span>I'm also a Veteran of the United States Air Force! I separated as an E-5 (Staff Sergeant) and spent 6 years as an Avionics Technician.</span>
        <span>I hope you enjoy the content provided and if you have any questions feel free to reach out!</span>
        <Card.Divider></Card.Divider>
      <Link href="https://linkedin.com/in/ryanpearl48" className=' cursor-pointer'>LinkedIn</Link>
      <Link href="https://github.com/ryanpearl48" className=' cursor-pointer'>GitHub</Link>
      </Card.Body>
    </Card>
  )
};

export default AboutMe;
