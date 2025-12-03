import Logo from '/assets/images/logo-full.svg'
import Form from './Form'

const Hero = () => {
    return (
        <div className='w-full flex items-center justify-center flex-col relative z-10'>
            <img className='max-w-[150px]' src={Logo} alt="" />
            <div>
                <h1 className='text-4xl text-center font-InconsolataBold text-neutralC-0 mt-8'>
                    Your Journey to Coding Conf
                    <br />
                    2025 Starts Here!
                </h1>
                <p className='text-neutral-300 text-center mt-4 font-InconsolataRegular'>Secure your spot at next year's biggest coding conference.</p>
            </div>
            <Form />
        </div>
    )
}

export default Hero