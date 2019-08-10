import { UserProfile } from "../models/userprofile";
import { buildUrl, apiHandleResponse } from "./helpers";
import { store } from "../store";

export function createCard(user: UserProfile) {
    return fetch(buildUrl(store.state.api, "/api/v1/cards"), {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => apiHandleResponse<UserProfile>(res, true))
}

export function getCard(id: string) {
    return fetch(buildUrl(store.state.api, "/api/v1/card", id))
        .then(res => apiHandleResponse<UserProfile>(res, true))
}