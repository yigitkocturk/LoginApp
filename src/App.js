import { useState } from 'react'
import './App.css';



function App() {

  const [form, setForm] = useState({ name: '', city: '', birthday: '', adress: '' })

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <div className="App">
      <h2>Bilgilerinizi Giriniz</h2>
      <form>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="İsim Soyisim Giriniz..." />
        <select name="city" value={form.city} onChange={handleChange}>
          <option value="">Lütfen Şehir Seçiniz</option>
          <option value="Kırklareli">Kırklareli</option>
          <option value="Edirne">Edirne</option>
          <option value="Tekirdağ">Tekirdağ</option>
          <option value="İstanbul">İstanbul</option>
        </select>
        <input type="date" name="birthday" value={form.birthday} onChange={handleChange} />
        <textarea name="adress" placeholder="Adresinizi giriniz" value={form.adress} onChange={handleChange}></textarea>
        <button>Kaydet</button>
      </form>
      {form.name !== '' && (
        <div>
        <h3>Kayıt Olan Kişi Bilgileri</h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">City</th>
              <th scope="col">Birthday</th>
              <th scope="col">Adress</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
                <tr>
                  <th scope="row"></th>
                  <td>{form.name}</td>
                  <td>{form.city}</td>
                  <td>{form.birthday}</td>
                  <td>{form.adress}</td>
                 
                </tr>
            
          </tbody>
        </table>
      </div>
      )}
      
    </div>
  );
}

export default App;
