import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface GithubAccessTokenEmailProps {
  email?: string;
  message: string;
}

export const GithubAccessTokenEmail = ({
  email,
  message,
}: GithubAccessTokenEmailProps) => (
  <Html>
    <Head />
    <Preview>Someone liked your profile and sent you a message</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img src={`/user.png`} width="32" height="32" alt="UserImage" />

        <Text style={title}>
          <strong>@{email}</strong>, a personal access was created on your
          account.
        </Text>

        <Section style={section}>
          <Text style={text}>
            Hey <strong>{email}</strong>!
          </Text>
          <Text style={text}>{message}</Text>
        </Section>

        <Text style={footer}>Zaid,Inc | India.</Text>
      </Container>
    </Body>
  </Html>
);

export default GithubAccessTokenEmail;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const title = {
  fontSize: "24px",
  lineHeight: 1.25,
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center" as const,
};

const text = {
  margin: "0 0 10px 0",
  textAlign: "left" as const,
};

const button = {
  fontSize: "14px",
  backgroundColor: "#28a745",
  color: "#fff",
  lineHeight: 1.5,
  borderRadius: "0.5em",
  padding: "12px 24px",
};

const links = {
  textAlign: "center" as const,
};

const link = {
  color: "#0366d6",
  fontSize: "12px",
};

const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "60px",
};
