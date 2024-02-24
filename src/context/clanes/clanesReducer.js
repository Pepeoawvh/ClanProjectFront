export const clanesReducer = (state, action) => {
    switch (action.type) {
        case "SELECTSERVICE":
            return {...state, selectedService: action.payload}
        case "ESTABLECERSERVICIO":
            return {...state, cupos: action.payload.numUsuarios, valor: action.payload.precio, nombreServicio: action.payload.nombreCuenta}
        default: 
            return {...state}
    }
}