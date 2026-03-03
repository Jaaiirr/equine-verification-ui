import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// Component
import HeaderSection from "../../../shared/components/section/marketPlace/HeaderSection";
import MainSection from "../../../shared/components/section/marketPlace/MainSection";


const MarketPlacePage = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const search = params.get('search');
    const status = params.get('status');

    useEffect(() => {
        console.log(search, status);
        
    }, [search, status]);

    return (
        <>
        {/* <HeaderSection /> */}
        <MainSection />
        </>        
    );
};
export default MarketPlacePage;