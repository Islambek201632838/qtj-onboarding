import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import BasicLayout from 'layouts/basic/basic.layout';
import LandingHome from 'pages/landing-home/landing-home.page';
import Auth from 'pages/auth/auth.page';
import Home from 'pages/app/home/home.page';
import VacanciesPage from './vacancies/vacancies.page';
import CreateVacancyPage from './vacancies/create-vacancy.page';
import CandidatesPage from './candidates/candidates.page';
import OnboardingPage from './onboarding/onboarding.page';
import OnboardingPage2 from './onboarding/onboarding-2.page';
import AssistantsPage from './assistants/assistants.page';

export default function RoutesIndex() {
  return (
    <Routes>
      {/* <Route path="/" element={<LandingHome />} /> */}
      <Route path="/" element={<Navigate to="/app/assistants" />} />
      <Route path="/auth/:type" element={<Auth />} />
      <Route path="/app" element={<BasicLayout />}>
        {/* <Route index element={<Home />} /> */}
        {/* <Route path="vacancies" element={<VacanciesPage />} /> */}
        {/* <Route path="vacancies/create" element={<CreateVacancyPage />} /> */}
        {/* <Route path="candidates" element={<CandidatesPage />} /> */}
        <Route path="assistants" element={<AssistantsPage />} />
        <Route path="onboarding" element={<OnboardingPage />} />
        {/* <Route path="onboarding-2" element={<OnboardingPage2 />} /> */}
        {/* <Route path="*" element={<Navigate to="/app/onboarding" />} /> */}
      </Route>
    </Routes>
  );
}
