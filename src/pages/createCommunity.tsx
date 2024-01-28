import React, { useState, ChangeEvent } from "react";

// Define los tipos de las propiedades de los estados de los checkboxes
interface CheckboxState {
  proposals: boolean;
  commonPayments: boolean;
  customDesign: boolean;
}

const createCommunity: React.FC = () => {
  const [countAdmin, setCountAdmin] = useState<number>(0);
  const [countUser, setCountUser] = useState<number>(0);
  const [checkboxState, setCheckboxState] = useState<CheckboxState>({
    proposals: false,
    commonPayments: false,
    customDesign: false,
  });

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckboxState({
      ...checkboxState,
      [event.target.name]: event.target.checked,
    });
  };

  const incrementCount = (type: "admin" | "user") => {
    if (type === "admin") {
      setCountAdmin(countAdmin + 1);
    } else {
      setCountUser(countUser + 1);
    }
  };

  const decrementCount = (type: "admin" | "user") => {
    if (type === "admin" && countAdmin > 0) {
      setCountAdmin(countAdmin - 1);
    } else if (type === "user" && countUser > 0) {
      setCountUser(countUser - 1);
    }
  };

  const createCommunityHandler = () => {
    // Aquí puedes manejar la lógica para "crear" la comunidad
    // Por ahora, solo vamos a imprimir en consola
    console.log({
      checkboxState,
      countAdmin,
      countUser,
    });
  };

  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-start bg-black p-4">
      <h2 className="my-5 text-3xl font-extrabold text-blue-500 sm:text-4xl md:text-5xl">
        ¿Qué Solutions quieres usar?
      </h2>
      <div className="my-10 flex w-full flex-col items-center justify-center text-white">
        <label className="mb-4 block w-72 rounded-md border-2 p-4">
          <input
            type="checkbox"
            name="proposals"
            checked={checkboxState.proposals}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          Chat
        </label>
        <label className="mb-4 block w-72 rounded-md border-2 p-4">
          <input
            type="checkbox"
            name="commonPayments"
            checked={checkboxState.commonPayments}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          Votaciones
        </label>
        <label className="mb-4 block w-72 rounded-md border-2 p-4">
          <input
            type="checkbox"
            name="customDesign"
            checked={checkboxState.customDesign}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          Propuestas
        </label>
      </div>

      <h2 className="my-5 text-3xl font-extrabold text-blue-500 sm:text-4xl md:text-5xl">
        Roles
      </h2>
      <div className="mb-10 mt-10 h-24 rounded-md border-2 border-white p-4 text-white">
        <div className="mb-4 flex items-center justify-center">
          <img src="administrador.png" alt="Admin" className="mr-4 h-10 w-10" />
          <button onClick={() => incrementCount("admin")} className="mx-2">
            +
          </button>
          <span className="mx-2">{countAdmin}</span>
          <button onClick={() => decrementCount("admin")} className="mx-2">
            -
          </button>
        </div>
      </div>
      <div className="h-24 rounded-md border-2 border-white p-4 text-white">
        <div className="flex items-center justify-center">
          <img src="user.png" alt="User" className="mr-4 h-10 w-10" />
          <button onClick={() => incrementCount("user")} className="mx-2">
            +
          </button>
          <span className="mx-2">{countUser}</span>
          <button onClick={() => decrementCount("user")} className="mx-2">
            -
          </button>
        </div>
      </div>

      <div className="container mx-auto flex min-h-screen flex-col items-center justify-start bg-black p-4">
        {/* ... (El resto de tu JSX se mantiene igual) */}

        {/* Botón Crear al final */}
        <button
          className="focus:shadow-outline mb-4 mt-10 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          type="button"
          onClick={createCommunityHandler}
        >
          CREAR
        </button>
      </div>
    </div>
  );
};
export default createCommunity;
