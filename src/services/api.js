import axios from "axios"

const apiCliente = axios.create({
    baseURL: "http://localhost:8000/health",
    headers: {
        "Content-type": "application/json"
    }
});

export default apiCliente;