import * as React from "react";

import {
  Body,
  Container,
  Html,
  Preview,
  Head,
  Row,
  Column,
} from "@react-email/components";

import { body, container, row } from "../shared/styles";
import { Header } from "../shared/Header";
import { MinimalButton } from "../shared/MinimalButton";
import { Footer } from "../shared/Footer";

import { H1, P, HR, Link } from "@mailingui/components";

export default function SubscriptionConfirmation({
  preview = "Confirm your email",
  newsletterName = "The Minimalist",
  subscriberName = "Jacob",
}: Record<string, string>) {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Header />
          <Row style={row}>
            <Column>
              <HR />
              <H1>{preview}</H1>
              <P>Dear {subscriberName},</P>
              <P>
                Recently you requested to join our newsletter:{" "}
                <b>{newsletterName}</b>. We require that you verify your email
                address before we can add you to our list. Please click on the
                link below to confirm your email address:
              </P>
              <MinimalButton href="#">Confirm Subscription</MinimalButton>
              <P>
                If <b>you did not initiate this request</b>, believe it was made
                in error, or have any privacy concerns, please reach out to:{" "}
                <Link href="#">support@minimal.com</Link>
              </P>
              <P muted>
                Best regards,
                <br /> Minimal Team
              </P>
            </Column>
          </Row>
          <Footer />
        </Container>
      </Body>
    </Html>
  );
}
