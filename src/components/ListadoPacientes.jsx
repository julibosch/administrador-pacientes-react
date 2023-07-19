import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
      <p className="text-xl mt-5 text-center">
        Administra tus {""}
        <span className="text-indigo-800 font-bold">Pacientes y Citas</span>
      </p>

      <div className="md:h-screen md:overflow-y-scroll mt-5">
        {pacientes.length ? (
          pacientes.map(paciente => {
            return (
              <Paciente
                key={paciente.id}
                pacientes={pacientes}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            )
          })
        ) : (
          <div className="mt-52">
            <p className="text-xl text-center px-10 py-5 bg-white w-1/2 mx-auto shadow-md">Aun no hay pacientes</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default ListadoPacientes