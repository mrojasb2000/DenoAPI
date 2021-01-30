import { Request, Response } from "https://deno.land/x/oak/mod.ts";

interface User {
  id: string;
  name: string;
}

const users: User[] = [{
    id: "1",
    name: "Ryan Ray",
}];

export const getUsers = ({ response }: { response: Response }) => {
  response.body = {
    message: "successful query",
    users,
  };
};

export const createUsers = async (
  { request, response }: { request: Request; response: Response },
) => {
    const { id, name } = await request.body().value
    console.log(name)

    users.push({
        id: id,
        name: name
    })
    response.body = {
        message: "received"
    }
};

/* export const getUser = () => {}

export const updateUsers = () => {}
export const deleteUsers = () => {} */
