import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Section } from "./Section";
import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";


export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">Damien.com
                </h1>
                <div className="flex-1" />
                <ul className="flex items-center gap-2">
                    <Link 
                    href="https://github.com/Damien1989"
                    className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                    >
                        <GithubIcon size={19} className="text-foreground" />
                    </Link>
                    <Link 
                    href="https://www.linkedin.com/in/damien-diaz-2453781b2/"
                    className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                    >
                        <LinkedinIcon size={19} className="text-foreground" />
                    </Link>

                </ul>
            </Section>
        </header>
    );
};