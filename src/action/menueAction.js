import { fetch_menue } from './type'
// Menue Action
export const FetchMenue = (data) => dispatch => {
    dispatch({
        type: fetch_menue,
        payload: data
    })
}
