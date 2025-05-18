const create = async (title, link) => {
    let req = await fetch("http://localhost:3000/api/create.php", {
        body: JSON.stringify({ title: title, link: link })
    })
    return await req.json()
}
const readone = async (id) => {
    let req = await fetch(`http://localhost:3000/api/readOne.php?id=${id}`)
    return await req.json()
}
const readall = async () => {
    let req = await fetch("http://localhost:3000/api/readAll.php")
    return await req.json()
}
const update = async () => {
    let req = await fetch("http://localhost:3000/api/update.php", {
        body: JSON.stringify({ id: id, title: title })
    })
    return await req.json()
}
const deletereq = async () => {
    let req = await fetch("http://localhost:3000/api/delete.php", {
        body: JSON.stringify({ id: id })
    })
    return await req.json()
}

export {create, readone, readall, update, deletereq}