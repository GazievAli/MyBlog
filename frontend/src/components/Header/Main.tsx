import Image from "next/image"

export default function Main() {
    return (
        <div className="w-full h-[calc(100vh-40px)] relative">
            <Image 
                src="/header-bg.jpg"
                alt="background"
                className="object-center"
                fill
                priority
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10 flex items-center justify-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                    Это мой блог.
                </h1>
            </div>
        </div>
    )
}