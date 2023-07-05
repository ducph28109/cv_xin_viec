import axios from "axios"

const instant = axios.create({
    baseURL: 'https://cv-backend-duc.onrender.com/api',

})
export default instant