import { useNavigate } from 'react-router-dom'
import UploadFile from './uploadFile'
import infoIcon from '/assets/images/icon-info.svg'
import { useState } from 'react'

const Form = () => {

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gitHub, setGitHub] = useState("");
  const [avatar, setAvatar] = useState(null)


  function handleFormSubmit(e) {
    e.preventDefault()

    navigate('/ticket', {
      state: {
        fullName,
        email,
        gitHub,
        avatar
      }
    })
  }
  console.log(fullName);
  return (
    <div
      className="
        max-w-[340px] m-auto mt-4
        relative z-10 text-neutralC-300
        font-InconsolataRegular"
    >
      <form onSubmit={handleFormSubmit}>
        <label
          htmlFor="avatar"
          className='cursor-pointer block mb-2 text-[12px]'>Upload Avatar</label>

        <UploadFile setAvatar={setAvatar} />

        <div className='flex items-center gap-2 mt-2'>
          <img src={infoIcon} alt="" />
          <small className='block text-[10px]'>Upload your photo (JPG or PNG, max size: 500kb)</small>
        </div>

        <div className='mt-4'>
          <label className="label" htmlFor="fullName">Full Name</label>
          <input className='file' required type="text" onChange={e => setFullName(e.target.value)} />

          <label className="label" htmlFor="email">Email Address</label>
          <input className='file' required type="email" onChange={e => setEmail(e.target.value)} />

          <label className="label" htmlFor="github">GitHub Username</label>
          <input className='file' required type="text" onChange={e => setGitHub(e.target.value)} />
          <button type='submit' className='py-2 w-full bg-orangeC-500 text-neutralC-900 font-InconsolataBold mt-3 rounded-md'>Generate My Ticket</button>
        </div>
      </form>
    </div>
  )
}

export default Form