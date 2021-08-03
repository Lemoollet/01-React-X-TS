import useUsuarios from '../hook/useUsuarios';
import { Usuario } from '../interfaces/resRes';

const Usuarios = () => {
  const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios();

  /* const renderItem = (usuario: Usuario): JSX.Element => {
    return <tr key={usuario.id.toString()}>
      <td>Avatar</td>
      <td>{usuario.first_name} {usuario.last_name}</td>
      <td>{usuario.email}</td>
    </tr>;
  }; */

  const renderItem = (usuario: Usuario): JSX.Element => {
    const { first_name, last_name, email, id, avatar } = usuario;
    return (
      <tr key={id.toString()}>
        <td>
          <img
            style={{ width: 50, borderRadius: 100 }}
            src={avatar}
            alt={first_name}
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios:</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map(renderItem)}</tbody>
      </table>
      <button className='btn btn-primary' onClick={paginaAnterior}>
        Anteriores
      </button>
      &nbsp;
      <button className='btn btn-primary' onClick={paginaSiguiente}>
        Siguientes
      </button>
    </>
  );
};

export default Usuarios;
