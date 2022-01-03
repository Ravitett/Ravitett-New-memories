import logo from './logo.svg';
import './App.css';
import Table from './Components/Table';
import Form from './Components/Form'
import Modal from './Components/Modal';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import User from './Screens/User';
import Admin from './Screens/Admin';
import Page404 from './Screens/Page404';
import Header from './Components/Header';
import Footer from './Components/Footer';

import { getAllMemories, login, getAllMemoryForApprove } from './Api/fetch';

const inputList = [
  { type: "text", title: "first name", id: "fn" },
  { type: "text", title: "lasr name", id: "ln" },
  { type: "tel", title: "phone number", id: "tel" }
]



function App() {

  const test = async() => {
    await login("ro@gmail.com","12345678");
  }
  test();

  return (
    <>
    <Header/>
      <main>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Page404 />} />

          </Routes>
        </BrowserRouter>
      </main>
      <Footer/>
      {/* <Modal title="cat" content={<Form inputList={inputList}/>} size="modal-sm"/> */}
    </>
  );
}

export default App;
