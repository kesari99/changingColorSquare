
const Matrix = (props) => {
    const {data,onClickChageGreen} = props
    const{onclickGreen,id,orange} =data

    const onClickChage = () => {
        onClickChageGreen(id)
    }


  return (
    <div className={`w-20 h-20 p-2 m-3  border-4 ${onclickGreen ? "bg-indigo-500" : ""} ${orange ? "bg-orange-700" : ""}`} onClick={onClickChage}>


    </div>
  )
}

export default Matrix