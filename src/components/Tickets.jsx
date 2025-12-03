import Logo from '/assets/images/logo-full.svg'
import TicketImg from '/assets/images/pattern-ticket.svg'
import profileImg from '/assets/images/image-avatar.jpg'
import gitHubIcon from '/assets/images/icon-github.svg'
import { useLocation } from 'react-router-dom'


const Tickets = () => {

  const { state } = useLocation();

  const fullName = state?.fullName || "Guest User";
  const email = state?.email || "No email Provided";
  const gitHub = state?.gitHub || "No username";
  const avatar = state?.avatar || profileImg;

  return (
    <div className='w-full flex items-center justify-center flex-col relative z-10'>
      <img className='max-w-[150px]' src={Logo} alt="" />
      <div>
        <h1 className='text-4xl text-center font-InconsolataBold text-neutralC-0 mt-8'>
          Congrats, <span className='inline-block 
          text-transparent bg-clip-text bg-gradient-to-r from-[#F08A7A] to-white
          '>{fullName}</span>
          <br />
          Your ticket is ready.
        </h1>
        <p className='text-neutral-300 text-center mt-4 font-InconsolataRegular'>We've emailed your ticket to
          <br /> <span className='text-[#F08A7A]'>{email}</span> and will send updates in <br />
          the run up to the event.
        </p>
      </div>
      <div className='max-w-[320px] w-full mt-14 relative font-InconsolataRegular flex'>
        <img className='w-full' src={TicketImg} alt="" />
        <div className='flex flex-col justify-between absolute top-0 left-0 right-0 bottom-0 m-4'>
          <div>
            <img className='w-[150px]' src={Logo} alt="" />
            <small className='text-neutralC-300 text-[10px] ml-[2.2rem]'>Jan 31. 2025 / Austin, TX</small>
          </div>
          <div className='mt-auto flex items-center'>
            <img className='w-[40px] h-[40px] rounded-lg mr-2' src={avatar} alt="" />
            <div>
              <h3 className='text-neutralC-0 font-InconsolataMedium text-[1rem] leading-1'>{fullName}</h3>
              <div className='flex'>
                <img className='w-[12px] mr-1' src={gitHubIcon} alt="" />
                <small className='text-neutralC-300 text-[11px]'>@{gitHub}</small>
              </div>
            </div>
          </div>
        </div>
        <span className='text-neutralC-0/30 absolute top-1/2 -translate-y-1/2 right-1 -rotate-90 text-[18px]'>60910#</span>
      </div>
    </div>
  )
}

export default Tickets