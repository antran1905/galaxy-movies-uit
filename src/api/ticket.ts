import { request } from "../config/axios.config";

export const createTicket = (data : any) => {
    const endpoint = `/tickets`;
    return request(endpoint, "POST", data);
};

export const confirmPayment = (data : any) => {
    const endpoint = `/create-payment`;
    return request(endpoint, "POST", data);
};
export const getTicketByUserId = () => {
    const endpoint = `/tickets/users`;
    return request(endpoint, "GET", null);
};
