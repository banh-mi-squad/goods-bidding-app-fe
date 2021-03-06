import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import {
  Container,
  Main,
  Title,
  TitleLink,
  Description,
  Card,
  CartTitle,
  CardDescription,
  Grid,
  Code,
  Footer,
  FooterLink,
  Logo,
} from '@/components/HomeComponent';

const Home: NextPage = function () {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>
          Welcome to <TitleLink href="https://nextjs.org">Next.js!</TitleLink>
        </Title>

        <Description>
          Get started by editing <Code>pages/index.tsx</Code>
        </Description>

        <Grid>
          <Card href="https://nextjs.org/docs">
            <CartTitle>Documentation &rarr;</CartTitle>
            <CardDescription>
              Find in-depth information about Next.js features and API.
            </CardDescription>
          </Card>

          <Card href="https://nextjs.org/learn">
            <CartTitle>Learn &rarr;</CartTitle>
            <CardDescription>
              Learn about Next.js in an interactive course with quizzes!
            </CardDescription>
          </Card>

          <Card href="https://github.com/vercel/next.js/tree/master/examples">
            <CartTitle>Examples &rarr;</CartTitle>
            <CardDescription>
              Discover and deploy boilerplate example Next.js projects.
            </CardDescription>
          </Card>

          <Card href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <CartTitle>Deploy &rarr;</CartTitle>
            <CardDescription>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </CardDescription>
          </Card>
        </Grid>
      </Main>

      <Footer>
        <FooterLink
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Logo>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </Logo>
        </FooterLink>
      </Footer>
    </Container>
  );
};

export default Home;
