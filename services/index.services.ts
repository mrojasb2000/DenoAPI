import { Response } from "https://deno.land/x/oak/mod.ts";

interface User {
    id: string,
    name: string,
}

const users: User[] = [{
    id: "1",
    name: "Ryan Ray"
}]

export const getUsers = ({response}: { response: Response }) => {
    response.body = {
        message: "successful query",
        users,
    }
}


/* export const getUser = () => {}
export const createUsers = () => {}
export const updateUsers = () => {}
export const deleteUsers = () => {} */