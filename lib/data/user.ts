import prisma from "@/prisma/client";

const createUser = async (data: any) => {
  try {
    const user = await prisma.user.create({
      data: { ...data },
    });
    return { msg: "User Created!", user };
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async () => {
  try {
    const count = await prisma.user.count();
    const users = await prisma.user.findMany();
    return { count, users };
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (id: number) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};

const updateUserById = async (id: number, data: any) => {
  try {
    const user = await prisma.user.update({
      where: { id },
      data: { ...data },
    });
    return { msg: "User Updated!", user };
  } catch (error) {
    console.log(error);
  }
};

const deleteUserById = async (id: number) => {
  try {
    const user = await prisma.user.delete({
      where: { id },
    });
    return { msg: "User Deleted!", user };
  } catch (error) {
    console.log(error);
  }
};

const user = {
  create: createUser,
  all: getUsers,
  one: getUserById,
  update: updateUserById,
  delete: deleteUserById,
};
export { user };
