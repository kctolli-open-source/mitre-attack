export default function StepsSection({children}: { children: JSX.Element }) {
    const title = "Steps";

    return (
        <section key={title}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}
