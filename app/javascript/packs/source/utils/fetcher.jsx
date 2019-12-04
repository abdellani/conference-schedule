import axios from "axios"
import {store} from "../index"
import {LOGOUT} from "../utils/actions"
//this method will update the state of the store
// if the user is not logged in 
const fetcher = () => {
  const get=(path,stateUpdate) => {
    return axios.get(path).
      then(response => response.data).
      then(response => {
        if (response.code == 401) {
            store.dispatch(LOGOUT())
        }
        if (response.code == 200) {
          stateUpdate(response.data)
        }
      })

  }

  return {
    get
  }
}

export default fetcher();