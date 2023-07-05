import instant from "./instant";

export const getAll = async()=>{
    const res = await instant.get('/products')
    return res.data
}
