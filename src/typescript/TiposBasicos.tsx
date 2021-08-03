const TiposBasicos = () => {
  let nombre: string = 'Moy';
  const edad: number = 35;
  const estaActivo: boolean = true;

  const poderes: string[] = ['Velocidad', 'Volar', 'Respirar'];

  return (
    <>
      <h3>Tipos básicos</h3>
      {nombre}, {edad}, {estaActivo ? 'activo ' : 'no activo'}
      <br />
      {poderes.join(',')}
    </>
  );
};

export default TiposBasicos;
