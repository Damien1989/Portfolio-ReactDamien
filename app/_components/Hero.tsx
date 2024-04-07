import React from 'react';
import { Section } from "./Section";

export const Hero = () => {
    return <Section className="flex max-lg:flex-col items-start">
<div className="flex-[2]">
    <h2>Damien Diaz</h2>
    <h3>Sofware Developer and creator</h3>
    <p>
        Lorem Ipsum
    </p>
</div>
<div className="flex-1">
<img src="/images/damien2.jpeg"
    className="w-full auto"
    alt="photo Damien"
    ></img>
</div>
    </Section>
}