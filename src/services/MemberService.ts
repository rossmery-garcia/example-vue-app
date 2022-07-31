import axios from '../config/axios';
import { AxiosResponse } from 'axios';
import { Member } from '../types/Member';

export const createMember = async (member: Member) => {
   await  axios.post('/members', member);
}

export const getMembers = async (): Promise<AxiosResponse<Member[]>> => {
    await  axios.get('/members');
}

