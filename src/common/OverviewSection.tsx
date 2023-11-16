export default function OverviewSection({children}: { children: JSX.Element }) {
    const title = "Overview";

    return (
        <section key={title}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}
