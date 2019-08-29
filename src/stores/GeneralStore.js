import {
    observable,
    action,
    computed
} from 'mobx'
import axios from '../../node_modules/axios/dist/axios'
import { throwStatement, awaitExpression } from '@babel/types';

const API_URL = 'http://localhost:8000'

export class GeneralStore {

    @action sendDetails = async (clientDetails) => {
        console.log(clientDetails)
        await axios.post(`${API_URL}/sendMail`, clientDetails)

    }
}

