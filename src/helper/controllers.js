/* Funcion que obtiene datos a partir de una Url y los parsea */
export function obtenerDatos(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error:', error);
            throw error;
        });
}

/* Función que usa el router como loader para controlar que el id del apartment exista */
export const apartmentLoader = async ({ params }) => {
    const id = parseInt(params.id, 10);

    try {
        const responseData = await obtenerDatos("/db.json");

        // Encontrar el apartmento con el id especificado
        const apartment = responseData[0].apartments.find(
            (apartment) => apartment.id === id
        );

        // Verificar si el apartamento existe
        if (apartment) {
            return apartment;
        } else {
            // Lanzar un error si el apartamento no se encuentra
            throw new Response("No Apartment", { status: 404 });
        }
    } catch (err) {
        console.log("Error:", err.message);
        throw err;
    }
};