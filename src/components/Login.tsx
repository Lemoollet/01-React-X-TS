import { useReducer, useEffect } from 'react';

interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  username: '',
  nombre: '',
};

type LoginPayload = {
  username: string;
  nombre: string;
};

type AuthAction = { type: 'logout' } | { type: 'login'; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        validando: false,
        token: null,
        nombre: '',
        username: '',
      };
    case 'login':
      const { nombre, username } = action.payload;
      return {
        validando: false,
        token: 'ABC123',
        nombre,
        username,
        //nombre: action.payload.nombre,
        //username: action.payload.username,
      };
    default:
      return state;
  }
};

const Login = () => {
  //const [state, dispatch] = useReducer(authReducer, initialState);
  const [{ validando, token, nombre }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' });
    }, 1500);
  }, []);

  const loginHandler = () => {
    dispatch({
      type: 'login',
      payload: { nombre: 'Moy', username: 'Lemollet' },
    });
  };

  const logutHandler = () => {
    dispatch({ type: 'logout' });
  };

  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className='alert alert-info'>Validando... </div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      {token ? (
        <div className='alert alert-success'>Autenticado como: {nombre}</div>
      ) : (
        <div className='alert alert-danger'>No autenticado </div>
      )}
      {token ? (
        <button className='btn btn-danger' onClick={logutHandler}>
          Logout
        </button>
      ) : (
        <button className='btn btn-primary' onClick={loginHandler}>
          Login
        </button>
      )}
    </>
  );
};

export default Login;
