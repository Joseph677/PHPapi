const create = async (title, link) => {
    let req = await fetch("http://localhost:3000/api/create.php", {
        method: "POST",
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
const update = async (id, title) => {
    let req = await fetch("http://localhost:3000/api/update.php", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id, title: title })
    })
    return await req.json()
}
const deletereq = async (id) => {
    let req = await fetch("http://localhost:3000/api/delete.php", {
        method: "DELETE",
        body: JSON.stringify({ id: id })
    })
    return await req.json()
}

export {create, readone, readall, update, deletereq}