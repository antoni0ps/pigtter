import axios from "axios";
const url = "/api/users";

const getUser = async (id) => {
  try {
    const response = await axios.get(`${url}/${id}`)
    return response.data;
  } catch {
    alert("El usuario debe ser único");
  }
};

const getUsers = async () => {
  const response = await axios.get(url)
  return response.data
}

const register = async (userRegisterInfo) => {
  try {
    const response = await axios.post(url, userRegisterInfo);
    return response.data;
  } catch {
    alert("El usuario debe ser único y la contraseña debe tener al menos 5 caracteres");
  }
};

const editarNombre = async (id, nameToUpdate) => {

  try {
    const response = await axios.put(`${url}/${id}`, {name: nameToUpdate})
    return response.data
  } catch {
    alert("Error. Comprueba los datos");
  }
}

const editarImagen = async (id, imageToUpdate) => {

  try {
    const response = await axios.put(`${url}/${id}`, {image: imageToUpdate})
    return response.data
  } catch {
    alert("Error. Comprueba los datos");
  }
}

const addLike = async (id, tweetToAdd) => {
  try {
    const response = await axios.put(`${url}/${id}`, {tweetId: tweetToAdd})
    return response.data
  } catch {
    alert("Error. Comprueba los datos");
  }
}

const addFollow = async (id, followId) => {
  try {
    const response = await axios.put(`${url}/${id}`, {followId: followId})
    return response.data
  } catch {
    alert("Error. Comprueba los datos");
  }
}

const removeFollow = async (id, unfollowId) => {
  try {
    const response = await axios.put(`${url}/${id}`, {unfollowId: unfollowId})
    return response.data
  } catch {
    alert("Error. Comprueba los datos");
  }
}

export default {register, editarNombre, editarImagen, getUser, getUsers, addLike, addFollow, removeFollow}
