import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Section } from "./Section";
import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Header = () => {
   return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-center justify-content-between">
            <div className="flex items-center">
                <h1 className="text-lg font-bold text-primary flex-grow-1">Mon portfolio</h1>
                <ul className="list-unstyled m-0 flex items-center gap-2 ml-auto">
                    <Link href="https://github.com/Damien1989"
                    className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                    >
                        <GithubIcon size={16} className="text-foreground" />
                    </Link>
                    
                    <Link 
                    href="https://www.linkedin.com/in/damien-diaz-2453781b2/"
                    className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                    >
                        <LinkedinIcon size={16} className="text-foreground" />
                    </Link>
                </ul>
                </div>
            </Section>
        </header>
    );
};
