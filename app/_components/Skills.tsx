import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactLogo } from "./icons/ReactLogo";
import { Code } from "./Code";
import { OpenAILogo } from "./icons/OpenAILogo";
import { SymfonyLogo } from "./icons/SymfonyLogo";


export const Skills = () => {
    return <Section className="flex flex-col items-start gap-4">
        <Badge variant={"outline"}>Skills</Badge>
    <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        J'aime travailler sur...
        </h2>
        
              <div className="flex flex-col gap-2 flex-1">
                <ReactLogo
                 size={42} 
                 className="animate-spin" 
                 style={{ animationDuration : "10s",
                  }} />
              <h3 className="text-2xl font-semibold tracking-tight">React</h3>
              <p className="text-sm text-muted-foreground">En cours d'apprentissage de React mais aussi de <Code>Next.js</Code>
              </p>
          
          </div>

          <div className="flex max-md:flex-col gap-4">
              <div className="flex flex-col gap-2">
                <OpenAILogo
                 size={42} 
                 />
              <h3 className="text-2xl font-semibold tracking-tight">Open AI</h3>
              <p className="text-sm text-muted-foreground">J'aime travailler sur <Code>Chat GPT</Code> afin d'intégrer l'AI dans des projets et je consulte les ressources sur <Code>Futurepedia</Code>
              </p>
          </div>
          </div>

          <div className="flex max-md:flex-col gap-4">
              <div className="flex flex-col gap-2">
                <SymfonyLogo
                 size={42} 
                  />
              <h3 className="text-2xl font-semibold tracking-tight">Symfony</h3>
              <p className="text-sm text-muted-foreground">J'ai déjà réalisé des projet e-commerce avec Symfony version <Code>5.4</Code>
              </p>
          </div>
          </div>
    </Section>;
}