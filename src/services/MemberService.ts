import axios from '../config/axios';
import { Member } from '../types/Member';

export const createMember = async (member: Member) => {
   await  axios.post('/members', member);
}