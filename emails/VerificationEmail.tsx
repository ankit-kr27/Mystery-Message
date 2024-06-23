import {
    Html,
    Head,
    Font,
    Preview,
    Heading,
    Row,
    Section,
    Text,
    Button
} from '@react-email/components'

interface IVerificationEmailProps {
    username: string;
    otp: string;
}

export default function VerificationEmail({ username, otp }: IVerificationEmailProps) {
    return (
        <Html lang="en" dir='ltr'>
            <Head>
                <title>Verification Code</title>
                <Font
                    fontFamily='Roboto'
                    fallbackFontFamily='Verdana'
                    webFont={{
                        url: 'https://fonts.googleapis.com/css?family=Roboto:400,700',
                        format: 'woff2'
                    }}
                    fontWeight={400}
                    fontStyle='normal'
                />
            </Head>
            <Preview>Here&apos;s your verification code: {otp}</Preview>
            <Section>
                <Row>
                    <Heading as='h2'>Hello {username},</Heading>
                </Row>
                <Row>
                    <Text>
                        Thank you for registering. Please use the following verification code to complete your registeration:
                    </Text>
                </Row>
                <Row>
                    <Heading as='h3'>{otp}</Heading>
                </Row>
                <Row>
                    <Text>
                        If you did not request this code, please ignore this email.
                    </Text>
                </Row>
                {/* <Row>
                    <Button href='https://example.com/verify'>Verify</Button>
                </Row> */}
            </Section>
        </Html>
    )
}
