import { Roboto_Mono } from 'next/font/google'

const robotoMono = Roboto_Mono({ 
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'] 
})

export default function NavBar () {
    return (
        <div className="w-full h-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-10">
                    <div className="flex items-center">
                        <h1 className="text-2xl tracking-tight">
                            Gaziev Ali
                        </h1>
                    </div>
                    <div className="flex items-center">
                        
                    </div>
                    <div className="flex items-center">
                        <div className='flex mr-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 cursor-pointer">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                            </svg>
                            <p className="ml-2">
                                <span className={`${robotoMono.className} border-b border-gray-300 pb-1`}>
                                    +7(991)176-70-00
                                </span>
                            </p>
                        </div>
                        <div className='flex'>
                            <button className="flex p-3 bg-gray-900 text-white px-2 py-1 rounded-lg font-medium hover:bg-gray-800 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                </svg>
                                <span className='ml-2'>
                                    Написать мне
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}