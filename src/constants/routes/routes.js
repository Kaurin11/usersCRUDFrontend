export const getStartUrl = () => '/start';

export const getUsersPageUrl = () => '/users';

export const getCreateUserUrl = () => '/createUser';

export const getOneUserUrl = () => `/user/:id`;
export const generateGetOneUserRoute = (id) => getOneUserUrl().replace(':id', id);

export const getUpdateUserRoute = () => `/updateUser/:id`;
export const genereteUpdateUserRoute = (id) => getUpdateUserRoute().replace(':id', id);