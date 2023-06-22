import * as React from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
} from "@react-email/components";
import { Badge } from "@mailingui/components";
import { getCssText } from "@mailingui/utils";

const DotBadges = () => (
  <Html>
    <Head>
      <style
        id="stitches"
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: getCssText(),
        }}
      />
    </Head>
    <Preview>Medium Badges</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={{ textAlign: "center" as const }}>
          <Badge dot>Badge</Badge>
          <span style={{ padding: 10 }} />
          <Badge variant="primary" dot>
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge variant="secondary" dot>
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge variant="success" dot>
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge variant="warning" dot>
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge variant="danger" dot>
            Badge
          </Badge>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default DotBadges;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  padding: "40px 0",
};