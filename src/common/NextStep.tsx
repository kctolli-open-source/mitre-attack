import { GrLinkNext } from "react-icons/gr";
export default function NextStep({link, text}: { link: string, text: string }) {
    return (
        <section key="Next Step" className="next-step">
            <a href={link}>Next Step: {text}</a>
            <GrLinkNext />
        </section>
    );
}
