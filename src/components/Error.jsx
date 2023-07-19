const Error = ({children}) => {
  return (
    <div className='bg-red-700 text-white uppercase font-bold py-2 text-center rounded mb-5 select-none'>
      {children}
    </div>
  )
}

export default Error