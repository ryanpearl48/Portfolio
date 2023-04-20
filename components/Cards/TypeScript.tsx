import { Card, Text, Link, Grid } from "@nextui-org/react";
import React from "react";

const TypescriptCard = () => {
  return (
    <Card css={{ p: "$6", mw: "400px" }}>
      <Card.Header>
        <img
          alt="Typescript logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
          width="34px"
          height="34px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              Typescript
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>typescriptlang.org</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>
          Typescript is a type based language, building on the fundamentals of Javascript.
        </Text>
      </Card.Body>
      <Card.Footer>
        <Link
          color="primary"
          target="_blank"
          href="https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html"
        >
          Typescript Documentation
        </Link>
      </Card.Footer>
    </Card>
  )
}

export default TypescriptCard;
