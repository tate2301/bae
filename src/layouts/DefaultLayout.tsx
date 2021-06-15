import * as React from "react";
import { Container } from "@chakra-ui/react"
import Head from "next/head";

const DefaultLayout = (props : DefaultLayoutProps) => (
  <div id={"default_layout"}>
    <Container maxW="container.xl">
      <Head>
        {props.title && <title>{props.title} - BAE </title>}
      </Head>
      <main>
        {props.children}
      </main>
    </Container>
  </div>

)

type DefaultLayoutProps = {
  children?: React.ReactNode;
  title?: string
}

export default DefaultLayout
