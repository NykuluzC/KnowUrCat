import axiosClient from '../axiosClient';


export function searchCats({ commit }, keyword) {
    axiosClient.get(`cats?name=${keyword}`)
    .then(({ data }) => {
            commit('setSearchedCats', data)
        })
}