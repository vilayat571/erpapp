import React, { useState } from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../redux/reducers/loginReducer';

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: ""
  });
  const style = "w-full border-[#4c4c4d] border-[1px] text-sm mt-4 px-4 py-3 text-black outline-none";
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getToken({ username: form.username, password: form.password }));
    setForm({
      usename: "",
      pasword: ""
    });
    setTimeout(() => {
      navigate('/home');
    }, 1000);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className='px-2 py-3 h-1/2 flex flex-col'>
      <input onChange={(e) => handleChange(e)} className={style} value={form.username} id='username' required type="text" placeholder={'İstifadəçi adı'} />
      <input onChange={(e) => handleChange(e)} className={style} value={form.password} id='password' required type="text" placeholder={'Şifrə'} />
      <Button style={"w-full mt-4 px-4 py-3 text-sm text-white bg-[#4c4c4d] border-none rounded-sm outline-none"} text={"Giriş"} />
    </form>
  )
}

export default Form;