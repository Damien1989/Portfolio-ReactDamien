import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const ContactCard = (props: {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
    url: string;
}) => {
return (
    <Link href={props.url}>
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
    </Link>
)
};


type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};

const SideProject = (props: SideProjectProps) => { 
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-3 rounded">
        
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