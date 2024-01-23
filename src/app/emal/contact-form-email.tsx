import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type contactFormEmailProps = {
     message: string;
     senderEmail : string;
}
function contactFormEmail({message , senderEmail} : contactFormEmailProps) {
  return (
        <Html>
            <Head/>
            <Preview>New message from you portfolio text</Preview>
            <Tailwind>
                <Body>
                    <Container>
                        <Section>
                            <Heading>you recived the following from the contact from </Heading>
                        </Section>
                        <Text>{message}</Text>
                        <Hr></Hr>
                        <Text>The sender Email is: {senderEmail}</Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default contactFormEmail