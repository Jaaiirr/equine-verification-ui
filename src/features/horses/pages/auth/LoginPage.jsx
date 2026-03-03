import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
// ui
import  { Input } from "../../../../shared/components/ui/index"
// Components
import FormTitle from "../../../../shared/components/ui/form/formTitle/FormTitle";
import FormField from "../../../../shared/components/ui/form/FormField/FormField";
//Icons
import { RiLockPasswordLine, RiLoginBoxLine } from "react-icons/ri";
import { MdOutlineVisibility, MdOutlineVisibilityOff, MdEmail } from "react-icons/md";
import { RiShieldUserFill } from "react-icons/ri";
//Mensajes
// import { toast } from "react-hot-toast";



const LoginPage = () => {
//   const navigate = useNavigate();
  const [showkPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  


  const onSubmit = handleSubmit(async (data) => {
    console.log(data);    
  });

  // Visibilidad del pass
  const handlePass = () => {
    setShowPass(!showkPass);
  };

  return (
    <main className="w-full h-screen bg-white flex flex-col justify-center items-center lg:flex-row lg:pr-48"> 
      <form
        onSubmit={onSubmit}
        className="w-[90%] bg-forest flex flex-col justify-center items-center text-slate-600 gap-6 p-4 rounded-md md:w-[52%] md:gap-8 lg:w-[45%] xl:max-w-[30%]"
      >
        <FormTitle
          logo={<RiShieldUserFill className="w-8 h-8 mr-2 text-btn-primary" />}
          title="Inicio de"
          highlight="Sesión"
        />
        {/* Section inputs */}
        <section className="w-full flex flex-col justify-center items-center gap-7">
          {/* email */}
          <FormField
            label={
              <MdEmail className="text-2xl text-white" />
            }
            error={errors.email?.message}
          >
            <Input
              type="email"
              placeholder="Escribe el email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email requerido",
                },
              })}
            />
          </FormField>
          {/* Password */}
          <FormField
            label={
              <RiLockPasswordLine className="text-2xl text-white" />
            }
            error={errors.password?.message}
          >
            <Input
              type={showkPass ? "text" : "password"}
              id="password"
              placeholder="Escribe la Contraseña"
              {...register("password", {
                required: {
                  value: true,
                  message: "Contraseña requerida",
                },
              })}
            />
            {/* Mostrar u ocultar la contraseña */}
            <button
              type="button"
              onClick={handlePass}
              className="cursor-pointer text-white"
            >
              {showkPass ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
            </button>
          </FormField>                   
        </section>
        {/* {error && <span className="text-red-600 text-sm text-center -mt-3 md:-mt-6">{error}</span>} */}
        {/* btn login */}
          <button
            className="bg-btn-primary cursor-pointer flex gap-0.5 items-center rounded-lg p-2 text-slate-100 font-bold mb-2 hover:scale-105 hover:bg-sky-400 hover:text-slate-800"
            type="submit"
          >
            <RiLoginBoxLine className="text-2xl text-white" />
            {/* {loading ? 'Ingresando...' : 'Ingresar'} */}Ingresar
          </button>
        {/* registrar o recuperar contraseña */}
        {/*<div className='flex flex-col gap-2 text-center md:flex-row md:gap-4'>
                    <p className='text-gray-500 text-sm'>¿No tienes cuenta? 
                        <Link
                            to='/register'
                            className='text-sky-600 hover:text-sky-400 lg:text-base'> Registrate
                        </Link>
                    </p>
                    <p className='text-gray-500 text-sm'>¿olvido la contraseña?
                        <Link
                            to='/forget-password'
                            className='text-sky-600 hover:text-sky-400 lg:text-base'> Recuperar
                        </Link>
                    </p>
        </div>*/}
      </form>
    </main>
  );
};
export default LoginPage;