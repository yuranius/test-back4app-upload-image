import { useForm } from "react-hook-form";
import {useState} from "react";
import {useMutation} from "@apollo/client";
import {CREATE} from "./api/api";


export function App() {

  const [file, setFile] = useState('')
  const [input, setInput] = useState('')

  const [create] = useMutation(CREATE)

  const add = (name:string, file:any) => {
    create({
      variables:{
        name: name,
        image: file
      }
    }).then((res) => {
      console.log(res)
    })
  }

  const handleFile = (event:any) => {
    setFile(event.target.files[0])
  }

  const handleSubmit = (event:any) => {
    event.preventDefault()
    console.log('🥎: ', input)
    console.log('🛩: ', file)
    add(input, file)
  }

  return (
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <form className='flex flex-col gap-4 w-1/3' onSubmit={handleSubmit}>
          <input
              type="text" placeholder='name'
              value={input}
              onChange={(e:any) => setInput(e.target.value)}
              className='p-1 rounded'
          />

          <input
              name="image"
              type="file"
              onChange={handleFile}
          />
          <button type="submit" className='p-1 bg-teal-600 w-[150px] text-white rounded hover:bg-teal-500'>Отправить</button>
        </form>
      </div>
  )
}



