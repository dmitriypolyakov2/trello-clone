export default function reducer(state=initialState, action) {

    switch (action.type) {
        case 'IS_LOGGED':
            return {
                ...state,
                isLogged: false
            }
    }

    return state
}

const initialState = {
    isLogged: false,
}