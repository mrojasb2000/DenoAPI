import { Request, Response } from "https://deno.land/x/oak/mod.ts";
import { v4 } from "https://deno.land/std@0.85.0/uuid/mod.ts";
interface User {
  id: string;
  name: string;
}

let users: User[] = [{
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
    response.status = 404;
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

export const getUser = (
  { params, response }: { params: { id: string }; response: Response },
) => {
  const userFound = users.find((user) => user.id === params.id);
  if (userFound) {
    response.status = 200;
    response.body = {
      message: "successful query",
      data: userFound,
    };
    return;
  }
  response.status = 404;
  response.body = {
    message: "User not found",
  };
  return;
};

export const deleteUsers = (
  { params, response }: { params: { id: string }; response: Response },
) => {
  const userFound = users.find((user) => user.id === params.id);
  if (userFound) {
    users = users.filter((user) => user.id !== userFound.id);
    response.status = 200;
    response.body = {
      message: "User removed successfully",
      data: users,
    };
    return;
  }
  response.status = 404;
  response.body = {
    message: "User not found",
  };
  return;
};

export const updateUsers = async (
  { params, request, response }: {
    params: { id: string };
    request: Request;
    response: Response;
  },
) => {
  const userFound = users.find((user) => user.id === params.id);

  if (!userFound || !request.hasBody) {
    response.status = 404;
    response.body = {
      message: !userFound ? "User not found" : "No data provided",
    };
    return;
  }

  const { name } = await request.body().value;
  const updatedUser = {
    id: params.id,
    name: name,
  };

  users = users.map((user) =>
    user.id === params.id ? { ...user, ...updatedUser } : user
  );

  response.status = 200;
  response.body = {
    message: "User updated successfully",
    data: users,
  };
};
