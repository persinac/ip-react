import { createState } from '@hookstate/core'

const store = createState({
    sequence: [],
    fileName: "",
    recordingStatus: ""
});

// trying out different stores
const cpStore = createState({
    companyPriority: []
});

export {
    store,
    cpStore
}