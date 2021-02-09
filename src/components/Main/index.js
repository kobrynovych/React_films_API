import React, { Suspense } from 'react';
import {Route, Switch} from "react-router-dom";
const Characters = React.lazy(() => import('../CharactersPage'));
const Episodes = React.lazy(() => import('../EpisodesPage'));
const Locations = React.lazy(() => import('../LocationsPage'));
const Profile = React.lazy(() => import('../ProfilePage'));

const Main = () => {
  return (
    <main>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/characters">
            <Characters />
          </Route>
          <Route exact path="/episodes">
            <Episodes />
          </Route>
          <Route exact path="/locations">
            <Locations />
          </Route>
          <Route exact path="/Profile">
            <Profile />
          </Route>
        </Suspense>
        {/*/:userId? - є не обовязковим*/}
        {/* <Route path="/profile/:userId?">
          <Suspense fallback={<div>Завантаження...</div>}>
            <ProfileContainer />
          </Suspense>
        </Route> */}
      </Switch>
    </main>
  );
}
export default Main;