// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const Charts = lazy(() => import('../pages/protected/Charts'))
const Leads = lazy(() => import('../pages/protected/Leads'))
const Integration = lazy(() => import('../pages/protected/Integration'))
const Calendar = lazy(() => import('../pages/protected/Calendar'))
const Team = lazy(() => import('../pages/protected/Team'))
const Transactions = lazy(() => import('../pages/protected/Transactions'))
const Bills = lazy(() => import('../pages/protected/Bills'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))
const GettingStarted = lazy(() => import('../pages/GettingStarted'))
const DocFeatures = lazy(() => import('../pages/DocFeatures'))
const DocComponents = lazy(() => import('../pages/DocComponents'))
const Conference = lazy(() => import('../pages/protected/Conference'))
const Journal = lazy(() => import('../pages/protected/Journal'))
const ConferencePage = lazy(() => import('../pages/protected/ConferencePage'))
const JournalPage = lazy(() => import('../pages/protected/JournalPage'))
const ConfSortByVisit = lazy(() => import('../features/conference/confSortByVisit'))
const ConfSortByFollow = lazy(() => import('../features/conference/confSortByFollow'))
const ConfSortByJoin = lazy(() => import('../features/conference/confSortByJoin'))
const JourSortByVisit = lazy(() => import('../features/journal/jourSortByVisit'))
const JourSortByFollow = lazy(() => import('../features/journal/jourSortByFollow'))


const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/conference', // the url
    component: Conference, // view rendered
  },
  {
    path: '/conference/confSortByVisit', // the url
    component: ConfSortByVisit, // view rendered
  },
  {
    path: '/conference/confSortByFollow', // the url
    component: ConfSortByFollow, // view rendered
  },
  {
    path: '/conference/confSortByJoin', // the url
    component: ConfSortByJoin, // view rendered
  },
  {
    path: '/conferencePage/:id', // the url
    component: ConferencePage, // view rendered
  },
  {
    path: '/journal', // the url
    component: Journal, // view rendered
  },
  {
    path: '/journal/jourSortByVisit', // the url
    component: JourSortByVisit, // view rendered
  },
  {
    path: '/journal/jourSortByFollow', // the url
    component: JourSortByFollow, // view rendered
  },
  {
    path: '/journalPage/:id', // the url
    component: JournalPage, // view rendered
  },
  {
    path: '/welcome', // the url
    component: Welcome, // view rendered
  },
  {
    path: '/leads',
    component: Leads,
  },
  {
    path: '/settings-team',
    component: Team,
  },
  {
    path: '/calendar',
    component: Calendar,
  },
  {
    path: '/transactions',
    component: Transactions,
  },
  {
    path: '/settings-profile',
    component: ProfileSettings,
  },
  {
    path: '/settings-billing',
    component: Bills,
  },
  {
    path: '/getting-started',
    component: GettingStarted,
  },
  {
    path: '/features',
    component: DocFeatures,
  },
  {
    path: '/components',
    component: DocComponents,
  },
  {
    path: '/integration',
    component: Integration,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export default routes
