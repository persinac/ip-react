import { createState } from '@hookstate/core'

const store = createState({
    sequence: [],
    fileName: "",
    recordingStatus: ""
})

export default store