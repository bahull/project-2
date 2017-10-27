import axios from 'axios';

export const getInventory = () =>
    axios.get('/api/getAll').then( response => response.data);

export const getBin = (id) =>
    axios.get(`/api/${id}`).then(response => response.data);

export const UpdateBin = (id, name, price) =>{
    let body = {name, price}

    return axios.put(`/api/${id}`, body).then(response => response.data);
}

export const deleteBin = (id) => 
    axios.delete(`/api/${id}`).then(response => response.data);

export const createBin = (id, name, price, image_url = "https://www.shareicon.net/data/512x512/2016/07/08/117367_logo_512x512.png") => {
    let body = {name, price, image_url};

    return axios.post(`/api/${id}`, body).then(response => response.data);
}