import { useEffect, useState } from "react"

const List = ({ data }) => {
    // const [list, setList] = useState(null)
    // const [currentMethod, setCurrentMethod] = useState(method)
    // useEffect(() => {
    //     const fetch = async () => {
    //         let data
    //         if(currentMethod == "readAll") {
    //             data = await readall()
    //         }
    //         else if(currentMethod == "readOne") {
    //             console.log(data)
    //             data = await readone(id)
    //         }
    //         setList(data)
    //         console.log(data)
    //     }
    //     fetch()
    // }, [])

    return (
        <div className="list">
            {(data) && JSON.stringify(data)}
        </div>
    )
}
export default List