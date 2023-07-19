const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const {nombre, propietario, email, fecha, sintomas, id} = paciente;

  const handleDelete = () => {
    const respuesta = confirm('Seguro deseas eliminar el paciente?');

    if(respuesta) {
      eliminarPaciente(id);
    }
  }

  return (
    <div className="bg-white shadow-md rounded-md px-5 py-5 mb-5">
      <p className="uppercase font-bold text-gray-700">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="uppercase font-bold text-gray-700">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="uppercase font-bold text-gray-700">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="uppercase font-bold text-gray-700">
        Fecha de alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="uppercase font-bold text-gray-700">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="mt-3 flex gap-5 justify-between">
        <button
          type="button"
          className="w-1/2 py-2 px-10 bg-indigo-700 hover:bg-indigo-900 font-bold text-white rounded-lg uppercase"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        
        <button
          type="button"
          className="w-1/2 py-2 px-10 bg-red-700 hover:bg-red-900 font-bold text-white rounded-lg uppercase"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Paciente