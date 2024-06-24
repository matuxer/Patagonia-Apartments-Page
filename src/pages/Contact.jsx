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
                className="border-2 border-gray-300 rounded-md py-1 px-2 w-full outline-none focus:border-[#4E6E82]"
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
                className="border-2 border-gray-300 rounded-md py-1 px-2 w-full outline-none focus:border-[#4E6E82]"
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
              className="border-2 border-gray-300 rounded-md py-1 px-2 outline-none focus:border-[#4E6E82]"
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
              className="border-2 border-gray-300 rounded-md py-1 px-2 min-h-[150px] outline-none focus:border-[#4E6E82]"
              type="email"
              id="message"
              placeholder="Mensaje..."
            />
          </div>
          <button type="submit" className="w-full my-3 bg-[#4E6E82] border-2 border-white text-white font-raleway font-semibold rounded-lg shadow active:text-[#4E6E82] active:bg-white active:border-[#4E6E82] hover:bg-[#456477]">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
