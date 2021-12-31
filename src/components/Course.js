import React from 'react'
import { Link, useRouteMatch , Switch ,Route, BrowserRouter } from 'react-router-dom'
import CourseItem from './CourseItem';

export default function Course() {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <ul>
                <li>
                    <Link to={`${url}/programming`}>Programming</Link>
                </li>
                <li>
                    <Link to={`${url}/networking`}>Networking</Link>
                </li>
            </ul>
            <BrowserRouter>
                <Switch>
                    <Route path={`${path}/:course`}>
                    <CourseItem />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
