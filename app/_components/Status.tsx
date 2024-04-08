import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import  Link  from "next/link";
import { Home, Code, LucideIcon, Rss, StickyNote, Bus, Store, PlaneTakeoff } from "lucide-react";
import { url } from "inspector";

export const Status = () => {
    return (
    <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full">
    <Card className="flex-[2] w-full p-4 flex-1 flex-col gap-2">
    <p className="text-lg text-muted-foreground">Side, fun projects.</p>
    <div className="flex flex-col gap-4">
        {SIDE_PROJECTS.map((project, index) => (
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
    <Card className="p-4 flex-1">
    <p className="text-lg text-muted-foreground">Work</p>
        <div className="flex flex-col gap-4">
        {WORKS.map((work, index) => (
            <Work
            key={index}
            image={work.image}
            title={work.title}
            role={work.role}
            date={work.date}
            url={work.url}
            />
        ))}

        </div>


    </Card>
    <Card className="p-4 flex-1"> Contactez-moi </Card>
</div>
</Section>
    );
};

const SIDE_PROJECTS = [
    {
    Logo: Bus,
    title:"Fullbus",
    description: "Réservez votre bus à travers la France.",
    },
    {
    Logo: Store,
    title:"DamShop",
    description: "Venez découvrir des produits rétros en tout genre !",
    },
    {
    Logo: PlaneTakeoff,
    title:"Flight",
    description: "Mon projet super sympa",
    },
]

type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};


const SideProject = (props: SideProjectProps) => { 
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
        
            <span className="bg-accent text-accent-foreground p-4 rounded-sm">
                <props.Logo size={32} />
            </span>
            <div>
            <p className="text-lg font-semibold">{props.title}</p>
            <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
            </Link>
    );
};


const WORKS = [
    {
    image: "https://media.licdn.com/dms/image/D4E0BAQGw4lcJvD8UHw/company-logo_100_100/0/1700308136673/hanapiz_logo?e=1720656000&v=beta&t=xtbN4uEEIefCCO_GyrSsQEQ9jDfWy9Ho5Y1RmIq7sTw",
    title: "Hanapiz",
    role: "Dévelopeur Web Front-end stagiaire",
    date: "Janvier- Mars 2024",
    url: "https://hanapiz.com",
    },
    {
    image: "https://media.licdn.com/dms/image/C4E0BAQGaOkmC-Y-i8g/company-logo_100_100/0/1630625409845/web_design_marchand_logo?e=1720656000&v=beta&t=EWM-zTI4B768XuBB7Vzd14RRgKqzbJzD1r5N0F6EaQQ",
    title: "Web Design Marchand",
    role: "Développeur back-end en alternance",
    date: "Février - juillet 2023",
    url: "https://web-design-marchand.fr",
    },
];

type WorkProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
};

const Work = (props: WorkProps) => { 
    return (
        <Link href={props.url} 
        className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
        >
            
                <img 
                src={props.image} 
                alt={props.title} 
                className="w-10 h-10 object-contain rounded-md"
                 />
           
            <div>
            <p className="text-lg font-semibold">{props.title}</p>
            <p className="text-sm text-muted-foreground">{props.role}</p>
            </div>
            <div className="ml-auto">
            <p className="text-sm text-muted-foreground">{props.date}</p>
            </div>
            </Link>
        
    );
};
