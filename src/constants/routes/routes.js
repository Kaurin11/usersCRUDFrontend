export const getHelloComponentRoute = () => '/start';

export const getMainViewRoute = () => '/users';

export const getCreateUserRoute = () => '/createUser';

export const getOneUserRoute = () => `/user/:id`;
export const generateGetOneUserRoute = (id) => getOneUserRoute().replace(':id', id);

export const getUpdateUserRoute = () => `/updateUser/:id`;
export const genereteUpdateUserRoute = (id) => getUpdateUserRoute().replace(':id', id);