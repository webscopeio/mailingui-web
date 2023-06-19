import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Preview,
  Img,
  Row,
} from "@react-email/components";
import React from "react";
import {
  Text,
  SocialIcon,
  type SocialIconType,
  MinimalButton,
} from "@mailingui/components";

export const MinimalResetPassword = () => {
  const baseUrl = `${
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""
  }/static/minimal-theme`;

  return (
    <Html>
      <Head />
      <Preview>Minimal - Reset your password</Preview>
      <Body style={main}>
        <Container style={container} width={600}>
          <Row style={{ marginBottom: "16px" }}>
            <Column width={46} height={34}>
              <Img src={`${baseUrl}/star.png`} alt="Star" />
            </Column>
            <Column>
              <Text
                style={{
                  fontSize: "30px",
                  lineHeight: "36px",
                }}
              >
                MINIMAL
              </Text>
            </Column>
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <Text style={{ fontSize: "48px", lineHeight: "52px" }}>
              Password Reset
            </Text>
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Text>Dear Jacob,</Text>
            <Text>
              We recently received a request to reset your password on our
              platform. To reset your password, please click on the button or
              link below:
            </Text>
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <MinimalButton href="https://google.com">
              Reset password
            </MinimalButton>
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Text>
              If you did not initiate this request or believe it was made in
              error, please disregard this email and take the necessary steps to
              secure your account. If you have any concerns or need further
              assistance, please contact our customer support team.
            </Text>
            <Text>
              Best regards,
              <br />
              Minimal Team
            </Text>
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            {(
              [
                "linkedin",
                "skype",
                "medium",
                "twitter",
                "facebook",
              ] as SocialIconType[]
            ).map((type, i) => (
              <div key={i}>
                <Column width={24} style={{ paddingRight: "20px" }}>
                  <SocialIcon
                    type={type}
                    style={{ margin: 0 }}
                    size={24}
                    href="https://google.com"
                  />
                </Column>
              </div>
            ))}
            <Column width={520 - 196}></Column>
          </Row>
          <Row>
            <Text>
              © Viola Company Inc., 2972 Westheimer Rd. Santa Ana, Illinois
              85486
            </Text>
            <Text>
              <a
                href="#unsubscribe"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  display: "inline-block",
                }}
              >
                Unsubscribe
              </a>{" "}
              ·{" "}
              <a
                href="#tos"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  display: "inline-block",
                }}
              >
                Terms of Use
              </a>{" "}
              ·{" "}
              <a
                href="#pp"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  display: "inline-block",
                }}
              >
                Privacy Policy
              </a>
            </Text>
          </Row>
        </Container>
      </Body>
    </Html>
  );
};

export default MinimalResetPassword;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "60px 0 122px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "40px",
  width: "600px",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};
