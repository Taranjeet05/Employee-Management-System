import { useState } from 'react'
import PropTypes from 'prop-types'

const Login = ({handleLogin}) => {

  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault ()
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form 
        onSubmit={(e) => {
          submitHandler(e)
        }} 
        action="" className='flex flex-col items-center justify-center'>
          <input 
          value={email}
          onChange={(e)=> {
            setEmail(e.target.value)
          }}
          required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter Your Email' 
          />
          <input 
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter your Password'
          />
          <button className='mt-5 text-white border-none outline-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white'>Log in</button>
        </form>

      </div>

    </div>
  )
}

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default Login