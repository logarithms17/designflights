

const Input = ({label, name, id, value} : {label: string, name: string, id: string, value: string}) => {
  return (
    <label htmlFor={id} className='flex flex-col text-xl font-medium'>
                  <p className="pb-5">{label}</p>
                  <input type="text" name={name} id={id} className='bg-[#F5FAFF] text-[#C1C5EF] p-5 rounded-lg' value={value} />
              </label>
  )
}

export default Input