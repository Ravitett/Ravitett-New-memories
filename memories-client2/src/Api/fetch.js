import axios from "axios";

const uri = 'http://localhost:3006/';

const checkToken = async() => {
    if (!localStorage.getItem("memories-token")){return false;}
    let token ={autorisation:localStorage.getItem("memories-token")}
    return token;
}

const login = async(_email, _password) => {
    try {
        let body = {email: _email , password: _password };
        let res = await axios.post(`${uri}login`, body);
        console.log(res.data);
        localStorage.setItem("memories-token", res.data.token);
        localStorage.setItem("memories-userID", res.data.id);
        localStorage.setItem("memories-fullName", res.data.fullName);
        localStorage.setItem("memories-type", res.data.type);
        return true;

    } catch (error) {
        console.log(error);
        return false;
    }

}

const getAllMemoryForApprove = async() => {

    let token = await checkToken();
    if (!token){return;}

    console.log(token);

    try {
        let res = await axios.get(`${uri}api/memories/maneger`,{
            headers:token
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }

}


const getAllMemories = async() => {
    let res = await axios.get(`${uri}api/memories`);
    console.log(res.data);
}
const getAllMemoriesByUserId = async() => {

    let token = await checkToken();
    if (!token){return;}

    console.log(token);

    try {
        let id = localStorage.getItem("memories-userID");
        let res = await axios.get(`${uri}api/memories/byuser/${id}`,{
            headers:token
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
    
}

export {
    getAllMemories,
    login,
    getAllMemoryForApprove,
    getAllMemoriesByUserId
}