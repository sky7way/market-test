import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import {routeConfig} from './route';

export const RouteProvider: FC = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({element, path}) => <Route key={path} element={element} path={path}/>)}
        </Routes>
    )
}