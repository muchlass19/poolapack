import axios from 'axios'

// STATE
export const state = {
    users: [],
    loginData: []
}

// GETTERS
export const getters = {
    isMatch: (state) => {
        const matchData = state.users.find((el) => {
            return el.email === state.loginData.email && el.password === state.loginData.password
        })

        return matchData ? true : false
    }
}

// ACTIONS
export const actions = {
    loginUsers(context, data){
        axios.get('http://localhost:3001/users').then((res) => {
            context.commit('usersData', res.data)
            context.commit('loginData', data)
        })
    },
    logout(context){
        context.commit('usersData', [])
        context.commit('loginData', [])
        this.$router.push('/')
    }
}

// MUTATIONS
export const mutations = {
    usersData(state, users){
        state.users = users
    },

    loginData(state, loginData){
        state.loginData = loginData
    }
}