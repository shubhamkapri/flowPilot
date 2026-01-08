export enum AppRoutes {
    SPLASH = "/",
    WELCOME = "/welcome",
    LIBRARY = "/library",
    CREATE = "/create",
    CREATE_DESCRIBE = "/create/describe",
    CREATE_EVIDENCE = "/create/evidence",
    REVIEW_EVIDENCE = "/create/review-evidence",
    REVIEW_UNDERSTANDING = "/create/review-understanding",
    PROPOSED_WORKFLOW = "/create/proposed",
    WORKFLOW_DETAIL = "/workflow/:id",
    RUN_WORKFLOW = "/workflow/:id/run",
    WORKFLOW_READY = "/workflow/:id/ready",
    STEP_EXECUTION = "/workflow/:id/execute",
    WORKFLOW_COMPLETED = "/workflow/:id/completed",
    LEARN = "/learn",
    TUTORIAL = "/learn/tutorial",
    DEMOS = "/demos",
    SETTINGS = "/settings",
    INFO_NO_TRICKS = "/info/no-tricks",
    INFO_HOW_IT_WORKS = "/info/how-it-works",
}

export interface Workflow {
    id: string;
    title: string;
    description?: string;
    status?: 'draft' | 'active' | 'review';
    lastRan?: string;
    icon: string;
    iconColor?: string;
}

export interface NavItem {
    icon: string;
    label: string;
    route: string;
    active?: boolean;
}