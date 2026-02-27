import { LuBadgeCheck } from "react-icons/lu";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";


const HeroSection = () => {
    return (
        <section className="relative h-150 flex items-center justify-center overflow-hidden">
            <figure className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-r from-forest/80 to-forest/40 z-10"></div>
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO8O19HULy_qZgJfzMFNYn7eagkyYOw99YCowpbwDet5ELedY6-DTlQOyHzp07GHaP6K-z529kMyC7e9Q5cHV8UQls70fCmbsbmZpRo9LfdSKaMXVSm7xP2uKKHPtpIM40cc1cdfLB34OoglkvzQwgG7ZJMAachCjSE8zeOn8v2LMUcBu6Hn7GZbG1wD8evC4ybXp5Z_RtEKrKuEcsz4QUuza6mABplTy4Qm6n6nET-0AMRJzwtvpSbu2iEOg0D51yvRVGY7gxzcw"
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
            </figure>
            <section className="max-w-4xl mx-auto px-4 text-center relative z-20">
                <h1 className="font-extrabold  leading-tight mb-6 text-4xl text-white md:text-5xl lg:text-7xl">
                    El primer mercado ecuestre con{" "}
                    <span className="text-btn-primary ">verificación integral</span>
                </h1>
                <p className="mt-5 mb-10 text-white text-lg max-auto leading-relaxed lg:text-xl">
                    Plataforma profesional de compra-venta de caballos con enfoque
                    riguroso en salud, genética y rendimiento deportivo.
                </p>
                {/* search */}
                <div className="bg-white flex flex-col gap-2 max-w-4xl mx-auto p-2 shadow-2xl rounded-xl md:flex-row">
                    <form
                        action=""
                        className="border-r border-slate-100 flex flex-1 items-center px-4"
                    >
                        <span className="mr-2 text-text-secondary text-xl">
                            <PiMagnifyingGlassThin />
                        </span>
                        <input
                            type="text"
                            className="w-full border-none bg-transparent py-3 text-slate-700 text-sm outline-none focus:ring-0"
                            placeholder="Raza, disciplina o ubicación..."
                        />
                    </form>
                    <div className="border-slate-100 flex flex-1 items-center px-4 relative md:border-r">
                        <span className="mr-2 text-slate-400 text-xl">
                            <LuBadgeCheck />
                        </span>
                        <select
                            name="membresias"
                            className="w-full bg-transparent cursor-pointer py-3 text-sm text-text-secondary border-none outline-none focus:outline-none focus:ring-0 focus:border-none appearance-none"
                        >
                            <option value="">Todos los estados</option>
                            <option value="">Verificado Platinum</option>
                            <option value="">Verificado Gold</option>
                        </select>
                        <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-text-secondary text-2xl"><MdKeyboardArrowDown /></span>
                    </div>
                    <button className="flex bg-btn-primary cursor-pointer font-bold gap-2 items-center justify-center px-8 py-4 text-white text-lg transition-all rounded-lg shadow-lg shadow-btn-primary/20 hover:bg-btn-primary/90 md:text-lg">
                        Buscar Ahora
                    </button>
                </div>
            </section>
        </section>
    );
};
export default HeroSection;