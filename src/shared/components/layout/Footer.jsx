import { RiShieldUserFill } from "react-icons/ri";
import { MdOutlinePublic, MdOutlineCamera, MdMail, MdLocalPhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";



const Footer = () => {   

    

    return (
        <footer className='bg-white border-t border-slate-200 py-12'>
            <section className='max-w-7xl mx-auto px-4'>
                {/* footer top */}
                <section className='grid grid-cols-2 gap-12 mb-12 md:grid-cols-4'>
                    <article className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-btn-primary text-3xl"><RiShieldUserFill /></span>
                            <span className="font-bold text-xl text-forest">Confianza Ecuestre</span>
                        </div>
                        <p className="leading-relaxed text-text-secondary text-sm">
                            La palabra definitiva para el comercio ecuestre profesional. Seguridad, transparencia y excelencia en cada paso.
                        </p>
                        <div className="flex gap-4">
                            <a href="" className="w-8 h-8 bg-slate-100 flex items-center justify-center text-text-secondary transition-colors rounded-lg hover:text-btn-primary">
                                <span className="text-lg"><MdOutlinePublic /></span>
                            </a>
                            <a href="" className="w-8 h-8 bg-slate-100 flex items-center justify-center text-text-secondary transition-colors rounded-lg hover:text-btn-primary">
                                <span className="text-lg"><MdOutlineCamera /></span>
                            </a>
                            <a href="" className="w-8 h-8 bg-slate-100 flex items-center justify-center text-text-secondary transition-colors rounded-lg hover:text-btn-primary">
                                <span className="text-lg"><MdMail /></span>
                            </a>                           
                        </div>
                    </article>
                    <article className="col-span-2 md:col-span-1">
                        <h6 className="font-bold mb-6">Explorar</h6>
                        <ul className="space-y-4 text-sm text-text-secondary">
                            <li>Mercado Completo</li>
                            <li>Caballos de Doma</li>
                            <li>Caballos de Salto</li>
                            <li>Pura Raza Española</li>
                        </ul>
                    </article>
                    <article className="col-span-2 md:col-span-1">
                        <h6 className="font-bold mb-6">Verificación</h6>
                        <ul className="space-y-4 text-sm text-text-secondary">
                            <li>El Sello de Confianza</li>
                            <li>Veterinarios Asociados</li>
                            <li>Pre-Purchase Exam</li>
                            <li>Preguntas Frecuentes</li>
                        </ul>
                    </article>
                    <article className="col-span-2 md:col-span-1">
                        <h6 className="font-bold mb-6">Contacto</h6>
                        <ul className="space-y-4 text-sm text-text-secondary">
                            <li className="flex gap-2 items-center"><CiLocationOn />Bogotá, Colombia</li>
                            <li className="flex gap-2 items-center"><MdLocalPhone />+57 300 123 4568</li>
                            <li className="flex gap-2 items-center"><MdMail />info@confianzaecuestre.com</li>                            
                        </ul>
                    </article>
                </section>
                {/* footer bottom */}
                <section className='border-t border-slate-100 flex flex-col gap-4 justify-between pt-8 text-xs text-text-secondary md:flex-row'>
                    <p>@ 2026 Confianza Ecuestre S.L. Todos los derechos reservados.</p>
                    <div className='flex gap-6'>
                        <a href="#" className='transition-colors hover:text-slate-600'>Política de Privacidad</a>
                        <a href="#" className='transition-colors hover:text-slate-600'>Términos de Uso</a>
                        <a href="#" className='transition-colors hover:text-slate-600'>Cookies</a>
                    </div>
                </section>
            </section>
        </footer>
    );
};
export default Footer;