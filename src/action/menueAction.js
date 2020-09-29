import { fetch_menue } from './type'

export const FetchMenue = (data) => dispatch => {
    dispatch({
        type: fetch_menue,
        payload: data
    })
}
