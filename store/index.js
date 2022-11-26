import {configureStore} from "@reduxjs/toolkit"
import * as collection from "./collections.reducer"

const store = configureStore({
    reducer: {
        collection: collection.reducer
    }
})

export default store