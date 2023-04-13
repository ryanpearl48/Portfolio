import { Link } from '@nextui-org/react'

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio page for Ryan Pearl, showcasing multiple projects'
}

const Portfolio = () => {
  return (
    <>
      <Link block underline isExternal href="https://aicookbook.app" className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4'>
        AI CookBook
      </Link>
      <Link block underline isExternal href="https://vanityvans.onrender.com/" className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4'>
        Vanity Vans
      </Link>
      <Link href='/' block underline className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4'>Return Home</Link>
    </>
  )
}

export default Portfolio;
