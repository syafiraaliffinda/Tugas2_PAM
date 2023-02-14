const posts =[
    {
        title: "Post Satu", 
        body: "Ini adalah post Satu"
    },
    {
        title: "Post Dua", 
        body: "Ini adalah post Dua"
    }
] 
const createPost = post => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            posts.push(post)
            const error = false
            if (!error) {
                resolve()
            }else{
                reject()
            }
        },2000)
    })
} 
const getPosts = () => { 
    setTimeout (() => {
        posts.forEach(post => {
            console.log(post)
        })
    }, 1000)
}
const newPost = {
    title: "Post Tiga", 
    body: "Ini adalah Post Tiga"
}

createPost(newPost)
    .then(getPosts)
    .catch(error => console.log(error))
