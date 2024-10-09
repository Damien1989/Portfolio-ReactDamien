import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";


const Code = ({className,... props}: ComponentPropsWithoutRef<"span">) => {
    return (
    <span className={cn("bg-accent/30 font-mono border hover:bg-accent/50 transition-colors border-accent p-1 text-primary rounded-sm",className)}
    {...props} 
    />
  );
};

export const Hero = () => {
    return <Section className="flex max-md:flex-row items-start gap-4 justify-between">
<div className="flex-1">
    <h2 className="font-caption font-bold text-5xl text-primary">Damien Diaz</h2>
    <h3 className="text-3xl font-caption">Développeur web junior</h3>
    <p className="text-base">
        J'aime créer du contenu. Je suis des cours en ligne sur {" "}
    
        <Code className="inline-flex items-center gap-1">
        Udemy
        </Code>
        {" "} afin <br /> de m'améliorer. Je vis à {" "}
        <Code className="inline-flex items-center gap-1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ensign_of_France.svg/langfr-1280px-Ensign_of_France.svg.png" style={{width: 16, height: "auto"}} alt="France drapeau" />Lille
        </Code>.
        Voici mon cv : {" "}
        <a
  href="/images/CV-alternance-DamienDiaz-juin24.pdf"
  className="text-blue-500 hover:underline"
  download
>
  Télécharger mon CV
</a>
       
    </p>
</div>
<div className="flex-1 flex justify-center items-center">
<img src="/images/damien2.jpeg" 
     className="rounded-full max-w-xs md:max-w-md mt-4"
    alt="photo Damien"
    />
</div>
    </Section>
}