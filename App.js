import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import TextAreaComponent from './components/Textarea';

function App() {
  const [name, setName] = useState("Peemapol sudsanguan")
  const [number,setNum] = useState("6301648")
 

  const user = {
    firstName: "Peemapol",
    lastName: "sudsanguan",
    Number: "6301648",
    imgPic: "https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.6435-9/135597405_1600880433430852_7495545940389054821_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeFLR0n764i6nVX6EZ4i1vFVT74a4MBatB5PvhrgwFq0HidHiWtUC4sVqMFLHF6iqAsm8BVKVn91Sdc_umJ1s8zL&_nc_ohc=KhTN9a5-wZQAX9bFFVF&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfDlE4XA1lDwGp3u-Ej990hQJj_rCjfVS9fedqefwJtHqw&oe=657D9E8F",
  }
  return (
    <div className="App">
      <h1>Welcome to My Profile</h1>
      <p>My name is {user.firstName} {user.lastNameName} {user.Number}  </p>
      <img src={user.imgPic} width="150" height="150" alt=""/>
      <Footer></Footer>
      <TextAreaComponent></TextAreaComponent>
    </div>
  );
}

export default App;
