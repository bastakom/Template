import Image from 'next/image'

export const Cover = ({ children, background }) => {
  return (
    <div className="h-screen flex justify-center bg-slate-800 flex-col md:container mx-auto px-4">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-0m" />
      <Image
        src={background}
        objectFit="cover"
        layout="fill"
        className="mix-blend-soft-lighten"
      />
      {children}
    </div>
  )
}
