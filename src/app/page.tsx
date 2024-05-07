"use client";

export default function Home() {
    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark");
    };

    return (
        <main className="flex justify-center">
            Hello, world!
            <button
                style={{ width: "120px", height: "30px" }}
                className="bg-bg-light dark:bg-bg-dark mt-20 text-text-dark dark:text-text-light rounded-3xl"
                onClick={toggleTheme}
            >
                Contacts
            </button>
        </main>
    );
}
