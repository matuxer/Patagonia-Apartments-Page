import React, { useEffect, useState } from "react";

function Contact() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    const newErrors = {};
    if (firstName !== null) {
      if (!firstName.trim()) newErrors.firstName = "El nombre es obligatorio";
    }

    if (lastName !== null) {
      if (!lastName.trim()) newErrors.lastName = "El apellido es obligatorio";
    }

    if (email !== null) {

      if (!email.trim()) {
        newErrors.email = "El email es obligatorio";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = "Debe ser un email válido";
      }
    }

    if (message !== null) {
      if (message.trim().length < 40) {
        newErrors.message = "El mensaje debe tener al menos 40 caracteres";
      }
    }

    setErrors(newErrors);
    setIsSubmitDisabled(Object.keys(newErrors).length > 0);
  }, [firstName, lastName, email, message]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que no haya errores antes de enviar
    if (isSubmitDisabled) return;

    // Aquí iría el código para enviar el formulario
    console.log("Formulario enviado con éxito");
  };

  return (
    <div className="pt-[56px] md:pt-[80px] flex flex-col lg:flex-row lg:justify-around lg:items-center lg:px-10 lg:pb-8 xl:px-20 xl:pb-16 xl:pt-[100px]">
      <div className="flex justify-center items-center flex-col lg:w-full">
        <div className="w-full px-3 mt-10 mb-5">
          <h1 className="font-raleway font-bold text-3xl mb-3">Contactanos</h1>
          <p className="font-raleway font-medium text-gray-500">
            Tienes alguna pregunta?
          </p>
          <p className="font-raleway font-medium text-gray-500">
            Completa el formulario y te contestaremos cuanto antes!
          </p>
        </div>

        {/* Formulario de contacto */}
        <form
          className="w-full flex flex-col items-center px-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-row gap-4 w-full">
            <div className="space-y-2 flex flex-col w-full">
              <label
                className="font-raleway font-semibold text-sm"
                htmlFor="first_name"
              >
                Nombre
              </label>
              <input
                className="border-2 border-gray-300 rounded-md py-1 px-2 w-full outline-none selection:bg-blue-700 selection:text-white bg-[#f7f7f7] focus:border-[#4E6E82]"
                id="first_name"
                placeholder="..."
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs">{errors.firstName}</p>
              )}
            </div>
            <div className="space-y-2 flex flex-col w-full">
              <label
                className="font-raleway font-semibold text-sm"
                htmlFor="last_name"
              >
                Apellido
              </label>
              <input
                className="border-2 border-gray-300 rounded-md py-1 px-2 w-full outline-none selection:bg-blue-700 selection:text-white bg-[#f7f7f7] focus:border-[#4E6E82]"
                id="last_name"
                placeholder="..."
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="space-y-2 mt-2 flex flex-col w-full">
            <label
              className="font-raleway font-semibold text-sm"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border-2 border-gray-300 rounded-md py-1 px-2 outline-none selection:bg-blue-700 selection:text-white bg-[#f7f7f7] focus:border-[#4E6E82]"
              type="email"
              id="email"
              placeholder="..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>
          <div className="space-y-2 mt-2 flex flex-col w-full">
            <label
              className="font-raleway font-semibold text-sm"
              htmlFor="message"
            >
              Mensaje
            </label>
            <textarea
              className="border-2 border-gray-300 rounded-md py-1 px-2 min-h-[150px] outline-none selection:bg-blue-700 selection:text-white bg-[#f7f7f7] focus:border-[#4E6E82]"
              type="email"
              id="message"
              placeholder="Mensaje..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && (
              <p className="text-red-500 text-xs">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className={`w-full z-0 my-3 ${
              isSubmitDisabled
                ? "bg-gray-400"
                : "bg-[#4E6E82] hover:bg-[#456477] "
            } border-2 border-white text-white font-raleway font-semibold rounded-lg active:text-[#4E6E82] active:bg-white active:border-[#4E6E82] lg:w-1/4 xl:w-1/5 lg:self-start`}
            disabled={isSubmitDisabled}
          >
            Enviar
          </button>
        </form>
      </div>

      {/* MAPA */}
      <div className="flex flex-col my-5 px-4 lg:w-full">
        <h1 className="font-raleway font-bold text-xl mb-2 lg:text-2xl">
          Donde Estamos
        </h1>

        {/* Elemento que se usa para mostrar un mapa interactuable de Google */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2299.085486590548!2d-68.32549501573266!3d-54.81361393914818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc4c231661cee9df%3A0x4d5c99e50a24c104!2sLeopoldo%20Lugones%201953%2C%20V9410%20Ushuaia%2C%20Tierra%20del%20Fuego!5e0!3m2!1ses-419!2sar!4v1719257344579!5m2!1ses-419!2sar"
          className="border-0 w-full h-72 rounded-md lg:h-96 "
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
