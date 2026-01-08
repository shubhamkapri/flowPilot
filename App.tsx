import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AppRoutes } from './types';

// Screen Imports
import { SplashScreen, WelcomeScreen, NoTricksScreen, HowItWorksScreen } from './components/OnboardingScreens';
import { LibraryScreen, SettingsScreen } from './components/DashboardScreens';
import { CreateWorkflowScreen, DescribeWorkflowScreen, BuildEvidenceScreen, ReviewEvidenceScreen, ReviewUnderstandingScreen, ProposedWorkflowScreen } from './components/CreationFlowScreens';
import { WorkflowDetailScreen, RunWorkflowScreen, WorkflowReadyScreen, StepExecutionScreen, WorkflowCompletedScreen } from './components/WorkflowExecutionScreens';
import { LearnScreen, TutorialScreen, DemoWorkflowsScreen } from './components/LearningScreens';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="antialiased text-slate-900 dark:text-white bg-background-light dark:bg-background-dark min-h-screen font-display selection:bg-primary/30">
        <Routes>
            {/* Onboarding */}
            <Route path={AppRoutes.SPLASH} element={<SplashScreen />} />
            <Route path={AppRoutes.WELCOME} element={<WelcomeScreen />} />
            <Route path={AppRoutes.INFO_NO_TRICKS} element={<NoTricksScreen />} />
            <Route path={AppRoutes.INFO_HOW_IT_WORKS} element={<HowItWorksScreen />} />

            {/* Main Tabs */}
            <Route path={AppRoutes.LIBRARY} element={<LibraryScreen />} />
            <Route path={AppRoutes.SETTINGS} element={<SettingsScreen />} />
            <Route path={AppRoutes.LEARN} element={<LearnScreen />} />
            <Route path={AppRoutes.TUTORIAL} element={<TutorialScreen />} />
            <Route path={AppRoutes.DEMOS} element={<DemoWorkflowsScreen />} />

            {/* Creation Flow */}
            <Route path={AppRoutes.CREATE} element={<CreateWorkflowScreen />} />
            <Route path={AppRoutes.CREATE_DESCRIBE} element={<DescribeWorkflowScreen />} />
            <Route path={AppRoutes.CREATE_EVIDENCE} element={<BuildEvidenceScreen />} />
            <Route path={AppRoutes.REVIEW_EVIDENCE} element={<ReviewEvidenceScreen />} />
            <Route path={AppRoutes.REVIEW_UNDERSTANDING} element={<ReviewUnderstandingScreen />} />
            <Route path={AppRoutes.PROPOSED_WORKFLOW} element={<ProposedWorkflowScreen />} />

            {/* Workflow Execution */}
            <Route path={AppRoutes.WORKFLOW_DETAIL} element={<WorkflowDetailScreen />} />
            <Route path={AppRoutes.RUN_WORKFLOW} element={<RunWorkflowScreen />} />
            <Route path={AppRoutes.WORKFLOW_READY} element={<WorkflowReadyScreen />} />
            <Route path={AppRoutes.STEP_EXECUTION} element={<StepExecutionScreen />} />
            <Route path={AppRoutes.WORKFLOW_COMPLETED} element={<WorkflowCompletedScreen />} />

        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;