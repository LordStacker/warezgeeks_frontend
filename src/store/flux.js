export const getState = ({ setStore, getStore, getActions }) => {
    return {
        store: {
            infoUser: {},
        },
        actions: {
            setInfo: (data) =>{
                setStore({ infoUser: data})
            }
        }
    }
}