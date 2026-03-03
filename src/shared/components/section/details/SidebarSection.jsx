import { CiMedicalCase } from "react-icons/ci";
import { MdAccountTree, MdOutlineFileDownload, MdCheck, MdOutlineVerified, MdHistory } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";


const SidebarSection = () => {
    return (
        <aside className="space-y-6 lg:col-span-4">
            <section className="bg-white border border-[#dbdfe6] p-6 rounded-xl shadow-sm text-center">
                <h3 className="font-bold mb-5 text-sm text-text-secondary tracking-widest uppercase">Puntuación de Confianza</h3>
                <div className="mb-4 mx-auto relative size-32">
                    <svg className="size-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle className="text-slate-100" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeWidth="8"></circle>

                        <circle className="text-btn-primary" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeDasharray="287.7" strokeDashoffset="14"  strokeWidth="8"></circle>
                    </svg>
                    <div className="absolute flex flex-col items-center inset-0 justify-center">
                        <span className="font-bold text-3xl text-btn-primary">98%</span>
                        <span className="font-bold text-[10px] text-text-secondary">Excelente</span>
                    </div>
                </div>
                <p className="text-sm text-text-secondary">este caballo cumple con todos los requisitos de verificación clínica y documental.</p>
            </section>            
        </aside>
    );
};
export default SidebarSection;
