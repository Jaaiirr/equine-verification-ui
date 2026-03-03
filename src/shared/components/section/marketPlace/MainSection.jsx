import { useState } from "react";
// ui
import Pagination from "../../ui/Pagination";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { MdVerified, MdVerifiedUser, MdFavorite, MdOutlineHealthAndSafety } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const MainSection = () => {
    const [page, setPage] = useState(1);


    return (
        <section className="flex-1 max-w-375 mx-auto px-6 py-8 w-full lg:px-10">
            <section className="flex flex-col gap-6">
                {/* title */}
                <div className="flex flex-col gap-4">
                    <h1 className="font-extrabold text-xl text-text-primary tracking-tight md:text-3xl">
                        Marketplace de Caballos Verificados
                    </h1>
                    {/* Fomr */}
                    <div className="flex flex-col gap-3 w-full md:flex-row">
                        <form className="relative flex-1">
                            <span className="absolute left-4 text-text-secondary top-2 translate-y-2">
                                <PiMagnifyingGlassThin />
                            </span>
                            <input
                                type="text"
                                className="w-full bg-white border border-gray-200 pl-12 pr-4 py-3 text-text-secondary text-sm transition-all outline-none rounded-xl focus:ring-2 focus:border-transparent"
                                placeholder="Buscar por raza, disciplina, ubicación o nombre..."
                            />
                        </form>
                        {/* <div className="w-full flex gap-2">
                            <button className="bg-white border border-gray-200 flex font-semibold gap-2 items-center px-4 py-3 text-sm rounded-xl transition-all hover:bg-gray-50">
                                <span className="flex text-[15px]"><MdSort />Ordenar por: Relevancia</span>
                            </button>
                            <button className="bg-primary flex font-semibold gap-2 items-center px-4 py-3 text-white text-sm rounded-xl md:hidden">
                                <span className="text-[18px]"><MdFilterList />Filtros</span>
                            </button>
                        </div> */}
                    </div>
                </div>
                {/* Main */}
                <section className="flex flex-row gap-8 items-start">
                    {/* Sidebar */}
                    <aside className="bg-white border border-gray-200 flex-col gap-6 hidden p-6 rounded-2xl shrink-0 sticky top-24 w-70 md:flex">
                        <div className="border-b border-gray-100 flex items-center justify-between pb-4">
                            <h3 className="font-bold text-lg">Filtros</h3>
                            <button className="font-bold text-btn-primary text-xs">
                                Limpiar todo
                            </button>
                        </div>
                        {/* Disciplina */}
                        <div className="flex flex-col gap-3">
                            <label className="font-bold text-sm text-gray-500 tracking-wider uppercase">
                                Disciplina
                            </label>
                            <div className="flex flex-col gap-2">
                                <label className="cursor-pointer group flex gap-2 items-center rounded">
                                    <input
                                        type="checkbox"
                                        className="border-gray-300 text-btn-primary rounded focus:ring-btn-primary"
                                    />
                                    <span className="font-medium text-sm transition-colors group-hover:text-btn-primary">
                                        Salto (243)
                                    </span>
                                </label>
                                <label className="cursor-pointer group flex gap-2 items-center rounded">
                                    <input
                                        type="checkbox"
                                        className="border-gray-300 text-btn-primary rounded focus:ring-btn-primary"
                                    />
                                    <span className="font-medium text-sm transition-colors group-hover:text-btn-primary">
                                        Doma Clásica (156)
                                    </span>
                                </label>
                                <label className="cursor-pointer group flex gap-2 items-center rounded">
                                    <input
                                        type="checkbox"
                                        className="border-gray-300 text-btn-primary rounded focus:ring-btn-primary"
                                    />
                                    <span className="font-medium text-sm transition-colors group-hover:text-btn-primary">
                                        Eventing (42)
                                    </span>
                                </label>
                                <label className="cursor-pointer group flex gap-2 items-center rounded">
                                    <input
                                        type="checkbox"
                                        className="border-gray-300 text-btn-primary rounded focus:ring-btn-primary"
                                    />
                                    <span className="font-medium text-sm transition-colors group-hover:text-btn-primary">
                                        Recreación (89)
                                    </span>
                                </label>
                            </div>
                        </div>
                        {/* Estado de Salud */}
                        <div className="flex flex-col gap-3">
                            <label className="font-bold text-sm text-gray-500 tracking-wider uppercase">
                                Verificación de Salud
                            </label>
                            <section className="flex flex-col gap-2">
                                <div className="bg-btn-primary/10 border border-btn-primary/20 flex gap-3 items-center p-2 rounded-lg">
                                    <span className="filled-icon text-btn-primary text-[20px]">
                                        <MdVerifiedUser />
                                    </span>
                                    <span className="font-bold text-xs text-btn-primary">
                                        Solo Verificados
                                    </span>
                                </div>
                                <label className="cursor-pointer flex gap-2 group items-center">
                                    <input
                                        type="checkbox"
                                        className="border-gray-300 text-btn-primary rounded focus:ring-btn-primary"
                                    />
                                    <span className="font-medium group-hover:text-btn-primary text-sm transition-colors">
                                        Rayos X Disponibles
                                    </span>
                                </label>
                                <label className="cursor-pointer flex gap-2 group items-center">
                                    <input
                                        type="checkbox"
                                        className="border-gray-300 text-btn-primary rounded focus:ring-btn-primary"
                                    />
                                    <span className="font-medium group-hover:text-btn-primary text-sm transition-colors">
                                        Chequeo Vet menor a 6 meses
                                    </span>
                                </label>
                            </section>
                        </div>
                        {/* Precio */}
                        <div className="flex flex-col gap-3">
                            <label className="font-bold text-sm text-gray-500 tracking-wider uppercase">Rango de Precio</label>
                            <div className="flex gap-2 items-center">
                                <input
                                    type="text"
                                    className="bg-gray-50 border-gray-200 p-2 text-xs rounded-lg w-full"
                                    placeholder="Min"
                                />
                                <span className="text-gray-400">-</span>
                                <input
                                    type="text"
                                    className="bg-gray-50 border-gray-200 p-2 text-xs rounded-lg w-full"
                                    placeholder="Max"
                                />
                            </div>
                        </div>
                    </aside>
                    {/* Cards */}
                    <article className="flex-1 gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Card 1 */}
                        <article className="bg-white border border-gray-200 duration-300 flex flex-col group overflow-hidden transition-all rounded-2xl hover:shadow-xl hover:-translate-y-1">
                            <picture className="h-64 overflow-hidden relative">
                                <img
                                    className="duration-500 group-hover:scale-110 h-full object-cover  transition-transform w-full"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjcxPvxu3zTfAVkrUUk5SZ0po8l-vFyt10c4smsux0q-iPdOmYEC2NOCHWRLQNqS9Ey0drHF5hRNdQdt7XaXvsbaWUhjIUlv6hBDBDOy9widFl9H2_sim7niPcDHPJwzLyL21RcGK8rua8WOwvZJjedM8fkhJMevHnWRqQhD6id-MLPptXECHJvGzu9RF3nWwW42Tkl6M7P7CdxNNhlGjHuhb-8BF9S_gY-xkUgBEbfXUl7vJWxzTkjz0cHJn3ka-LRkrKp1ToQVI"
                                    alt="Powerful brown show jumping horse in competition"
                                />
                                <div className="absolute flex flex-col gap-2 left-3 top-3">
                                    <span className="bg-white/90 backdrop-blur-md border border-btn-primary/20 flex font-bold gap-1 items-center px-2 py-1 text-[10px] text-btn-primary rounded-full">
                                        <span className="flex items-center gap-1.5 text-[12px] uppercase"><MdVerified />Vendedor  verificado</span>
                                    </span>
                                </div>
                                <div className="absolute top-3 right-3">
                                    <button className="bg-white/20 backdrop-blur-md cursor-pointer flex items-center justify-center text-white rounded-full size-8 transition-all hover:bg-white/40">
                                        <span className="text-[18px]"><MdFavorite /></span>
                                    </button>
                                </div>
                                <div className="absolute bottom-3 left-3">
                                    <div className="bg-green-500 font-bold gap-1 px-2 py-1 text-white text-[11px] shadow-lg rounded-lg">
                                        <span className="flex gap-1 items-center justify-center text-[14px] uppercase"><MdOutlineHealthAndSafety />Vet Check: oct 2025</span>
                                    </div>
                                </div>
                            </picture>
                            <section className="flex flex-col gap-4 p-5">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold group-hover:text-btn-primary leading-tight text-lg transition-colors">Donnerhall Z</h3>
                                        <p className="text-sm text-text-secondary">Oldenburger * Salto</p>
                                    </div>
                                    <div className="font-extrabold text-xl text-text-primary">$45,000</div>

                                </div>
                                <div className="flex font-medium gap-2 items-center text-xs text-gray-500">
                                    <span className="flex gap-1 text-[14px]"><FaLocationDot />Monterrey, Mexico</span>
                                </div>
                                <button className="bg-gray-50 font-bold py-3 text-sm transition-all rounded-xl w-ful hover:bg-btn-primary hover:text-white">
                                    Ver Detalles
                                </button>
                            </section>
                        </article>
                        {/* Card 2 */}
                        <article className="bg-white border border-gray-200 duration-300 flex flex-col group overflow-hidden transition-all rounded-2xl hover:shadow-xl hover:-translate-y-1">
                            <picture className="h-64 overflow-hidden relative">
                                <img
                                    className="duration-500 group-hover:scale-110 h-full object-cover transition-transform w-full"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMS8IGJYBAkVYkQ_0_q_3qTdIo6l1hMR0wIc-QZkOL4dGvQZ1GUaurkPMFbyVtw-SBeLbaUS9pata4MWQmozWU8i-KWcshDK-736FR8L1WIZOOEqu40sIBMI9D6a5BYzVk3usng3c7hDtfyc4WppPOy2hhGgjGi5wZ-jW7FmS-q5L9-dJfw4oVKj_6pY3Nt6m4qjbLuxwsEVzkeziLiAGSo9sXMm_ohJq0e7nR4h0W-OJ8214IYowFbO-dTCAHOwUOkhsYTYcINME"
                                    alt="Powerful brown show jumping horse in competition"
                                />
                                <div className="absolute flex flex-col left-3 top-3">
                                    <span className="bg-white/90 backdrop-blur-md border border-btn-primary/20 flex font-bold gap-1 items-center px-2 py-1 text-btn-primary rounded-full">
                                        <span className="flex items-center gap-1.5 text-[12px] uppercase"><MdVerified />Vendedor  verificado</span>
                                    </span>
                                </div>
                                {/* <div className="absolute bottom-3 left-3">
                                    <button className="bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all rounded-full">
                                        <span className="text-[18px]"><MdFavorite /></span>
                                    </button>
                                </div> */}
                                <div className="absolute bottom-3 left-3">
                                    <div className="bg-green-500 backdrop-blur-md flex font-bold gap-1 items-center justify-center px-2 py-1 text-white text-[11px] shadow-lg rounded-lg">
                                        <span className="flex gap-1 items-center justify-center text-[14px] uppercase"><MdOutlineHealthAndSafety />Vet Check: oct 2025</span>
                                    </div>
                                </div>
                            </picture>
                            <section className="flex flex-col gap-4 p-5">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold group-hover:text-btn-primary leading-tight text-lg transition-colors">Bella Luna</h3>
                                        <p className="text-sm text-text-secondary">Anglo-Árabe * Eventing</p>
                                    </div>
                                    <div className="font-extrabold text-xl text-text-primary">$18,500</div>

                                </div>
                                <div className="flex font-medium gap-2 items-center text-xs text-gray-500">
                                    <span className="flex gap-1 text-[14px]"><FaLocationDot />Medellin, Colombia</span>
                                </div>
                                <button className="bg-gray-50 font-bold py-3 text-sm transition-all rounded-xl w-ful hover:bg-btn-primary hover:text-white">
                                    Ver Detalles
                                </button>
                            </section>
                        </article>
                        {/* Card 3 */}
                        <article className="bg-white border border-gray-200 duration-300 flex flex-col group overflow-hidden transition-all rounded-2xl hover:shadow-xl hover:-translate-y-1">
                            <picture className="h-64 overflow-hidden relative">
                                <img
                                    className="duration-500 group-hover:scale-110 h-full object-cover transition-transform w-full"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRHVTro70GaaVdYut64O82yP0VFNQ2DguXBjjDp6jVcVuTj0sNZ72C8dtdqcOf8hhRa1sU84SKXSGqOyThP0YpETAlhT3KsDAn5gdMjb8iR2cPz52RMx5wdXt50LETYIIoRtDpRl9gF1TE_C9HQ0VHg8kXHWBiTuCVpnJU6d11C3G_UMAJKkE6TZz4kdwJKIyDKrS-N8biG8d7SV1Ef3NTAhRQcKNhnFU7BZIv_wdjwMPpCrSyxnfijrZs62Q2rlKxhpM-X_LVZg4"
                                    alt="Powerful brown show jumping horse in competition"
                                />
                                <div className="absolute flex flex-col gap-2 left-3 top-3">
                                    <span className="bg-white/90 backdrop-blur-md border border-btn-primary/20 flex font-bold gap-1 items-center px-2 py-1 text-[10px] text-btn-primary rounded-full">
                                        <span className="flex items-center gap-1.5 text-[12px] uppercase"><MdVerified />Vendedor  verificado</span>
                                    </span>
                                </div>
                                <div className="absolute bottom-3 left-3">
                                    <button className="bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all rounded-full">
                                        <span className="text-[18px]"><MdFavorite /></span>
                                    </button>
                                </div>
                                <div className="absolute bottom-3 left-3">
                                    <div className="bg-green-500 backdrop-blur-md flex font-bold gap-1 items-center justify-center px-2 py-1 text-white text-[11px] shadow-lg rounded-lg">
                                        <span className="flex gap-1 items-center justify-center text-[14px] uppercase"><MdOutlineHealthAndSafety />Vet Check: oct 2025</span>
                                    </div>
                                </div>
                            </picture>
                            <section className="flex flex-col gap-4 p-5">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold group-hover:text-btn-primary leading-tight text-lg transition-colors">Silver Mist</h3>
                                        <p className="text-sm text-text-secondary">Holsteiner * Salto</p>
                                    </div>
                                    <div className="font-extrabold text-xl text-text-primary">$58,000</div>

                                </div>
                                <div className="flex font-medium gap-2 items-center text-xs text-gray-500">
                                    <span className="flex gap-1 text-[14px]"><FaLocationDot />Buenos Aires, Argentina</span>
                                </div>
                                <button className="bg-gray-50 font-bold py-3 text-sm transition-all rounded-xl w-ful hover:bg-btn-primary hover:text-white">
                                    Ver Detalles
                                </button>
                            </section>
                        </article>
                    </article>
                </section>
                {/* Pagination */}
                <Pagination
                    currentPage={page}
                    totalPages={10}
                    onPageChange={setPage}
                />
            </section>
        </section>
    );
};
export default MainSection;
