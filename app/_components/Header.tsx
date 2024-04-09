import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Section } from "./Section";
import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";


export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="d-flex align-items-center justify-content-between">
                <h1 className="text-lg font-bold text-primary flex-grow-1">Damien.com
                </h1>
                <ul className="list-unstyled m-0 flex items-center gap-2">
                <li className="ml-auto">
                    <Link 
                    href="https://github.com/Damien1989"
                    className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                    >
                        <GithubIcon size={16} className="text-foreground" />
                    </Link>
                    </li>
                    <Link 
                    href="https://www.linkedin.com/in/damien-diaz-2453781b2/"
                    className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                    >
                        <LinkedinIcon size={16} className="text-foreground" />
                    </Link>
                </ul>
            </Section>
        </header>
    );
};