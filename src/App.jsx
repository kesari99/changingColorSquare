import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Matrix from './components/Matrix'

const matrixdata = [
  {id:1,
    onclickGreen:false,
    orange:false
    
  },
  {id:2,
    onclickGreen:false,
    orange:false

    
  },
  {id:3,
    onclickGreen:false,
    orange:false

    
  },
  {id:4,
    onclickGreen:false,
    orange:false

    
  },
  {id:5,
    onclickGreen:false,
    orange:false

    
  },
  {id:6,
    onclickGreen:false,
    orange:false

    
  },
  {id:7,
    onclickGreen:false,
    orange:false

    
  },
  {id:8,
    onclickGreen:false,
    orange:false

    
  },
]

function App() {
  const [data, setData] = useState(matrixdata)


  
const onClickChangeAll = () => {

  setData(
    data.map((each) => {
      if(each.onclickGreen === true){
        return {...each, orange:true}
      }
      return each
    })
  )
  

}

const renderOrangeColor = () => {


  return  <div className={`w-20 h-20 p-2 m-3  border-4 `} onClick={onClickChangeAll}>


  </div>

}



  const onClickChageGreen = (id) => {
    setData(
      data.map((each) => {
        if(each.id === id){
          return {...each.id,onclickGreen:true }
        }
        return each
      })
    )

  }

  return (
    <>
    <h1 className="text-3xl font-bold">
      Changing squares
    </h1>

    <ul className='grid grid-cols-3 gap-2 '>
      {data.map((each) => <Matrix key={each.id} data={each} onClickChageGreen={onClickChageGreen}/>)}
      {renderOrangeColor()}
    </ul>


    </>
  )
}

export default App
