import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// Component
import HeaderSection from "../../../shared/components/section/marketPlace/HeaderSection";


const MarketPlacePage = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const search = params.get('search');
    const status = params.get('status');

    useEffect(() => {
        console.log(search, status);
        
    }, [search, status]);

    return (
        <HeaderSection />
    );
};

export default MarketPlacePage;