import { useState } from "react";
import { CiPlay1 } from "react-icons/ci";


const TrustBadgesSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const videoUrl = '/mock-video.mp4';
    const thumbnail = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzHWin6hVP1ac66AmoZ8A4jd6b6hLBGp_t0HlpfiWryM1kCs_qZXx6ksRwuxyD9vPOps9LuFen-q3SkYLJmhz0C5yJDqEaaIu5fN-dBs_1RFmgZEB4ZTASS4Au5wo3Bda5vVIIQifmaTikBZiVztTwwHWgXYWxODCZKyBlmyl0ClCPO7Xm_iXnb0jreE-e4ITfj0oEipC0UeBS73BZOcVhrofOSp7vGiXigURlbKQqjvz3YHpHqSzNhUzjVytOlEQcIqAbsOa9tAE';

    return (
        <section className="aspect-video bg-black group relative rounded-xl overflow-hidden">
            {!isPlaying ? (
                <>
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${thumbnail})` }}
                    />
                    <button
                        onClick={() => setIsPlaying(true)}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        ▶
                    </button>
                </>
            ) : (
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={videoUrl}
                    autoPlay
                    controls
                />
            )}
            <div
                className="absolute bg-cover bg-center inset-0 opacity-90"
                data-alt="Performance video of a stallion jumping"
                style={{
                    backgroundImage: "url('')"
                }}
            ></div>
            <div className="absolute bg-linear-to-t flex from-black/60 inset-0 items-end p-8 to-transparent">
                <div className="flex items-end justify-between w-full">
                    <div>
                        <span className="bg-btn-primary font-bold inline-block mb-2 px-2 py-1 text-xs text-white tracking-wider rounded uppercase">Video de Rendimiento</span>
                        <h1 className="font-black text-white text-3xl">Nobleza IV</h1>
                        <p className="text-slate-200">Semental Pura Raza Española | 7 años | 1.65m</p>
                    </div>
                    <button className="bg-white/20 backdrop-blur-md flex items-center justify-center size-16 text-white transition-all hover:bg-white/40">
                        <span className="text-4xl"><CiPlay1 /></span>
                    </button>
                </div>
            </div>
        </section>
    );
};
export default TrustBadgesSection;