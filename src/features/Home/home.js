import Microphone from '../../assets/microphone.svg'
import PageLayout from '../../UI/PageLayout';

const Home = () => {
    return (
        <PageLayout>
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
                <div className='flex flex-col h-full items-center justify-center gap-2 md:p-5 bg-white'>
                    <div className='flex items-center gap-2 text-xl md:text-5xl'>
                        Hear what matters
                        <span className='px-2 py-2 text-golden bg-navblue drop-shadow-md'>most to you!</span>
                    </div>
                    <div className='w-96 text-center text-lg'>
                        Podverse brings together live sports, music, news, training and many more!
                    </div>
                </div>
            </div>
        </PageLayout>

    );
}

export default Home;