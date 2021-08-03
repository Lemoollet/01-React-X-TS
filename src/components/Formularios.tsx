import useForm from '../hook/useForm';

interface FormData {
  email: string;
  password: string;
}

const Formularios = () => {
  const { state, email, password, onChange } = useForm<FormData>({
    email: '',
    password: '',
  });

  return (
    <>
      <h3>Formularios</h3>
      <input
        type='text'
        className='form-control'
        placeholder='Email'
        value={email}
        onChange={({ target }) => onChange(target.value, 'email')}
      />
      <input
        type='text'
        className='form-control mt-2 mb-2'
        placeholder='Password'
        value={password}
        onChange={({ target }) => onChange(target.value, 'password')}
      />
      <code>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </code>
    </>
  );
};

export default Formularios;
