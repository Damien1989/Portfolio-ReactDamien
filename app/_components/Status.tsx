import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import  Link  from "next/link";
import { LucideIcon, Store, PlaneTakeoff, ArrowUpRight, UtensilsCrossed } from "lucide-react";



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
            url={project.url}
            />
        ))}
    </div>

    </Card>
            </div>
    <div className="flex-[2] w-full flex flex-col gap-4">
    <Card className="p-4 flex-1 flex-col gap-2">
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
    <Card className="p-4 flex-1 flex flex-col gap-3">
    <p className="text-lg text-muted-foreground">Contactez-moi</p>

    <ContactCard 
    url="https://www.linkedin.com/in/damien-diaz-2453781b2/"
    name="Damien DIAZ" 
    image="/images/damien2.jpeg"
    mediumImage="data:image/png;base64,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" 
    description="+ de 500 contacts" 
    />
         </Card>
</div>
</Section>
    );
};

const ContactCard = (props: {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
    url: string;
}) => {
return (
    <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors flex items-center gap-4">
<div className="relative">
    <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain"/>
    <img src={props.mediumImage} alt={props.name} className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain" />
</div>
<div className="mr-auto">
    <div className="flex items-center gap-2">
    <p className="text-lg font-semibold">{props.name}</p>
    </div>

<p className="text-xs text-muted-foreground">{props.description}</p>
</div>
<ArrowUpRight className="group-hover: translate-x-2 mr-4 group-hover:translate-y-2 transition-transform"size={16}></ArrowUpRight>
    </Card>
)
};

const SIDE_PROJECTS = [
    {
    Logo: UtensilsCrossed,
    title:"Com D Roy",
    description: "Mangez les meilleurs plats du bassin d'Arcachon",
    url:"https://github.com/Damien1989/com-d-roy-restaurant-symfony",
    },
    {
    Logo: Store,
    title:"DamShop",
    description: "Venez découvrir des produits rétros en tout genre !",
    url:"https://github.com/Damien1989/symfony-alternance",
    },
    {
    Logo: PlaneTakeoff,
    title:"Flight",
    description: "Consultez vos horaires de vol.",
    url:"https://damien1989.github.io/flight/",
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
        <Link href={props.url} 
        className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
        
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
    role: "Développeur Back-end en alternance",
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
    freelance?: boolean;
};

const Work = (props: WorkProps) => { 
    return (
        <Link
        href={props.url} 
        className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded">
            
        <img 
            src={props.image} 
            alt={props.title} 
            className="w-10 h-10 object-contain rounded-md"
            />
           
            <div className="mr-auto">
            <p className="text-lg font-semibold">{props.title}</p>
            <p className="text-sm text-muted-foreground">{props.role}</p>
            </div>
            <div className="ml-auto">
            <p className="text-sm text-muted-foreground">{props.date}</p>
            </div>
            </Link>
    );
};
