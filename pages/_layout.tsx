import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


export interface LayoutProps {
    children: React.ReactNode;
}

/**
 *@description - This is the root layout component. This Layout contains the TopBar and Footer components.
 *@returns - The main Layout
 */

const Layout = ({ children }: LayoutProps) => {

    const { t } = useTranslation('common');

    return (
        <div className=''>
            <Header />
            <div className='pt-[64px] md:pt-[72px] lg:pt-[78px]'>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}


export default Layout;
