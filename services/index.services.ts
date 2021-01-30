import { Request, Response, Body } from "https://deno.land/x/oak/mod.ts";
import { v4 } from "https://deno.land/std@0.85.0/uuid/mod.ts";
interface User {
  id: string;
  name: string;
}

const users: User[] = [{
    id: v4.generate(),
    name: "Ryan Ray",
}];

export const getUsers = ({ response }: { response: Response }) => {
  response.body = {
    message: "successful query",
    users,
  };
};

interface userBody {
    name: string,
}
export const createUsers = async (
  { request, response }: { request: Request; response: Response },
) => {
    /* const { id, name } = await request.body().value
    console.log(name) */

    const  { name } = await request.body().value
    
    users.push({
        id: v4.generate(),
        name: name
    })
    response.body = {
        message: "received"
    }
};

/* export const getUser = () => {}

export const updateUsers = () => {}
export const deleteUsers = () => {} */
