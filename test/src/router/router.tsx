import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Main from "@pages/Main";
import Error404Page from '@pages/404'

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path={'/'} errorElement={<Error404Page />}>
            <Route index element={<Main />} />
        </Route>
        <Route path={'*'} element={<Error404Page />} />
    </>
))

export default router
