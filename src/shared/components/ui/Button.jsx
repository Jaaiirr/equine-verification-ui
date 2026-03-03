const BtnContact = ({children, ...props}) => {
    return (
        <button className='bg-btn-primary cursor-pointer font-medium px-5 py-2 rounded-lg text-white transition-transform hover:scale-105 hover:bg-primary/90 hover:text-white md:px-3 lg:px-5' {...props}>
            {children}
        </button>
    );
};
export default BtnContact;