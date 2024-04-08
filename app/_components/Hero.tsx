import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { UdemyLogo } from "./icons/UdemyLogo";
import { ReactLogo } from "./icons/ReactLogo";

const Code = ({className,... props}: ComponentPropsWithoutRef<"span">) => {
    return (
    <span className={cn("bg-accent/30 font-mono border hover:bg-accent/50 transition-colors border-accent p-1 text-primary rounded-sm",className)}
    {...props} 
    />
  );
};

export const Hero = () => {
    return <Section className="flex max-md:flex-col items-start gap-4">
<div className="flex-[2] flex flex-col gap-2">
    <h2 className="font-caption font-bold text-5xl text-primary">Damien Diaz</h2>
    <h3 className="text-3xl font-caption">Sofware Developer and creator</h3>
    <p className="text-base">
        J'aime travailler sur {" "}
    
        <Code className="inline-flex items-center gap-1">
           <UdemyLogo size={16} className="inline" /> Udemy
        </Code>
        . Je vis à {" "}
        <Code className="inline-flex items-center gap-1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg" style={{width: 16, height: "auto"}} alt="France drapeau" />Lille
        </Code>
    </p>
</div>
<div className="flex-1 max-md:m-auto ml-auto">
<img src="/images/damien2.jpeg"
    className="w-full h-auto max-w-xs max-md:w-56"
    alt="photo Damien"
    ></img>
</div>
    </Section>
}