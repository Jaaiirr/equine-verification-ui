import { useNavigate } from "react-router-dom";
// icons
import { MdGroups } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";


const CtaSection = () => {
    const navigate = useNavigate();

    const goToContact = () => {
        navigate('/details')
    };

    return (
        <section id="verificacion" className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <article className="bg-forest flex flex-col gap-10 items-center justify-between p-8 overflow-hidden relative rounded-3xl md:p-16 md:flex-row">
                    <div className="max-w-xl relative z-10">
                        <h2 className="font-bold leading-tight mb-4 text-3xl text-white md:text-4xl">¿Listo para vender con máxima confianza?</h2>
                        <p className="mb-8 text-white/80 md:text-lg">
                            Únete a la élite del mercado ecuestre. Solicita tu auditoría de verificación hoy mismo y destaca sobre el resto.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={goToContact} 
                                className="bg-btn-primary cursor-pointer font-bold py-4 px-8 text-white transition-all shadow-xl shadow-btn-primary/40 rounded-xl hover:bg-sky-700"
                            >
                                Empezar Verificación
                            </button>
                            <button className="bg-white/10 border border-white/20 cursor-pointer font-bold py-4 px-8 text-white transition-all shadow-xl rounded-xl hover:bg-white/20">Saber más</button>
                        </div>
                    </div>
                    {/* card Testimonials */}
                <section className="relative w-full z-10 md:w-auto">
                    {/* card 1 */}
                    <article className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl">
                        {/* registros verified */}
                        <div className="flex gap-3 items-center mb-4">
                            <figure className="bg-green-500 flex items-center justify-center text-white w-10 h-10 overflow-hidden rounded-full">
                                <span><FaCircleCheck /></span>
                            </figure>
                            <span className="font-medium text-white">+1.200 Caballos Verificados</span>
                        </div>
                        <div className="flex gap-3 items-center">
                            <figure className="bg-sky-500 flex items-center justify-center text-white w-10 h-10 overflow-hidden rounded-full">
                                <span><MdGroups /></span>
                            </figure>
                            <span className="font-medium text-white">98% Satisfación de Usuarios</span>
                        </div>
                        <div className="absolute bg-btn-primary/20 -bottom-24 blur-3xl w-96 h-96 -right-2 rounded-full"></div> 
                    </article>                    
                </section>
                </article>                
            </div>
        </section>
    );
};
export default CtaSection;