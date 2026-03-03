import { MdOutlineVerifiedUser, MdMilitaryTech } from "react-icons/md";
import { GiFamilyTree } from "react-icons/gi";

const HeroSection = () => {
    

    return (
        <section className="border-b border-[#dbdfe6] flex flex-wrap gap-4 py-2">
            <div className="bg-emerald-100 font-bold px-3 py-1.5 text-emerald-700 text-sm rounded-lg">
                <span className="flex gap-1.5 items-center text-lg"><MdOutlineVerifiedUser />Salud Verificada</span>
            </div>
            <div className="bg-sky-100 font-bold px-3 py-1.5 text-sky-700 text-sm rounded-lg">
                <span className="flex gap-1.5 items-center text-lg"><GiFamilyTree />Pedigrí Certificado</span>
            </div>
            <div className="bg-purple-100 font-bold px-3 py-1.5 text-purple-700 text-sm rounded-lg">
                <span className="flex gap-1.5 items-center text-lg"><MdMilitaryTech />Rendimiento Validado</span>
            </div>            
        </section>
    );
};
export default HeroSection;


