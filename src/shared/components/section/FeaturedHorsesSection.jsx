import { Link } from "react-router-dom";
// icons
import { MdVerified, MdOutlineFavorite } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";


const FeactureHorsesSection = () => {
    return (
        <section id="mercado" className="bg-cream py-20">
            <div className="max-w-7xl mx-auto px-4">
                <article className="flex flex-col gap-6 items-center justify-between mb-12 md:flex-row">
                    <div>
                        <h2 className="font-bold mb-4 text-3xl text-forest md:text-4xl">Caballos Destacados y Verificados</h2>
                        <p className="text-text-secondary md:text-lg">
                            Explora nuestra selección de ejemplares con certificación de salud AAA.
                        </p>
                    </div>
                    <Link
                        to='marketplace' 
                        className="flex gap-2 font-bold items-center text-btn-primary transition-all hover:gap-3"
                    >
                            Ver todo el mercado <IoIosArrowRoundForward />
                    </Link>

                </article>
                {/* card caballos */}
                <section className="gap-6 grid items-center sm:grid-cols-2 lg:grid-cols-4">
                    {/* card 1 */}
                    <article className="bg-white border border-slate-100 group overflow-hidden shadow-sm transition-shadow rounded-xl hover:shadow-xl">
                        <div className="aspect-4/3 relative overflow-hidden">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC91Je4ZyIBMk2G14vG4aKi8ax3y0lRfBcxIv-9KJQRrZS__ekrxeCFudoxsJTS8ImNrUehx0ZLT0GNM97tWqGXeYQ2Pb-jhKfh0Bt2DYEnvC2oYUw1MFooo90NoMGlB14VKqnV__XRyVc70ZS_AZJ_AN0-GARm3hjb1ytaUqpQBSKASrPcGFAIkooN2Q65m1qKMyRYI19x_x2zR0x98VdTdgLi6OBD7LBdTVy929SvxxgYH4BhWAwfvTZeNsZsdfraEdKmGUv4cws" alt="" className="w-full h-full duration-500 group-hover:scale-105 transition-transform object-cover" />
                            <div className="absolute bg-white/90 font-bold flex gap-1 items-center left-3 px-3 py-1 text-btn-primary text-[10px] top-3 tracking-wider rounded-full shadow-sm uppercase">
                                <span className="flex gap-1 items-center text-xs"><MdVerified />Verificado AAA</span>
                            </div>
                        </div>
                        <div className="p-5">
                            <h4 className="font-bold mb-1 text-lg truncate">Semental Pura Raza Española</h4>
                            <div className="flex gap-2 items-center mb-4 text-xs text-500">
                                <span>8 años</span> *
                                <span>Doma Clásica</span> *
                                <span>Madrid</span>
                            </div>
                            <div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-black text-btn-primary text-xl">85.000</span>
                                <button className="border-r border-slate-100 cursor-pointer p-2 transition-colors rounded-lg hover:bg-slate-50">
                                    <span className="text-slate-400"><MdOutlineFavorite /></span>
                                </button>
                            </div>
                        </div>
                    </article>
                    {/* card 2 */}
                    <article className="bg-white border border-slate-100 group overflow-hidden shadow-sm transition-shadow rounded-xl hover:shadow-xl">
                        <div className="aspect-4/3 relative overflow-hidden">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcNcQ-d419AzxW1CsSbXhG4UGBos20lLl9ncFV4TZBNbpfnOwR8k7E7DizWfCQsaiZUYXEYJR2Gabk9oZ8FH8eH2Wp0E7FK_Q7YjlMLOyhh3Vl_3qXzEW9irGAlfmkPwighdNfv_DvlYkowV-NHi1sVvA5GvYouvjVL_yyMzG1nrYGEV3v1ejnJJFvtAsIFlg2Ir6XnnTndf1-QcTJgO0g0khU-HcSYXWHVXnaEPy-H0MnTlDUp7_KiVBmqXPXK1CsSWwUfvWoozw" alt="" className="w-full h-full duration-500 group-hover:scale-105 transition-transform object-cover" />
                            <div className="absolute bg-white/90 font-bold flex gap-1 items-center left-3 px-3 py-1 text-btn-primary text-[10px] top-3 tracking-wider rounded-full shadow-sm uppercase ">
                                <span className="flex gap-1 items-center text-xs"><MdVerified />Verificado Platinium</span>
                            </div>
                        </div>
                        <div className="p-5">
                            <h4 className="font-bold mb-1 text-lg truncate">Semental Pura Raza Española</h4>
                            <div className="flex gap-2 items-center mb-4 text-xs text-500">
                                <span>8 años</span> *
                                <span>Doma Clásica</span> *
                                <span>Madrid</span>
                            </div>
                            <div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-black text-btn-primary text-xl">85.000</span>
                                <button className="border-r border-slate-100 cursor-pointer p-2 transition-colors rounded-lg hover:bg-slate-50">
                                    <span className="text-slate-400"><MdOutlineFavorite /></span>
                                </button>
                            </div>
                        </div>
                    </article>
                    {/* card 3 */}
                    <article className="bg-white border border-slate-100 group overflow-hidden shadow-sm transition-shadow rounded-xl hover:shadow-xl">
                        <div className="aspect-4/3 relative overflow-hidden">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz3nqjEa3I8pKmtIA6DHcmO9JUUTgRm93OnY8P5Q_DGQfM6sgyuLxv7WYfGuh_TQygZ4igwraaVUflrPGon7UIw4yfu7GJaZbd0hO7xFbDyeQL47JY3DS2x5RFvEzoNwee7whzWdtsmFwC4cwQKHq-jK9GArZ9UVgXLc0Ie1AbcATZyn53WzgQmBHUSU2k_wv7acklt7z8lzR8bQ1ROv-AT3ojMDpN3guS7Ysv9aEZrDjArSFgultZNe6Y7PIXcbGqUcePBsYnnsA" alt="" className="w-full h-full duration-500 group-hover:scale-105 transition-transform object-cover" />
                            <div className="absolute bg-white/90 font-bold flex gap-1 items-center left-3 px-3 py-1 text-btn-primary text-[10px] top-3 tracking-wider rounded-full shadow-sm uppercase ">
                                <span className="flex gap-1 items-center text-xs"><MdVerified />Verificado AAA</span>
                            </div>
                        </div>
                        <div className="p-5">
                            <h4 className="font-bold mb-1 text-lg truncate">Semental Pura Raza Española</h4>
                            <div className="flex gap-2 items-center mb-4 text-xs text-500">
                                <span>8 años</span> *
                                <span>Doma Clásica</span> *
                                <span>Madrid</span>
                            </div>
                            <div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-black text-btn-primary text-xl">85.000</span>
                                <button className="border-r border-slate-100 cursor-pointer p-2 transition-colors rounded-lg hover:bg-slate-50">
                                    <span className="text-slate-400"><MdOutlineFavorite /></span>
                                </button>
                            </div>
                        </div>
                    </article>
                    {/* card 4 */}
                    <article className="bg-white border border-slate-100 group overflow-hidden shadow-sm transition-shadow rounded-xl hover:shadow-xl">
                        <div className="aspect-4/3 relative overflow-hidden">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4zc5mpVs_0hG-ct-M12FOeQGbfCpHtk-e6AMaN131UyqIhoXbAzLm3INXnPel7M33uYfKZsclrshUT-FxP0UPsLrIcnzX7lyFBhQDN_ixtJruXAjhI5VmvAXKzDclENvZU3l1jtRLRAXk__OZngy8EAvMNWo3Rk2WJzsjpm7sCmx1PmnSl8zHROzaVna39hjtVhID6DG3eBWNd5ZT7w_wnTu9cBtV-PlRIH-C4mzc-3hK-7MxxJ9TkkQ61Onnzc4pS4ppVNCv2xg" alt="" className="w-full h-full duration-500 group-hover:scale-105 transition-transform object-cover" />
                            <div className="absolute bg-white/90 font-bold flex gap-1 items-center left-3 px-3 py-1 text-btn-primary text-[10px] top-3 tracking-wider rounded-full shadow-sm uppercase ">
                                <span className="flex gap-1 items-center text-xs"><MdVerified />Verificado Gold</span>
                            </div>
                        </div>
                        <div className="p-5">
                            <h4 className="font-bold mb-1 text-lg truncate">Semental Pura Raza Española</h4>
                            <div className="flex gap-2 items-center mb-4 text-xs text-500">
                                <span>8 años</span> *
                                <span>Doma Clásica</span> *
                                <span>Madrid</span>
                            </div>
                            <div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-black text-btn-primary text-xl">85.000</span>
                                <button className="border-r border-slate-100 cursor-pointer p-2 transition-colors rounded-lg hover:bg-slate-50">
                                    <span className="text-slate-400"><MdOutlineFavorite /></span>
                                </button>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        </section>
    );
};
export default FeactureHorsesSection;