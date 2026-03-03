import HeroSection from "../../../shared/components/section/details/HeroSection";
import TrustBadgesSection from "../../../shared/components/section/details/TrustBadgesSection";
import TabsSection from "../../../shared/components/section/details/TabsSection";
import SidebarSection from "../../../shared/components/section/details/SidebarSection";

const DetailsPage = () => {
    

    return (
        <section className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full md:px-10">
            <section className="gap-8 grid grid-cols-1 lg:grid-cols-12">
                <div className="space-y-8 lg:col-span-8">
                    {/* Media Hero */}
                    <HeroSection />
                    <TrustBadgesSection />
                    <TabsSection />                    
                </div>
                <SidebarSection />
            </section >
        </section >
    );
};
export default DetailsPage;