import { API_CONFIG } from '../src/services/api/config';
import { server } from './../src/services/mocks/server-test';

import apiSauce from 'apisauce'

beforeAll(() => {
    server.listen()
})

it("Should Get Current User", async () => {
    const api = apiSauce.create({
        baseURL: API_CONFIG.baseURL
    })

    const user = await (await api.get('/user')).data

    expect(user).toStrictEqual({
        id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
        firstName: 'John',
        lastName: 'Maverick'
    })
})