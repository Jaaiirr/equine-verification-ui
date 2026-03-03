import { CiMedicalCase } from "react-icons/ci";
import { MdAccountTree, MdOutlineFileDownload, MdCheck, MdOutlineVerified, MdHistory } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";


const TabsSection = () => {
    return (
        <section className="bg-white border border-[#dbdfe6] overflow-hidden rounded-xl shadow-sm">
            <div className="border-b border-[#dbdfe6] flex overflow-x-auto scrollbar-hide">
                <button className="border-b-2 border-btn-primary flex-1 font-bold px-6 py-4 text-sm text-btn-primary whistespace-nowrap">
                    <span className="flex items-center gap-1.5 text-lg"><CiMedicalCase />Historial Médico</span>
                </button>
                <button className="border-b-2 border-btn-primary flex-1 font-bold px-6 py-4 text-sm text-slate-500 transition-colors whistespace-nowrap hover:text-btn-primary">
                    <span className="flex items-center gap-1.5 text-lg"><MdAccountTree />Pedigrí Digital</span>
                </button>
            </div>
            <div className="p-6">
                <section className="space-y-8">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-lg">Cronología de salud</h3>
                        <button className="cursor-pointer flex font-bold gap-1 items-center text-btn-primary text-sm">
                            <span className="text-lg"><MdOutlineFileDownload /></span>Descargar PDF Completo
                        </button>
                    </div>
                    {/* TimeLine Item */}
                    <article className="border-l-2 border-slate-100 pl-8 pb-2 relative space-y-6">
                        {/* Event 1 */}
                        <article className="relative">
                            <div className="absolute bg-emerald-500 flex items-center justify-center -left-10.25 p-1 rounded-full right-4 ring-white size-5 text-white ">
                                <span className="font-bold text-[12px]"><MdCheck /></span>
                            </div>
                            <section className="bg-bg-light border border-slate-100 p-4 rounded-lg">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <p className="font-bold text-xs text-text-secondary uppercase">15 de marzo, 2026</p>
                                        <h4 className="font-bold text-base">Vacunación Anual Influenza & Tétanos</h4>
                                    </div>
                                    <div className="bg-white gap-1 flex items-center px-2 py-1 rounded shadow-sm">
                                        <span className="text-sm text-emerald-500"><MdOutlineVerified /></span>
                                        <span className="font-bold text-[10px]uppercase">dr. Alberto Ruiz</span>
                                    </div>
                                </div>
                                <p className="text-sm text-text-secondary">
                                    Aplicación de refuerzo anual sin complicaciones. El equino presenta estado fisico óptimo para competencia.
                                </p>
                            </section>
                        </article>
                        {/* Event 2 */}
                        <article className="relative">
                            <div className="absolute bg-btn-primary flex items-center justify-center -left-10.25 p-1 rounded-full right-4 ring-white size-5 text-white ">
                                <span className="font-bold text-[12px]"><FaInfoCircle /></span>
                            </div>
                            <section className="bg-bg-light border border-slate-100 p-4 rounded-lg">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <p className="font-bold text-xs text-text-secondary uppercase">5 de febrero, 2026</p>
                                        <h4 className="font-bold text-base">Tratamiento de Fisioterapia</h4>
                                    </div>
                                    <div className="bg-white gap-1 flex items-center px-2 py-1 rounded shadow-sm">
                                        <span className="text-sm text-btn-primary"><MdOutlineVerified /></span>
                                        <span className="font-bold text-[10px]uppercase">Centro Equino del sur</span>
                                    </div>
                                </div>
                                <p className="text-sm text-text-secondary">
                                    Sesión preventiva de recuperación muscular tras el Grand Prix de Sevilla. No se detectan anomalías de marcha.
                                </p>
                            </section>
                        </article>
                        {/* Event 3 */}
                        <article className="relative">
                            <div className="absolute bg-slate-500 flex items-center justify-center -left-10.25 p-1 rounded-full right-4 ring-white size-5 text-white ">
                                <span className="font-bold text-[12px]"><MdHistory /></span>
                            </div>
                            <section className="bg-bg-light border border-slate-100 p-4 rounded-lg">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <p className="font-bold text-xs text-text-secondary uppercase">10 de enero, 2026</p>
                                        <h4 className="font-bold text-base">Chequeo General de Compra-Venta</h4>
                                    </div>
                                    <div className="bg-white gap-1 flex items-center px-2 py-1 rounded shadow-sm">
                                        <span className="text-sm text-emerald-500"><MdOutlineVerified /></span>
                                        <span className="font-bold text-[10px]uppercase">dr. Marta Gómez</span>
                                    </div>
                                </div>
                                <p className="text-sm text-text-secondary">
                                   Examen clínico completo pre-listado. Incluye rayos X de extremidades posterioes. Resultados negativos a patologías.
                                </p>
                            </section>
                        </article>
                    </article>
                </section>
            </div>
        </section>
    );
};
export default TabsSection;