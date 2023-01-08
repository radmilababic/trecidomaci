import axios from "axios";

const URL = 'http://localhost:8000/api'

export async function getAllProducts() {
    const res = await axios.get(URL + '/products');
    return res.data;
}

export async function getOrders(email = '', page = 1, size = 20) {
    const res = await axios.get(URL + '/orders', {
        params: {
            email,
            page,
            size
        }
    });
    return res.data;
}

export async function getOrder(id) {
    const res = await axios.get(URL + '/orders/' + id);
    return res.data;
}