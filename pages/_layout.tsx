import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';


export interface LayoutProps {
    children: React.ReactNode;
}

/**
 *@description - This is the root layout component. This Layout contains the TopBar and Footer components.
 *@returns - The main Layout
 */

const Layout = ({ children }: LayoutProps) => {

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


export default Layout;
