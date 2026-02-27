import HeroSection from "../../../shared/components/section/HeroSection";
import StatsSection from "../../../shared/components/section/StatsSection";
import HowItWorkSection from "../../../shared/components/section/HowItWorkSection";
import FeactureHorsesSection from "../../../shared/components/section/FeaturedHorsesSection";
import TestimonialsSection from "../../../shared/components/section/TestimonialsSection";
import CtaSection from "../../../shared/components/section/CtaSection";


const HomePage = () => {
    return (
        <>
            <HeroSection />
            <StatsSection />
            <HowItWorkSection />
            <FeactureHorsesSection />            
            <TestimonialsSection />           
            <CtaSection />           
        </>        
    );
};
export default HomePage;