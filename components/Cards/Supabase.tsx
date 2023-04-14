import { Card, Text, Link, Grid } from "@nextui-org/react";

const SupabaseCard = () => {
  return (
    <Card css={{ p: "$6", mw: "400px" }}>
      <Card.Header>
        <img
          alt="Supabase Logo"
          src="https://cf.appdrag.com/dashboard-openvm-clo-b2d42c/uploads/supabase-TAiY.png"
          width="34px"
          height="34px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              Supabase
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>typescriptlang.org</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>
          Supabase is a growing Firebase alternative based on SQL. I specifically use the authentication for Next.
        </Text>
      </Card.Body>
      <Card.Footer>
        <Link
          color="primary"
          target="_blank"
          href="https://supabase.com/docs"
        >
          Supabase Documentation
        </Link>
      </Card.Footer>
    </Card>
  )
}

export default SupabaseCard;
