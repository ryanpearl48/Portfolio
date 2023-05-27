 import React from 'react';
import { Card } from '@nextui-org/react';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <div className='flex pt-5 w-1/2'>
    <Card>
      <Card.Header><b>Ryan Pearl - Software Engineer</b></Card.Header>
      <Card.Divider></Card.Divider>
      <Card.Body className='flex justify-center'>
        <span>I'm a Junior Developer and graduate of the Fullstack Academy Software Engineering Bootcamp.</span>
        <span>I'm also a Veteran of the United States Air Force! I separated as an E-5 (Staff Sergeant) and spent 6 years as an Avionics Technician.</span>
        <span>I hope you enjoy the content provided and if you have any questions feel free to reach out!</span>
        <Card.Divider></Card.Divider>
        <div className='flex justify-center space-x-4'>
          <Link href="https://linkedin.com/in/ryanpearl48" className='  cursor-pointer text-blue-600 hover:text-white'>LinkedIn</Link>
          <Link href="https://github.com/ryanpearl48" className=' cursor-pointer text-blue-600 hover:text-white'>GitHub</Link>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
};

export default AboutMe;
