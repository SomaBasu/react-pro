const initState = {
    id: 0,
    isAuthenticated: false,
    name: "",
    isCoach: false,
    loginFailed: false,
    gender: "",
    myBookings: [],
    phone: 0,
    speciality: "",
    dob: "",
    city: "",
    state: "",
    country: "",
    pinCode: 0,
    email: ""
}



export const login = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: action.isAuthenticated,
                loginFailed: action.loginFailed,
                name: action.name,
                id: action.id,
                isCoach: action.isCoach,
                gender: action.gender,
                myBookings: action.myBookings,
                phone: action.phone,
                speciality: action.speciality,
                dob: action.dob,
                city: action.city,
                state: action.state,
                country: action.country,
                pinCode: action.pinCode,
                email: action.email
            }

        case 'LOGOUT':
            return {
                ...state,
                ...initState
            }

        default:
            return state;
    }

}

export default login

