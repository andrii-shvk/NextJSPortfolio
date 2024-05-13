import { useTranslations } from "next-intl";

const Footer = () => {
    const t = useTranslations('Footer');

    return (
        <footer className="pt-10 pb-[50px] bg-footer-light dark:bg-footer-dark">
            <div className="container mx-auto px-5 flex flex-col gap-2.5">
                <span className="text-text-dark">&copy; 2024 - {t('name')}</span>
                <p className="text-[#B0B0B0]">{t('description')}</p>
            </div>
        </footer>
    );
} 

export {Footer};