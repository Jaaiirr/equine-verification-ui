import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
    return (
        <input 
        ref={ref} // Pasar el ref
        className="w-64 bg-white border-b-2 border-slate-100 cursor-pointer px-2 text-text-secondary text-lg outline-none placeholder:text-text-secondary rounded-lg md:w-full"
        {...props} 
        />
    );
});
export default Input;