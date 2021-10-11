export const getState = ({ setStore, getStore, getActions }) => {
    return {
        store: {
            setProfile: (data) => { const store = getStore(); setStore({ profileUser: data }) }
        },
        actions: {
        }
    }
}