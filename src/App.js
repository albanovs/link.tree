import React, { useEffect, useState } from 'react';
import { FaInstagram, FaWhatsapp, FaTiktok, FaTelegramPlane, FaYoutube, FaTshirt } from 'react-icons/fa';
import logo from './logo.jpg';
import { SlSocialVkontakte } from "react-icons/sl";
import { TbHandClick } from "react-icons/tb";
import { BiCheckDouble } from "react-icons/bi";
import axios from 'axios';
import { FaXTwitter } from "react-icons/fa6";
import { BiMailSend } from "react-icons/bi";
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data, setData] = useState(null);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  // const fetchData = async () => {
  //   try {
  //     const result = await axios.get('https://fashion-backend-r8hh.onrender.com/clicked-datas');
  //     setData(result.data);
  //   } catch (error) {
  //     console.error("Ошибка при загрузке данных:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const handleClick = async (id, link) => {
  //   try {
  //     await axios.post('http://localhost:4000/increment-clicked', { id });
  //     window.location.href = link;
  //     fetchData();
  //   } catch (error) {
  //     console.error("Ошибка при обновлении данных:", error);
  //   }
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceID = 'service_73t2u9p';
    const templateID = 'template_3yo5him';
    const publicKey = 'eEC2jsXF-6JqovRsf';

    emailjs.send(serviceID, templateID, form, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Сообщение успешно отправлено!');
        setForm({ name: '', phone: '', message: '' });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        toast.error('Ошибка отправки сообщения. Попробуйте снова.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="bg-custom-gradient pt-10 pb-40 w-full min-h-screen h-full flex flex-col items-center p-4">
      <ToastContainer />
      <div className="flex flex-col items-center mt-4">
        <img src={logo} alt="Logo" className="rounded-full w-20 h-20 mb-2" />
        <h1 className="text-xl font-semibold">@fashionrynok</h1>
        <p className="text-center text-gray-600 mt-5">
          Сотни байеров рынка Дордой, объединенные в единое сообщество: Фэшн Рынок
        </p>
        <div className="flex gap-8 mt-10">
          <a href="https://www.instagram.com/dordoi.fashion/" className="icon-hover"><FaInstagram size={30} className='cursor-pointer' /></a>
          <a href="https://api.whatsapp.com/send?phone=996500996500" className="icon-hover"><FaWhatsapp size={30} className='cursor-pointer' /></a>
          <a href="https://tiktok.com/@dordoi.fashion" className="icon-hover"><FaTiktok size={30} className='cursor-pointer' /></a>
          <a href="https://vk.com/dordoi.bazarF" className="icon-hover"><SlSocialVkontakte size={30} className='cursor-pointer' /></a>
          <a href="https://www.youtube.com/@dordoifashion" className="icon-hover"><FaYoutube size={30} className='cursor-pointer' /></a>
        </div>
      </div>

      <div className="w-full max-w-md mt-6">
        <h2 className="text-center text-lg font-semibold mb-2">ОПЕРАТОРЫ 24/7</h2>
        <a href='https://chat.whatsapp.com/LsWxjjflXCrGnVbH9ZvExx' className="bg-white rounded-md shadow-md p-4 flex items-center mb-2 cursor-pointer card-hover">
          <FaWhatsapp size={30} className="text-lg mr-2" />
          <p >Байеры-операторы 24/7</p>
        </a>
        <a href='https://t.me/rynokdordoi0' className="bg-white rounded-md shadow-md p-4 flex items-center mb-2 cursor-pointer card-hover">
          <FaTelegramPlane size={30} className="text-lg mr-2" />
          <p >Байеры-операторы 24/7</p>
        </a>
      </div>

      <div className="w-full max-w-md mt-6">
        <h2 className="text-center text-lg font-semibold mb-2">НАШИ ПРОЕКТЫ</h2>
        <a href="https://wa.me/996500996500" className="bg-white rounded-md shadow-md p-4 flex items-center mb-2 card-hover">
          <TbHandClick size={30} className="text-lg mr-2" />
          <p>Фулфилмент</p>
        </a>
        <a href="https://wa.me/996774996996" className="bg-white rounded-md shadow-md p-4 flex items-center mb-2 card-hover">
          <TbHandClick size={30} className="text-lg mr-2" />
          <p>Фулфилмент 2</p>
        </a>
        <a href="https://api.whatsapp.com/send/?phone=996500996500&text&type=phone_number&app_absent=0" className="bg-white rounded-md shadow-md p-4 flex items-center mb-2 card-hover">
          <FaTshirt size={30} className="text-lg mr-2" />
          <p>Пошив</p>
        </a>
        <a className="bg-white rounded-md shadow-md p-4 flex items-center mb-2 card-hover">
          <BiCheckDouble size={30} className="text-lg mr-2" />
          <p>Совместные закупки. Бишкек в Vkontakte</p>
        </a>
      </div>

      <div className="w-full max-w-md mt-6">
        <h2 className="text-center text-lg font-semibold mb-2">СВЯЖИТЕСЬ С НАМИ</h2>
        <form onSubmit={handleSubmit}>
          <label className=''>
            Ваше имя:
            <input
              className='w-full outline-none bg-white rounded-md p-4 flex items-center mb-2'
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className=''>
            Номер телефона:
            <input
              className='w-full outline-none bg-white rounded-md p-4 flex items-center mb-2'
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label className=''>
            Сообщение:
            <textarea
              className='w-full min-h-40 outline-none bg-white rounded-md p-4 flex items-center mb-2'
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>
          <button
            type="submit"
            className={`flex items-center justify-center w-full mt-5 h-14 rounded-md text-white font-semibold shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg active:shadow-none ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={isLoading}
            style={{
              background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
            }}
          >
            {isLoading ? (
              <div className="spinner-border" role="status">
                <span className="sr-only">Загрузка...</span>
              </div>
            ) : (
              <>
                <BiMailSend size={30} className="text-lg mr-2" />
                <p>Отправить</p>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;