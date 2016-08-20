// Tarik Fojnica

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/sections/Layout';
import Event from './components/pages/events/Event';
import EventList from './components/pages/events/EventsList'
import Live from './components/pages/live/Live';
import TeamsList from './components/pages/teams/TeamsList';
import GetStarted from './components/pages/getStarted'

const routes = (
	<Route path="/" component={Layout}>
		<IndexRoute component={Live}/>
		<Route path="events" component={EventList}/>
		<Route path="events/:id" component={Event}/>
		<Route path="teams" component={TeamsList}/>
		<Route path="get-started" component={GetStarted}/>
	</Route>
);

export default routes;