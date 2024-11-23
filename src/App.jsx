import React from 'react'
import logo from './assets/todo.png'
import logo1 from './assets/logo2.svg'

export default function App() {
  
  return (
    <div>
      <div className='bg-blue-700 mb-14 p-[17px] flex justify-between items-center'>
        <div>
          <img src={logo1} alt="" />
        </div>
        <div>
          <ul>
            <li className='flex gap-12 text-white'>
              <a href="#">Vakansiyalar</a>
              <a href="#">Kandidatlar</a>
              <a href="#">Kompaniyalar</a>
              <a href="#">Xizmatlar</a>
              <a href="#">Ta’lim</a>

            </li>
          </ul>
        </div>
        <div className="">
          <select className="select select-info  max-w-xs bg-blue-700 w-16">
            <option disabled selected>Select language</option>
            <option>Ozbek</option>
            <option>Rus</option>
            <option>Engilish</option>
          </select>
        </div>
        <div>
          <button className="btn btn-outline bg-white text-cyan-400">Boshlash</button>
        </div>
      </div>
      <div className='bg-white rounded-lg shadow-md w-[778px] m-auto mb-20'>
        <div className='mb-5 p-8'>
          <h1 className='font-bold mb-5 text-2xl'>Kompaniya ma’lumotlari</h1>
          <p>Kompaniya haqidagi ma’lumotlarni kiriting</p>
        </div>
        <form className='p-8'>

          <div className='flex items-center gap-3.5'>
            <img className='mb-5' src={logo} alt="" />
            <label className='text-sky-600 font-medium text-xl cursor-pointer hover :underline'>
              <input className='hidden' type="file" />
              Yuklash
            </label>

          </div>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Kompaniya nomi *</span>
            </div>
            <input type="text" placeholder="Kompaniya nomi" className="input input-bordered w-full  bg-white" />
            <div className="label mb-5">
            </div>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email *</span>
            </div>
            <input type="email" placeholder="Email" className="input input-bordered w-full  bg-white" />
            <div className="label mb-5">
            </div>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Telefon raqami *</span>
            </div>
            <input type="tel" placeholder="UZ +9989" className="input input-bordered w-full  bg-white" />
            <div className="label mb-5">
            </div>
          </label>

          <div className='flex gap-5 mb-5 '>
            <select className="select select-ghost w-full max-w-xs bg-white">
              <option disabled selected>Davlat</option>
              <option>Rassiya</option>
              <option>Italiya</option>
              <option>o`zbekiston</option>
            </select>

            <select className="select select-ghost  bg-white">
              <option disabled selected>Shahar *</option>
              <option>Toshkent</option>
              <option>Maskva</option>
              <option>Farg`ona</option>
            </select>
          </div>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Yashash joyi *</span>
            </div>
            <input type="text" placeholder="Joy" className="input input-bordered w-full  bg-white" />
            <div className="label">
            </div>
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Hodimlar soni *</span>
            </div>
            <input type="number" placeholder="Hodimlar soni" className="input input-bordered w-full  bg-white" />
            <div className="label">
            </div>
          </label>


          <label className="form-control">
            <div className="label">
              <span className="label-text">Izoh *</span>
            </div>
            <textarea className="textarea textarea-bordered h-24 bg-white" placeholder="Kompaniya haqida izoh qoldiring"></textarea>
            <div className="label">
            </div>
          </label>

            <div className='flex justify-between'>
            <button className="btn btn-active text-slate-300 bg-white">Ortga</button>
            <button className="btn btn-active text-white bg-[#5361E4]">Keyingisi</button>
            </div>
          
        </form>
      </div>
    </div>
  )
}
