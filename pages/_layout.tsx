import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/Header';


export interface LayoutProps {
    children: React.ReactNode;
}

/**
 *@description - This is the root layout component. This Layout contains the TopBar and Footer components.
 *@returns - The main Layout
 */

export default function Layout({ children }: LayoutProps) {
    return (
      <>
        <Header />
        <main className='pt-[64px] md:pt-[72px] lg:pt-[78px]'>{children}</main>
        <Footer />
      </>
    )
  }

