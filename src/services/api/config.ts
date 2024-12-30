import apiSauce from 'apisauce';
import { apiPaths } from './api-paths';
export const API_CONFIG = {
    baseURL: apiPaths.base.url(),
    timeout: 60000
}

export const publicApi = apiSauce.create(API_CONFIG)
export const privateApi = apiSauce.create(API_CONFIG)
//TODO Add auth into private api

