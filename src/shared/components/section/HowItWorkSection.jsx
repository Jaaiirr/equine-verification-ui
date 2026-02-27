import { LuStethoscope } from "react-icons/lu";
import { MdOutlineQueryStats } from "react-icons/md";
import { SiMicrogenetics } from "react-icons/si";


const HowItWorkSection = () => {
    return (
        <section id="comoFunciona" className="bg-white py-20 px-5 md:px-8">
            <div className="mb-16 text-center">
                <h2 className="font-bold mb-4 text-3xl text-forest md:text-4xl">Cómo funciona la verificación</h2>
                <p className="max-w-2xl mx-auto text-text-secondary">
                    Garantizamos la máxima transparencia en cada transacción mediante auditorías exhaustivas realizadas por expertos independientes.
                </p>
            </div>
            {/* cards */}
            <section className="grid gap-8 md:grid-cols-3">
                {/* Uditoria */}
                <article className="group p-8 duration-300 border border-slate-100 bg-slate-50 rounded-2xl transition-all hover:bg-white hover:shadow-xl hover:translate-y-2">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-btn-primary/10 text-btn-primary flex items-center justify-center mb-6 group-hover:bg-btn-primary group-hover:text-white transition-colors">
                        <span><LuStethoscope className="text-3xl" /></span>
                    </div>
                    <h3 className="text-text-primary text-xl font-bold mb-3 md:text-2xl">Auditoría Clínica</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4 md:text-lg">Revisión veterinaría completa que incluye rayos X de 22 proyecciones, analíticas de sangre y chequeo cardiorespiratorio.</p>                    
                </article>
                {/* Pruebas */}
                <article className="group p-8 duration-300 border border-slate-100 bg-slate-50 rounded-2xl transition-all hover:bg-white hover:shadow-xl hover:translate-y-2">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-btn-primary/10 text-btn-primary flex items-center justify-center mb-6 group-hover:bg-btn-primary group-hover:text-white transition-colors">
                        <span><MdOutlineQueryStats className="text-3xl" /></span>
                    </div>
                    <h3 className="text-text-primary text-xl font-bold mb-3 md:text-2xl">Pruebas de Rendimiento</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4 md:text-lg">Evaluación técnica en pista por jinetes profesionales para certificar aptitudes deportivas, carácter y nivel de doma.</p>                    
                </article>
                {/* Linaje */}
                <article className="group p-8 duration-300 border border-slate-100 bg-slate-50 rounded-2xl transition-all hover:bg-white hover:shadow-xl hover:translate-y-2">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-btn-primary/10 text-btn-primary flex items-center justify-center mb-6 group-hover:bg-btn-primary group-hover:text-white transition-colors">
                        <span><SiMicrogenetics className="text-3xl" /></span>
                    </div>
                    <h3 className="text-text-primary text-xl font-bold mb-3 md:text-2xl">Verificación de Linaje</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4 md:text-lg">Confirmación oficial de genealogía mediante ADN y revisión de registros históricos en competicions oficiales.</p>                    
                </article>
            </section>
        </section>
    );
};
export default HowItWorkSection;