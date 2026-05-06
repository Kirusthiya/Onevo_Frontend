import type { RouteObject } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import MainLayout from '../shared/layout/MainLayout';
import HomePage from '../pages/home/HomePage';
import ChatPage from '../pages/chat/ChatPage';
import InboxPage from '../pages/inbox/InboxPage';

// People
import EmployeesPage from '../pages/people/employees/EmployeesPage';
import LeavePage from '../pages/people/leave/LeavePage';

// Workforce
import PresencePage from '../pages/workforce/presence/PresencePage';
import ProjectPage from '../pages/workforce/project/ProjectPage';
import MyWorkPage from '../pages/workforce/mywork/MyWorkPage';
import PlannerPage from '../pages/workforce/planner/PlannerPage';
import GoalsPage from '../pages/workforce/goals/GoalsPage';
import DocsPage from '../pages/workforce/docs/DocsPage';
import TimesheetsPage from '../pages/workforce/timesheets/TimesheetsPage';
import AnalyticsPage from '../pages/workforce/analytics/AnalyticsPage';

// Org
import OrgChartPage from '../pages/org/orgchart/OrgChartPage';
import DepartmentsPage from '../pages/org/departments/DepartmentsPage';
import TeamsPage from '../pages/org/teams/TeamsPage';
import JobFamiliesPage from '../pages/org/jobfamilies/JobFamiliesPage';
import LegalEntitiesPage from '../pages/org/legalentities/LegalEntitiesPage';

// Calendar
import CalendarPage from '../pages/calendar/calendar/CalendarPage';
import SchedulesPage from '../pages/calendar/schedules/SchedulesPage';
import AttendancePage from '../pages/calendar/attendance/AttendancePage';
import OvertimePage from '../pages/calendar/overtime/OvertimePage';

// Admin
import PeopleAccessPage from '../pages/admin/peopleaccess/PeopleAccessPage';
import PermissionsPage from '../pages/admin/permissions/PermissionsPage';
import ActivityTrailPage from '../pages/admin/activitytrail/ActivityTrailPage';
import AgentsPage from '../pages/admin/agents/AgentsPage';
import DevicesPage from '../pages/admin/devices/DevicesPage';
import DataPrivacyPage from '../pages/admin/dataprivacy/DataPrivacyPage';

// Settings
import GeneralPage from '../pages/settings/general/GeneralPage';
import AlertsPage from '../pages/settings/alerts/AlertsPage';
import NotificationsPage from '../pages/settings/notifications/NotificationsPage';
import IntegrationsPage from '../pages/settings/integrations/IntegrationsPage';
import BrandingPage from '../pages/settings/branding/BrandingPage';
import BillingPage from '../pages/settings/billing/BillingPage';
import SystemPage from '../pages/settings/system/SystemPage';

export const dashboardRoutes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout><Outlet /></MainLayout>,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'home', element: <HomePage /> },
      { path: 'chat', element: <ChatPage /> },
      { path: 'inbox', element: <InboxPage /> },
      
      // People
      { path: 'people/employees', element: <EmployeesPage /> },
      { path: 'people/leave', element: <LeavePage /> },

      // Workforce
      { path: 'workforce/presence', element: <PresencePage /> },
      { path: 'workforce/project', element: <ProjectPage /> },
      { path: 'workforce/mywork', element: <MyWorkPage /> },
      { path: 'workforce/planner', element: <PlannerPage /> },
      { path: 'workforce/goals', element: <GoalsPage /> },
      { path: 'workforce/docs', element: <DocsPage /> },
      { path: 'workforce/timesheets', element: <TimesheetsPage /> },
      { path: 'workforce/analytics', element: <AnalyticsPage /> },

      // Org
      { path: 'org/orgchart', element: <OrgChartPage /> },
      { path: 'org/departments', element: <DepartmentsPage /> },
      { path: 'org/teams', element: <TeamsPage /> },
      { path: 'org/jobfamilies', element: <JobFamiliesPage /> },
      { path: 'org/legalentities', element: <LegalEntitiesPage /> },

      // Calendar
      { path: 'calendar/calendar', element: <CalendarPage /> },
      { path: 'calendar/schedules', element: <SchedulesPage /> },
      { path: 'calendar/attendance', element: <AttendancePage /> },
      { path: 'calendar/overtime', element: <OvertimePage /> },

      // Admin
      { path: 'admin/peopleaccess', element: <PeopleAccessPage /> },
      { path: 'admin/permissions', element: <PermissionsPage /> },
      { path: 'admin/activitytrail', element: <ActivityTrailPage /> },
      { path: 'admin/agents', element: <AgentsPage /> },
      { path: 'admin/devices', element: <DevicesPage /> },
      { path: 'admin/dataprivacy', element: <DataPrivacyPage /> },

      // Settings
      { path: 'settings/general', element: <GeneralPage /> },
      { path: 'settings/alerts', element: <AlertsPage /> },
      { path: 'settings/notifications', element: <NotificationsPage /> },
      { path: 'settings/integrations', element: <IntegrationsPage /> },
      { path: 'settings/branding', element: <BrandingPage /> },
      { path: 'settings/billing', element: <BillingPage /> },
      { path: 'settings/system', element: <SystemPage /> },
    ]
  }
];
