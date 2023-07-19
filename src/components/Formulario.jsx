import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  const generarID = () => {
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);

    return fecha + random;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    // Objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }

    if (paciente.id) {
      // Editando el registro
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map(pacienteState =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      )

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      // Nuevo registro
      objetoPaciente.id = generarID();
      setPacientes([...pacientes, objetoPaciente]);
    }

    // Reseteo el formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-xl mt-5 text-center">Añade pacientes y {""}
        <span className="text-indigo-800 font-bold">Administralos</span>
      </p>

      <form
        action=""
        className="bg-white shadow-md rounded-md px-5 py-5 mt-5 mb-10"
        onSubmit={handleSubmit}
        id='formulario'
      >

        {error && (
          <Error>
            <p>Todos los pacientes son requeridos</p>
          </Error>
        )}

        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block uppercase font-bold text-gray-700"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            className="border-2 w-full p-2 mt-1 rounded-md placeholder-slate-400 outline-indigo-500"
            placeholder="Nombre de la Mascota"
            value={nombre}
            onChange={(e) => { setNombre(e.target.value) }}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block uppercase font-bold text-gray-700"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            className="border-2 w-full p-2 mt-1 rounded-md placeholder-slate-400 outline-indigo-500"
            placeholder="Nombre del Propietario"
            value={propietario}
            onChange={(e) => { setPropietario(e.target.value) }}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block uppercase font-bold text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="border-2 w-full p-2 mt-1 rounded-md placeholder-slate-400 outline-indigo-500"
            placeholder="Email de contacto del propietario"
            value={email}
            autoComplete='on'
            onChange={(e) => { setEmail(e.target.value) }}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block uppercase font-bold text-gray-700"
          >
            Fecha de Alta
          </label>
          <input
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-1 rounded-md placeholder-slate-400 outline-indigo-500"
            value={fecha}
            onChange={(e) => { setFecha(e.target.value) }}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block uppercase font-bold text-gray-700"
          >
            Sintomas
          </label>
          <textarea name="sintomas" id="sintomas" cols="30" rows="3"
            placeholder="Describe los sintomas"
            className="border-2 w-full p-2 mt-1 rounded-md placeholder-slate-400 outline-indigo-500"
            value={sintomas}
            onChange={(e) => { setSintomas(e.target.value) }}
          ></textarea>
        </div>

        <input
          type="submit"
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
          className="bg-indigo-700 w-full text-indigo-100 py-2 uppercase font-bold rounded-md cursor-pointer hover:bg-indigo-950 transition-all"
        />
      </form>
    </div>
  )
}

export default Formulario