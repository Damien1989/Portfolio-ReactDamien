import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Code, LucideIcon, Rss, StickyNote } from "lucide-react";
import { url } from "inspector";

export const Status = () => {
    return (
    <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full">
    <Card className="flex-[2] w-full p-4 flex-1 flex-col gap-2">
    <p className="text-lg text-muted-foreground">Side, fun project</p>
    <div className="flex gap-4">
        {SIDE_PROJECTS.map((project, index)) => (
            <SideProject
            key={index}
            Logo={project.Logo}
            title={project.title}
            description={project.description}
            url="/"
            />
        ))}
    </div>

    </Card>
            </div>
    <div className="flex-[2] w-full flex flex-col gap-4">
    <Card className="p-4 flex-1">Mon Travail</Card>
    <Card className="p-4 flex-1"> Contactez-moi </Card>
</div>
</Section>
    );
};

const SIDE_PROJECTS = [
    {
    Logo: Code,
    title:"Codeline",
    description: "Super cool",
    
    },
    {
    Logo: StickyNote,
    title:string,
    description: string,
    
    },
    {
    Logo: Rss,
    title:string,
    description: string,
    },
]

type SideProjectProps = {
    Logo: LucideIcon;
    title:string;
    description: string;
    url: string
};


const SideProject = (props: { Logo: LucideIcon, title: string, description:string }) => {
    return (
        <div>
            <span className="bg-accent text-accent-foreground p-4 rounded-sm">
                <props.Logo />
            </span>
            <div>
            
            <p className="text-lg font-semibold">{props.title}</p>
            <p className="text-sm text-muted-foreground">{props.description}</p>

            </div>
        </div>
    )
};