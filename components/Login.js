import Image from "next/image"
import { useMoralis } from "react-moralis"

function Login() {

    const {authenticate} = useMoralis();
    
    return (
        <div className='bg-black relative '>
            <h1 className=''>I'm Login Screen</h1>
            <div className='z-50 absolute flex flex-col h-3/6 w-full items-center justify-center space-y-4 '>
                <Image src="/main logo.png" height={180} width={180} className='object-cover rounded-full' />

                <button onClick={authenticate} className='bg-blue-400 rounded-lg p-2.5 font-bold animate-pulse'>Login to Metaverse</button>
            </div>

            <div className='w-full h-screen'>
                <Image src='https://i.imgur.com/WYAjt3T.jpeg' layout="fill" objectFit="cover" />
            </div>
        </div>
    )
}

export default Login
