const auth = '/auth';
const pizzas = '/pizzas';

const urls = {
    auth: {
        login: `${auth}/sing-in`,
        register: `${auth}/sing-up`,
        refresh: `${auth}/refresh`,
        me: `${auth}/me`,
    },
    pizzas,
};

export { urls };
