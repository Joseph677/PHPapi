const List = ({ data }) => {
    const list = []
    if(data) {
        if (typeof data == 'object') {
            if (Array.isArray(data)) {
                data.forEach((d) => {
                    list.push(<p key={d.id}>{d.id} {d.title} {d.link} {d.date_added}</p>)
                })
            }
            else if(data.id){
                list.push(<p key={data.id}>{data.id} {data.title} {data.link} {data.date_added}</p>)
            }
            else {         
                list.push(<p key={1}>{data.message}</p>)
            }
        }
    }
    return (
        <div className="list">
            {list}
        </div>
    )
}
export default List