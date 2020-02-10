import React from "react";
import Meta from "../components/Meta";
import Nav from "../components/Nav/Nav";
import { FullScreenContainer, Card, Button } from '../components'

export default function Login() {
  return (
    <React.Fragment>
    <Meta/>
    <Nav/>
    <FullScreenContainer>
      <Card>
        <Button>
          Google
        </Button>
      </Card>
    </FullScreenContainer>
    </React.Fragment>
  );
}
