import { Card, Text, Link, Grid } from "@nextui-org/react";
import React from "react";

const TailwindCard = () => {
  return (
    <Card css={{ p: "$6", mw: "400px" }}>
      <Card.Header>
        <img
          alt="Tailwind Logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
          width="34px"
          height="34px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              Tailwind CSS
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>v2.tailwindcss.com</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>
          Tailwind CSS is a popular CSS framework that provides sleek and easy to understand alternatives.
          When using Tailwind make sure to install the VSCode extension for intellisense!
        </Text>
      </Card.Body>
      <Card.Footer>
        <Link
          icon
          color="primary"
          target="_blank"
          href="https://v2.tailwindcss.com/docs"
        >
          Tailwind Documentation
        </Link>
      </Card.Footer>
    </Card>
  )
}

export default TailwindCard;
