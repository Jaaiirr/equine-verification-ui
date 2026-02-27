import { MdOutlinePets } from "react-icons/md";


const StatsSection = () => {
    return (
        <section className="bg-cream border-b border-slate-200 py-8">
            <div className="gap-8 grayscale flex flex-wrap justify-around items-center max-w-7xl px-4 opacity-60 transition-all hover:grayscale-0">
                <p className="flex font-bold gap-2 items-center text-forest text-xs tracking-widest uppercase"><span className="text-xl"><MdOutlinePets /></span>VetCertified</p>
                <p className="flex font-bold gap-2 items-center text-forest text-xs tracking-widest uppercase"><span className="text-xl"><MdOutlinePets /></span>EliteBreeder</p> <p className="flex font-bold gap-2 items-center text-forest text-xs tracking-widest uppercase"><span className="text-xl"><MdOutlinePets /></span>EquineMind</p>
                <p className="flex font-bold gap-2 items-center text-forest text-xs tracking-widest uppercase"><span className="text-xl"><MdOutlinePets /></span>GlobalHorse</p>
            </div>
        </section>
    );
};
export default StatsSection;