/*
autoriaus 
    name
    surname
    avataras (profilio nuotrauka)
    profilio nuoroda
time
post 
    text
    photo gallery
    background
*/

const posts = []

const post = {
    author: {
        name: 'Vardenis',
        lastName: 'Surname',
        avatar: './img/users/varpav.jpg',
        uri: 'vardenis-pavardenis'
    },
    timestamp: 15313131588745,

    content: {
        text: 'Laba diena!',
        images: [
            '.img',
            '.img2'
        ],
        background: 'red'
    }
}

export default posts;


