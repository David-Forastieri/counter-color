import { useEffect, useState } from 'react';
import Button from '../components/Buttons/Button';
import DisplayCounter from '../components/Display/DisplayCounter';
import InputsName from '../components/InputForm.js/InputsName';
import Mensaje from '../components/MensajePress/Mensaje';
import { ContainerStyle } from './Container.style';

function ContainerApp() {

  const [inputName, setInputName] = useState('')
  const [seconds, setSeconds] = useState(60)
  const [colorText, setColorText] = useState('white');
  const [inicio, setInicio] = useState(false);
  const [msjView, setMsjView] = useState(false);
  const [userStorage, setUserStorage] = useState([]);

  useEffect(() => {
    getExternalUser()
  }, [])

  useEffect(() => {
    const timerCount = setInterval(() => {
      if(!inicio){
        clearInterval(timerCount)
      }else if(seconds === 0){
        setColorText('grey')
        clearInterval(timerCount)
      }else{
        setSeconds(seconds -1)
      }
    }, 1000);

    return () => {
      clearInterval(timerCount)
    }
  }, [inicio,seconds])

  const getExternalUser = async () =>{
    const getUsers = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await getUsers.json()
    users.forEach(element => {
      userStorage.push({...element, asigColor: 'purple'})       
    });
    localStorage.setItem('datos', JSON.stringify(userStorage))
  }
  
  const handleStart = () =>{  
    const getDato = localStorage.getItem('datos')
    const getDatoArray = JSON.parse(getDato)
    const userRepeat = getDatoArray.filter(user => user.username === inputName)
    if(userRepeat.length > 0){
      return alert(`usted ${userRepeat[0].username} ya tiene asignado el color ${userRepeat[0].asigColor}`)
    }else{
      setInicio(true);
      setUserStorage(getDatoArray);
    }
  }
  
  const reset = () =>{    
    AsigColor()
    setSeconds(60) 
    setInicio(false)
    setMsjView(true)
  }

  const AsigColor = () =>{
    if(seconds < 12){
       setColorText('red');
    } else if (seconds > 11 && seconds < 22){
       setColorText('orange');
    }else if (seconds > 21 && seconds < 32){
       setColorText('yellow');
    }else if (seconds > 31 && seconds < 42){
       setColorText('green');
    }else if (seconds > 41 && seconds < 52){
       setColorText('blue');
    }else if (seconds > 51 && seconds < 61){
       setColorText('purple');
    }
  }

  const asignAcept = () =>{
    const Datos = {
      username: inputName,
        asigColor: colorText
      }
    setInputName('');
    setMsjView(false);
    SaveStorage(Datos);
  }

  const SaveStorage =(Datos)=>{
    userStorage.push(Datos)
    localStorage.setItem('datos', JSON.stringify(userStorage))
  }

  return (
    <>
      <ContainerStyle>
        <InputsName nombre={inputName} setInputName={setInputName} handleStart={handleStart}/>
        <DisplayCounter seconds={seconds} />
        {inicio && (
          <>
            <h2>Presione "Reset" para tener asignado un color</h2>
            <Button reset={reset} />
          </>
          )
        }
        {msjView && <Mensaje colorText={colorText} asignAcept={asignAcept} userStorage={userStorage} />}
      </ContainerStyle>
    </>
  );
}

export default ContainerApp;
