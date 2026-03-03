// icons
import { MdVerified, MdOutlineFavorite } from "react-icons/md";
import { ImQuotesRight } from "react-icons/im";


const TestimonialsSection = () => {
    return (
        <section id="testimonios" className="bg-cream border-t border-slate-100 py-20">
            <div className="max-w-7xl mx-auto px-4">
                <article className="mb-16 text-center">
                    <h2 className="font-bold mb-4 text-3xl text-forest md:text-4xl">Lo que dicen nuestros usuarios</h2>
                    <p className="text-text-secondary md:text-lg">
                        Confianza real contruida a través de transacciones seguras y transparentes.
                    </p>
                </article>
                {/* card Testimonials */}
                <section className="gap-8 grid items-center md:grid-cols-2 lg:grid-cols-3">
                    {/* card 1 */}
                    <article className="bg-bg-light p-8 relative rounded-2xl">
                        <span className="absolute text-6xl text-btn-primary/20 top-4 right-4"><ImQuotesRight /></span>
                        {/* perfil */}
                        <div className="flex gap-4 items-center mb-6">
                            <figure className="bg-slate-200 w-12 h-12 overflow-hidden rounded-full">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFLiarEy6on9tdQlDo6iILxoubh3G_Vc64G_2g85GrgGv-tyQeWFikgo9eiWhj90yKMGyhpr4vvNiqR3RiZH3QTVb8vhC0BMigUJAdSHMwPBA98K7q43ByRugtcxzsxdsUiIO7skepRAu8hoocTzh-40jjqxyZWZavf4uAhyfiBVY-aXg-zrOMlBQar3xq5nZL9tg3cE9Kj-uxBaCcsEr6FtQIE-y5VNODzhXH306YwzEkpS7T6ZTB1KlswRRfjNCPZ95nN2_9pyM" alt="" className="w-full h-full object-cover" />
                            </figure>                            
                            <div>
                                <h5 className="font-bold text-sm">Elena Martinez</h5>
                                <p className="flex gap-x-1 items-center text-xs text-slate-500">Criadora de PRE <MdVerified /></p>
                            </div>
                        </div>
                        <p>
                            "Vender mis caballos a través de Confianza Ecuestre ha simplificado todo el proceso. El informe veterinatio previo da una seguridad al comprador que cierra tratos en días, no meses."
                        </p>
                       
                    </article>
                    {/* card 2 */}
                    <article className="bg-bg-light p-8 relative rounded-2xl">
                        <span className="absolute text-6xl text-btn-primary/20 top-4 right-4"><ImQuotesRight /></span>                        
                        <div className="flex gap-4 items-center mb-6">
                            <figure className="bg-slate-200 w-12 h-12 overflow-hidden rounded-full">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFLiarEy6on9tdQlDo6iILxoubh3G_Vc64G_2g85GrgGv-tyQeWFikgo9eiWhj90yKMGyhpr4vvNiqR3RiZH3QTVb8vhC0BMigUJAdSHMwPBA98K7q43ByRugtcxzsxdsUiIO7skepRAu8hoocTzh-40jjqxyZWZavf4uAhyfiBVY-aXg-zrOMlBQar3xq5nZL9tg3cE9Kj-uxBaCcsEr6FtQIE-y5VNODzhXH306YwzEkpS7T6ZTB1KlswRRfjNCPZ95nN2_9pyM" alt="" className="w-full h-full object-cover" />
                            </figure>                            
                            <div>
                                <h5 className="font-bold text-sm">Elena Martinez</h5>
                                <p className="flex gap-x-1 items-center text-xs text-slate-500">Criadora de PRE <MdVerified /></p>
                            </div>
                        </div>
                        <p>
                            "Vender mis caballos a través de Confianza Ecuestre ha simplificado todo el proceso. El informe veterinatio previo da una seguridad al comprador que cierra tratos en días, no meses."
                        </p>
                       
                    </article>
                    {/* card 3 */}
                    <article className="bg-bg-light p-8 relative rounded-2xl">
                        <span className="absolute text-6xl text-btn-primary/20 top-4 right-4"><ImQuotesRight /></span>
                        {/* perfil */}
                        <div className="flex gap-4 items-center mb-6">
                            <figure className="bg-slate-200 w-12 h-12 overflow-hidden rounded-full">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFLiarEy6on9tdQlDo6iILxoubh3G_Vc64G_2g85GrgGv-tyQeWFikgo9eiWhj90yKMGyhpr4vvNiqR3RiZH3QTVb8vhC0BMigUJAdSHMwPBA98K7q43ByRugtcxzsxdsUiIO7skepRAu8hoocTzh-40jjqxyZWZavf4uAhyfiBVY-aXg-zrOMlBQar3xq5nZL9tg3cE9Kj-uxBaCcsEr6FtQIE-y5VNODzhXH306YwzEkpS7T6ZTB1KlswRRfjNCPZ95nN2_9pyM" alt="" className="w-full h-full object-cover" />
                            </figure>                            
                            <div>
                                <h5 className="font-bold text-sm">Elena Martinez</h5>
                                <p className="flex gap-x-1 items-center text-xs text-slate-500">Criadora de PRE <MdVerified /></p>
                            </div>
                        </div>
                        <p>
                            "Vender mis caballos a través de Confianza Ecuestre ha simplificado todo el proceso. El informe veterinatio previo da una seguridad al comprador que cierra tratos en días, no meses."
                        </p>
                       
                    </article>                   
                </section>
            </div>
        </section>
    );
};
export default TestimonialsSection;