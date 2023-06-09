import * as React from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
} from "@react-email/components";
import { Badge, ThemeProvider } from "@mailingui/components";
import { defaultTheme } from "@mailingui/themes";

const PillBadges = () => (
  <Html>
    <Head />
    <Preview>Pill Badges</Preview>
    <Body style={main}>
      <ThemeProvider theme={defaultTheme}>
        <Container style={container}>
          <Section style={{ textAlign: "center" as const }}>
            <Badge variant="default" size="md" pill>
              Badge
            </Badge>
            <span style={{ padding: 10 }} />
            <Badge variant="primary" size="md" pill>
              Badge
            </Badge>
            <span style={{ padding: 10 }} />
            <Badge variant="secondary" size="md" pill>
              Badge
            </Badge>
            <span style={{ padding: 10 }} />
            <Badge variant="danger" size="md" pill>
              Badge
            </Badge>
            <span style={{ padding: 10 }} />
            <Badge variant="success" size="md" pill>
              Badge
            </Badge>
            <span style={{ padding: 10 }} />
            <Badge variant="warning" size="md" pill>
              Badge
            </Badge>
          </Section>
        </Container>
      </ThemeProvider>
    </Body>
  </Html>
);

export default PillBadges;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  padding: "40px 0",
};
