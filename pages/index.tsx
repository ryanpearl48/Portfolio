import { Grid, Card, Text } from "@nextui-org/react";
import Link from "next/link";
export const metadata = {
  title: 'Home Page'
}

const Home = () => {

  const MockItem = ({ text }: any) => {
    return (
      <Card css={{ h: "$20", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ m: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };
  return (
    <Grid.Container gap={1} className="w-100% justify-center align-middle">
      <Grid xl={5} className="min-w-lg">
        <Link href='/login'>
          <MockItem text="Login" />
        </Link>
      </Grid>
      <Grid xl={5} className="min-w-lg">
        <Link href='about-me'>
          <MockItem text="About Ryan" />
        </Link>
      </Grid>
      <Grid xl={5} className="min-w-lg">
        <Link href='/portfolio'>
          <MockItem text="Portfolio" />
        </Link>
      </Grid>
      <Grid xl={5} className="max-w-xs">
        <Link href="/cards">
          <MockItem text="Technology Used" />
        </Link>
      </Grid>
    </Grid.Container>
  );
}
export default Home
