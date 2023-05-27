import { Link, Card, Table, Collapse } from '@nextui-org/react'

const Portfolio = () => {
  return (
    <div className='flex max-w-100vw justify-center m-auto pt-2'>
      <Collapse.Group splitted>
        <Collapse title='AI Cookbook' expanded shadow>
        <Card className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4'>
          <Table
          aria-label="Example table with static content"
          css={{
          height: "auto",
          minWidth: "100%",
          }}
          >
          <Table.Header>
           <Table.Column>NAME</Table.Column>
           <Table.Column>ROLE</Table.Column>
         </Table.Header>
          <Table.Body>
            <Table.Row key="1">
              <Table.Cell>Ryan Pearl</Table.Cell>
              <Table.Cell>Developer</Table.Cell>
            </Table.Row>
            <Table.Row key="2">
              <Table.Cell>Cody DiBella</Table.Cell>
              <Table.Cell>Developer</Table.Cell>
            </Table.Row>
            <Table.Row key="3">
              <Table.Cell>Jay Yuan</Table.Cell>
              <Table.Cell>Developer</Table.Cell>
            </Table.Row>
            <Table.Row key="4">
              <Table.Cell>Ben Villafranca</Table.Cell>
              <Table.Cell>Developer</Table.Cell>
            </Table.Row>
           </Table.Body>
          </Table>
        <Card.Body>Myself and three teammates Ben Villafranca, Cody DiBella, and Jay Yuan created AI Cookbook
          Which leverages Next.js, Supabase, MaterialUI, and Spoonacular/OpenAI API's.
          The main idea of the website is that you can take what ingredients you have around the house
          and you can input them into the search bar which will then have them added to your pantry.
          Once they're there they can get an AI generated recipe to utilize those previously inputed ingredients.
        </Card.Body>
        <Link block underline isExternal href="https://aicookbook.app">
        AI CookBook
        </Link>
      </Card>
    </Collapse>

      <Collapse title='Vanity Vans' expanded shadow>
      <Card className='relative flex justify-between items-center max-w-[500px] w-full m-auto  mt-1 pt-4'>
        <Table
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        <Table.Column>NAME</Table.Column>
        <Table.Column>ROLE</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Ryan Pearl</Table.Cell>
          <Table.Cell>Developer</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Cody DiBella</Table.Cell>
          <Table.Cell>Developer</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Christopher Kang</Table.Cell>
          <Table.Cell>Developer</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>Ronnie Angeles</Table.Cell>
          <Table.Cell>Developer</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
        <Card.Body>This particular project is a mock e-commerce website. It utilizes Javascript, React, Sequelize, and MUI.
          We also incorportated Stripe as a payment method option in this project. The majority of my responsibility was within authentication
          and admin pages and rights.
        </Card.Body>
        <Link block underline isExternal href="https://vanityvans.onrender.com/">
        Vanity Vans
        </Link>
      </Card>
      </Collapse>
      </Collapse.Group>
    </div>
  )
};

export default Portfolio;
