import React from "react";

function Contact() {
  return (
    <div className="pt-[56px] md:pt-[80px]">
      <div className="flex justify-center items-center flex-col">
        <div className="w-full px-3 mt-10 mb-5">
          <h1 className="font-raleway font-bold text-3xl mb-3">Contactanos</h1>
          <p className="font-raleway font-medium text-gray-500">
            Tienes alguna pregunta?
          </p>
          <p className="font-raleway font-medium text-gray-500">
            Completa el formulario y te contestaremos cuanto antes!
          </p>
        </div>
        <form className="w-full flex flex-col items-center px-4">
          <div className="flex flex-row gap-4">
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
              />
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
              />
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
            />
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
            />
          </div>
          <button type="submit" className="w-full my-3 bg-[#4E6E82] border-2 border-white text-white font-raleway font-semibold rounded-lg active:text-[#4E6E82] active:bg-white active:border-[#4E6E82] hover:bg-[#456477]">
            Enviar
          </button>
        </form>
      </div>
      <div className="flex flex-col my-5 px-4">
      <h1 className="font-raleway font-bold text-xl mb-2">Donde Estamos</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2299.085486590548!2d-68.32549501573266!3d-54.81361393914818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc4c231661cee9df%3A0x4d5c99e50a24c104!2sLeopoldo%20Lugones%201953%2C%20V9410%20Ushuaia%2C%20Tierra%20del%20Fuego!5e0!3m2!1ses-419!2sar!4v1719257344579!5m2!1ses-419!2sar" className="border-0 w-full h-72 rounded-md " allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

export default Contact;
