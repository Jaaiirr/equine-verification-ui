const FormTitle = ({ logo, title, highlight }) => {
  return (
    <header className="w-full flex justify-center">
      <h1 className="text-2xl text-white font-bold flex items-center pb-2 md:pt-3 md:text-3xl">
        {logo}
        {title}

        {highlight && (
          <span className="text-btn-primary pl-2">
            {highlight}
          </span>
        )}
      </h1>
    </header>
  );
};
export default FormTitle;
