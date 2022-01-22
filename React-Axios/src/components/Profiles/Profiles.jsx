import React,{useState,useEffect} from 'react'
import Button from '../Button/Button'
import User from '../User/User'
import Input from '../Input/Input'
import styles from './Profiles.module.css'

const Profiles = ()=>{
  const [users,setUsers] = useState([])
  const [inputVal,setInputVal]=useState('')
   
  const inputChangeHandler = (e)=>{
    setInputVal(e.target.value)
  }

  useEffect(()=>{

    fetch('https://reqres.in/api/users?page=1')
    .then((res)=>(res.json()))
    .then((result)=>{setUsers(result.data)})
    
  },[])

 


    

 

  const getButtonHandler = ()=>{
    let data = {inputVal}
    fetch('https://reqres.in/api/users?page=1',{
            method:"POST",
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            },

            body:JSON.stringify(data)
        })
            .then((res)=>(res.json()))
            .then((result)=>{
              const userList = [...users,{first_name:inputVal}]
              
              setUsers(userList)

              console.log(result)})
              console.log(users)
  }

 
 

  return (

     <>
     <div className = {styles.profile}>
     <h2 style={{textAlign:"center",padding:"30px", backgroundColor:"yellowgreen"}}> DIGIKULL STUDENTS </h2>
     <h3 style={{textAlign:"center",}}> HELLO USER </h3>
     <div className = {styles.user}>
       <Input value = {inputVal} onInputHandler = {inputChangeHandler}/> &nbsp;
       <Button onButtonHandler={getButtonHandler} btnTxt = "ADD USER"/> 
     </div>

     {users.map((elem,index)=>(
       <User userName = {elem.first_name}
           key = {index}/>
     ))}
    

     </div>

     </>
  )
}

export default Profiles;

