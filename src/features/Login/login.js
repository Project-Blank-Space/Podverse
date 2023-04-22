import Google from '../../assets/Google.svg'
import login from '../../assets/login.svg'

const Login = () => {
    return (
        <div className="flex gap-4 w-full px-4 py-10 justify-center h-full">
            
            {/* IMAGE */}
            <div className='w-full hidden md:flex justify-end '>
                <img src={login} alt='' />
            </div>


            {/* Login Box */}
            <div className='flex justify-center w-full'>
                <div className="p-2 drop-shadow-2xl shadow-blue-400 shadow-2xl rounded-md ">
                    <div className="flex flex-col justify-center h-full gap-4 items-center text-navblue rounded-md bg-white border-8 border-golden px-8 lg:px-16 py-4">
                        <span className="text-xl font-bold">LOGIN IN WITH</span>
                        <div className='rounded-md bg-white p-2 drop-shadow-md'>
                            <img src={Google} alt='google' />
                        </div>
                        <button className='bg-white hover:bg-navblue hover:text-white border-2 border-navblue rounded-full px-12 py-2'>Go Inside! </button>
                        <span>Do you need an account? <a href='/signup' className='underline-offset-4 underline font-semibold'>Create new account</a></span>
                    </div>
                </div>
            </div>         

        </div>
    );
}

export default Login;