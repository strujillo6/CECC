
const moduleLocation = { 
    namespaced: true,
    state: { 
        location: {
           latitude: '',
           longitude: ''
        },
        error:{
            active:'true'
        }
    }, 
    mutations: { 
        updateLocation(state, location) { 
            state.location.latitude = location.latitude
            state.location.longitude = location.longitude
        },
        error(state, error){
            state.error.msg = error.msg
            state.error.active = error.active
        }
    }
};

export default moduleLocation