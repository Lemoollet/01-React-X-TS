import { useState } from 'react';

const useForm = <T extends Object>(formulario: T) => {
  const [state, setState] = useState(formulario);

  const onChange = (value: string, campo: keyof T): void => {
    setState({
      ...state,
      [campo]: value,
    });
  };

  return {
    ...state,
    state,
    onChange,
  };
};

export default useForm;
