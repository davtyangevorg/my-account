import { produce } from "immer";

import {
    SAVE_CHANGES,
    DELETE_PALETTE,
    CREATE_PALETTE,
} from "../types/colors.js";

const COLORS_QUANTITY = 8;

const initalState = {
    totalSize: 400,
    items: [
        {
            _id: 1,
            color: "#3A86FF",
            size: 23,
            name: "Videos",
        },
        {
            _id: 2,
            color: "#01F3D5",
            size: 65,
            name: "Images",
        },
        {
            _id: 3,
            color: "#FABD11",
            size: 46,
            name: "Audios",
        },
        {
            _id: 4,
            color: "#752EE0",
            size: 58,
            name: "Videos Other",
        },
        {
            _id: 5,
            color: "#1DD5AB",
            size: 56,
            name: "Mockups",
        },
        {
            _id: 6,
            color: "#F06C2E",
            size: 39,
            name: "Logos",
        },
        {
            _id: 7,
            color: "#FA1371",
            size: 11,
            name: "Graphics",
        },
    ],
};

const colorsReducer = (state = initalState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            default:
                return state;
        }
    });
};

export default colorsReducer;
