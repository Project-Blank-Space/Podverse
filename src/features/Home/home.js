import Microphone from '../../assets/microphone.svg'

const Home = () => {
    return (
        <div className="flex flex-col h-full">
            <div className='flex w-full px-4'>
                <div className='flex flex-col text-xl md:text-4xl justify-center items-center w-full'>
                    <div className='flex flex-col'>
                        <span className='text-white font-medium'>LISTEN TO WHAT MAKES YOU HAPPY</span>
                        <span className='text-golden font-extrabold'>AT THE SAME PLACE!</span>
                        <div className='pt-4'>
                            <button className='bg-white rounded-full py-2 px-5 text-sm w-fit font-medium'>Start Listening for free</button>
                        </div>
                    </div>

                </div>
                <div className='flex w-full pl-24'>
                    <img className='w-80 md:w-80' src={Microphone} alt='microphone' />
                </div>
            </div>
            <div className='flex relative h-full items-center justify-center gap-2 md:p-5 bg-white'>
                <div className='flex'>
                    <div className="grid grid-cols-10 gap-2 absolute mt-10">
                        {[...Array(50)].map((_, i) => (
                            <div key={i} className="bg-navblue rounded-full w-2 h-2 opacity-10 text-transparent">.</div>
                        ))}
                    </div>
                    <div className='flex flex-col gap-2 px-12'>
                        <div className='flex items-center gap-2 text-xl md:text-4xl lg:text-5xl'>
                            Hear what matters
                            <span className='px-2 py-2 text-golden bg-navblue drop-shadow-md'>most to you!</span>
                        </div>
                        <div className='px-12 flex flex-nowrap w-[600px] text-center lg:text-xl'>
                            Podverse brings together live sports, music, news, training and many more!
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default Home;