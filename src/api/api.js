import * as axios from "axios";

const instance =  axios.create({
    withCredentials: true,
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const jsonPlaceHolderAPI = {
    getPhotos (photosId) {
        return instance.get('photos/' + photosId)
            .then(res => res.data.url)
    },
    getUsers () {
        return instance.get('users')
            .then(res => res.data)
    },
    postTest (data) {
        return instance.post('posts', data)
            .then(res => console.log(res))
    }

}
