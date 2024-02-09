const BASE_URL='http://localhost:8000'

export const login =()=>{
    return `${BASE_URL}/api/token/`;
}

export const home =()=>{
    return `${BASE_URL}/api/hello/`;
}