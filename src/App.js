import React, { useEffect, useState } from 'react';
import { FaInstagram, FaWhatsapp, FaTiktok, FaTelegramPlane, FaYoutube, FaTshirt } from 'react-icons/fa';
import logo from './logo.jpg';
import { SlSocialVkontakte } from "react-icons/sl";
import { TbHandClick } from "react-icons/tb";
import { BiCheckDouble } from "react-icons/bi";
import axios from 'axios';
import { FaXTwitter } from "react-icons/fa6";

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const result = await axios.get('https://fashion-backend-r8hh.onrender.com/clicked-datas');
      // const result = await axios.get('http://localhost:4000/clicked-datas');
      setData(result.data);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = async (id, link) => {
    try {
      // await axios.post('https://fashion-backend-r8hh.onrender.com/increment-clicked', { id });
      await axios.post('http://localhost:4000/increment-clicked', { id });
      window.location.href = link;
      fetchData();
    } catch (error) {
      console.error("Ошибка при обновлении данных:", error);
    }
  };

  return (
    <div className="bg-custom-gradient pt-10 pb-40 w-full min-h-screen h-full flex flex-col items-center p-4">
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
          <p >Байеры-операторы 24/7Т</p>
        </a>
        <a href='https://t.me/rynokdordoi0' className="bg-white rounded-md shadow-md p-4 flex items-center mb-2 cursor-pointer card-hover">
          <FaTelegramPlane size={30} className="text-lg mr-2" />
          <p >Байеры-операторы 24/7Т</p>
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
          <p href="https://vk.com/dordoibazar">Совместные закупки. Бишкек в Vkontakte</p>
        </a>
      </div>
    </div>
  );
}

export default App;
