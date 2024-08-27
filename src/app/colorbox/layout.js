export default function ColorBoxLayout({children, left, right}) {
    const isActive = true;
    return (
        <section>
            {children}
            {isActive ? right : left}
        </section>
    )
}