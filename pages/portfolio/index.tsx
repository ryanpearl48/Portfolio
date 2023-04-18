import { Link } from '@nextui-org/react'

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio page for Ryan Pearl, showcasing multiple projects'
}

const Portfolio = () => {
  return (
    <div>
      <h1>Here's some links to my projects!</h1>

      <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4'>
        <h1>AI Cookbook</h1>
        <p>Myself and three teammates Ben Villafranca, Cody DiBella, and Jay Yuan created AI Cookbook
          Which utilizes Next.js, Supabase, MaterialUI, and Spoonacular/OpenAI API's.
          The main idea of the website is that you can take what ingredients you have around the house
          and you can input them into the search bar which will then have them added to your pantry.
          Once they're there they can get an AI generated recipe to utilize those previously inputed ingredients.
        </p>
        <Link block underline isExternal href="https://aicookbook.app">
        AI CookBook
        </Link>
      </div>

      <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4'>
        <h1>Vanity Vans</h1>
        <p>This particular project is a mock e-commerce website. It utilizes Javascript, React, Sequelize, and some MUI.
          We also incorportated stripe as a payment method option in this project. The majority of my responsibility was within authentication
          and admin pages and rights.
        </p>
        <Link block underline isExternal href="https://vanityvans.onrender.com/" className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4'>
        Vanity Vans
        </Link>
        <Link href='/' block underline className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4'>Return Home</Link>
      </div>


    </div>
  )
}

export default Portfolio;
