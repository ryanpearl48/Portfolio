import { Card, Text, Link, Grid } from "@nextui-org/react";
import React from "react";

const NextCard = () => {
  return (
    <Card css={{ p: "$6", mw: "400px" }}>
      <Card.Header>
        <img
          alt="Next logo"
          src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
          width="34px"
          height="34px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              Next
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>nextjs.org</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>
          Next.js is the "React Framwork for the Web", it makes full-stack applications sleek and easy to make!
        </Text>
      </Card.Body>
      <Card.Footer>
        <Link
          color="primary"
          target="_blank"
          href="https://nextjs.org/docs/getting-started"
        >
          Next JS Documentation
        </Link>
      </Card.Footer>
    </Card>
  )
}

export default NextCard;
