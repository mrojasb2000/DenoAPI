import { Body, Request, Response } from "https://deno.land/x/oak/mod.ts";
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
    data: users,
  };
};

export const createUsers = async (
  { request, response }: { request: Request; response: Response },
) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      message: "No data provided",
    };
    return;
  }

  const { name } = await request.body().value;
  const newUser = {
    id: v4.generate(),
    name: name,
  };
  users.push(newUser);

  response.body = {
    message: "New user created",
    data: newUser,
  };
  response.status = 201;
};

/* export const getUser = () => {}

export const updateUsers = () => {}
export const deleteUsers = () => {} */
