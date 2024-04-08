import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { SymfonyLogo } from "./icons/SymfonyLogo";

const Code = ({className,... props}: ComponentPropsWithoutRef<"span">) => {
    return (
    <span className={cn("bg-accent/30 font-mono border border-accent p-1 text-primary rounded-sm",className)}
    {...props} 
    />
  );
};

export const Hero = () => {
    return <Section className="flex max-md:flex-col items-start">
<div className="flex-[2]">
    <h2 className="font-caption font-bold text-5xl text-primary">Damien Diaz</h2>
    <h3 className="text-3xl font-caption">Sofware Developer and creator</h3>
    <p className="text-base">
        J'aime travailler sur {" "}
        <Code className="inline-flex items-center gap-1">
           <SymfonyLogo size={1} className="inline" /> Symfony
        </Code>
    </p>
</div>
<div className="flex-1">
<img src="/images/damien2.jpeg"
    className="w-full h-auto max-w-xs"
    alt="photo Damien"
    ></img>
</div>
    </Section>
}