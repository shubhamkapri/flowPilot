import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../types';
import { BottomNav } from './BottomNav';

export const LibraryScreen: React.FC = () => {
    const navigate = useNavigate();
    
    const workflows = [
        { id: 'daily-standup', title: 'Daily Standup Report', time: 'Ran 2h ago', icon: 'edit_document', color: 'blue' },
        { id: 'invoice-ai', title: 'Invoice Extractor AI', time: 'Modified yesterday', icon: 'auto_awesome', color: 'purple' },
        { id: 'client-outreach', title: 'Client Outreach', time: 'Scheduled: 9:00 AM', icon: 'send', color: 'emerald' },
        { id: 'crm-sync', title: 'Data Sync: CRM', time: 'Needs review', icon: 'dataset', color: 'orange', status: 'warning' },
        { id: 'weekly-digest', title: 'Weekly Digest (Draft)', time: 'Edited 5m ago', icon: 'draft', color: 'slate', opacity: true },
    ];

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col max-w-md mx-auto bg-background-light dark:bg-background-dark">
            <header className="flex items-center px-4 py-3 justify-between z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md sticky top-0">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-primary/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDifHeRBZlurUVZImRT9hr8YI02Yldu0E14HSS7UfCZk-fbbmXXYBSRo_pybgXElIkJ2-TkWHkAK0dyfiKnQpT-F8t4huCYdD1tn1b93cuDrqCdLg9AW7Q5VFfs0O80YVB5EtVmcGbDYJfRqcxvOHDOJNY8ZUrFIGuFvTtVObycqeLGAcp5mlEkq8BGuXBOvF8IggZTDziHx9ahcAR_80MgyRAg3RlQK14Kt7lvhNZnzgssuGkueEGnZmxLhgSQ7ODbnaPdvsuEnVdA")' }}></div>
                        <div className="absolute bottom-0 right-0 size-3 bg-primary border-2 border-background-dark rounded-full"></div>
                    </div>
                    <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Library</h1>
                </div>
                <button onClick={() => navigate(AppRoutes.SETTINGS)} className="flex items-center justify-center size-10 rounded-full hover:bg-slate-200 dark:hover:bg-surface-highlight text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[24px]">settings</span>
                </button>
            </header>
            
            <div className="px-4 py-2">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">search</span>
                    </div>
                    <input type="text" className="block w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-surface-dark border-transparent border dark:border-transparent focus:border-primary/50 focus:ring-0 dark:focus:bg-surface-highlight text-sm text-slate-900 dark:text-white placeholder-slate-500 transition-all shadow-sm" placeholder="Search workflows..." />
                </div>
            </div>

            <div className="flex gap-2 px-4 py-2 overflow-x-auto no-scrollbar">
                <button className="flex items-center justify-center px-4 h-9 rounded-full bg-primary text-white text-sm font-medium whitespace-nowrap shadow-lg shadow-primary/20 transition-transform active:scale-95">All</button>
                {['Favorites', 'Integrations', 'Drafts', 'Archived'].map(filter => (
                     <button key={filter} className="flex items-center justify-center px-4 h-9 rounded-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 text-sm font-medium whitespace-nowrap hover:bg-slate-100 dark:hover:bg-surface-highlight transition-colors active:scale-95">{filter}</button>
                ))}
            </div>

            <main className="flex-1 overflow-y-auto pb-24 pt-2 px-4 space-y-3 no-scrollbar">
                <div className="flex items-center justify-between pt-2 pb-1">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Recently Used</h3>
                </div>
                
                {workflows.slice(0,2).map((wf) => (
                    <div key={wf.id} onClick={() => navigate(AppRoutes.WORKFLOW_DETAIL.replace(':id', wf.id))} className="group relative flex items-center justify-between p-4 rounded-xl bg-white dark:bg-surface-dark hover:bg-slate-50 dark:hover:bg-surface-highlight transition-all duration-300 border border-slate-200 dark:border-slate-800/50 hover:border-primary/30 shadow-sm cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className={`flex items-center justify-center size-12 rounded-lg bg-${wf.color}-500/10 text-${wf.color}-500 group-hover:scale-110 transition-transform duration-300`}>
                                <span className="material-symbols-outlined text-[24px]">{wf.icon}</span>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-base font-semibold text-slate-900 dark:text-white leading-tight mb-1 group-hover:text-primary transition-colors">{wf.title}</h4>
                                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                                    <span className="material-symbols-outlined text-[14px]">history</span>
                                    <span>{wf.time}</span>
                                </div>
                            </div>
                        </div>
                        <button className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all active:scale-90">
                            <span className="material-symbols-outlined text-[24px] translate-x-0.5">play_arrow</span>
                        </button>
                    </div>
                ))}

                <div className="flex items-center justify-between pt-4 pb-1">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">All Workflows</h3>
                </div>

                {workflows.slice(2).map((wf) => (
                     <div key={wf.id} onClick={() => navigate(AppRoutes.WORKFLOW_DETAIL.replace(':id', wf.id))} className={`group relative flex items-center justify-between p-4 rounded-xl bg-white dark:bg-surface-dark hover:bg-slate-50 dark:hover:bg-surface-highlight transition-all duration-300 border border-slate-200 dark:border-slate-800/50 hover:border-primary/30 shadow-sm cursor-pointer ${wf.opacity ? 'opacity-75' : ''}`}>
                        <div className="flex items-center gap-4">
                            <div className={`flex items-center justify-center size-12 rounded-lg bg-${wf.color}-500/10 text-${wf.color}-500 group-hover:scale-110 transition-transform duration-300`}>
                                <span className="material-symbols-outlined text-[24px]">{wf.icon}</span>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-base font-semibold text-slate-900 dark:text-white leading-tight mb-1 group-hover:text-primary transition-colors">{wf.title}</h4>
                                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                                    <span className={`material-symbols-outlined text-[14px] ${wf.status === 'warning' ? 'text-orange-500' : ''}`}>{wf.status === 'warning' ? 'error' : 'schedule'}</span>
                                    <span className={wf.status === 'warning' ? 'text-orange-500' : ''}>{wf.time}</span>
                                </div>
                            </div>
                        </div>
                        <button className="flex items-center justify-center size-10 rounded-full bg-slate-200 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all active:scale-90">
                             <span className="material-symbols-outlined text-[24px]">{wf.status === 'warning' ? 'more_horiz' : (wf.icon === 'draft' ? 'arrow_forward' : 'play_arrow')}</span>
                        </button>
                    </div>
                ))}

                <div className="h-20"></div>
            </main>
            <BottomNav />
        </div>
    );
};

interface SectionProps {
    title?: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
    <section className="px-4 mb-6">
        {title && <h3 className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 px-2">{title}</h3>}
        <div className="bg-white dark:bg-white/5 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-white/5 divide-y divide-slate-100 dark:divide-white/5">
            {children}
        </div>
    </section>
);

interface ItemProps {
    icon: string;
    label: string;
    danger?: boolean;
    subLabel?: string;
}

const Item: React.FC<ItemProps> = ({ icon, label, danger, subLabel }) => (
    <button className={`w-full flex items-center gap-4 px-4 py-3.5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group text-left ${danger ? 'hover:bg-red-50 dark:hover:bg-red-900/10' : ''}`}>
            <div className={`flex items-center justify-center rounded-lg shrink-0 size-9 transition-colors ${danger ? 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-500' : 'bg-blue-500/10 dark:bg-white/10 text-primary dark:text-white group-hover:bg-primary group-hover:text-white'}`}>
            <span className="material-symbols-outlined text-[20px]">{icon}</span>
            </div>
            <div className="flex-1 flex justify-between items-center">
                <p className={`text-base font-medium ${danger ? 'text-red-600 dark:text-red-500' : 'text-slate-900 dark:text-white'}`}>{label}</p>
                {subLabel && <p className="text-slate-500 text-sm mr-2">{subLabel}</p>}
            </div>
            <span className={`material-symbols-outlined text-[20px] ${danger ? 'text-red-300 dark:text-red-800' : 'text-slate-400'}`}>navigate_next</span>
    </button>
);

export const SettingsScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased min-h-screen flex flex-col">
            <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-white/5">
                <div className="w-12"></div>
                <h2 className="text-lg font-bold leading-tight tracking-tight text-center flex-1">Settings</h2>
                <button onClick={() => navigate(AppRoutes.LIBRARY)} className="w-12 flex items-center justify-end text-primary font-bold text-base hover:opacity-80 transition-opacity">Done</button>
            </header>

            <main className="flex-1 w-full max-w-lg mx-auto pb-24">
                 <section className="p-4 mt-2">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-white/5 shadow-sm border border-slate-100 dark:border-white/5">
                        <div className="bg-center bg-no-repeat bg-cover rounded-full h-16 w-16 shadow-inner ring-2 ring-primary/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKsEZTjqGGImWQHM-afhAU886Ef9CngAzt74dPWiMGM7PYGsSxc1bHa5Y6SMB4UHD_xnEp_mN4V0T59-8X9cfeqEl663QJOGXRMEbr48UsBOWn3UmFvrCvWonlJKhIpoHHxhlycGFq40-LoFtnpQnse02f7Le1-JXFI83qOhWBS7vH_vxIvomcHTRYIGkOGm0SYDM5kEPCHhexYYCJB2dRcy0U4_JLfvNnLqwDXq4WGBFLR8nP9HUYfzft8F0-Stgc0jy-SJaWIdWP")' }}></div>
                        <div className="flex flex-col justify-center flex-1">
                            <p className="text-xl font-bold leading-tight text-slate-900 dark:text-white">Alex Chen</p>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs font-semibold bg-primary/20 text-primary px-2 py-0.5 rounded-full">Pro Plan</span>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">alex.chen@flowpilot.ai</p>
                            </div>
                        </div>
                        <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                    </div>
                 </section>

                 <Section title="Data Management">
                    <Item icon="download" label="Import Workflow" />
                    <Item icon="upload" label="Export Workflows" />
                 </Section>

                 <Section title="App Info">
                     <Item icon="info" label="About FlowPilot" subLabel="v1.0.2" />
                     <Item icon="security" label="Privacy & Data Use" />
                 </Section>

                 <section className="px-4 mb-8">
                    <h3 className="text-red-500/80 text-xs font-bold uppercase tracking-wider mb-2 px-2">Danger Zone</h3>
                    <div className="bg-white dark:bg-white/5 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-white/5">
                        <Item icon="delete_forever" label="Reset App" danger />
                    </div>
                 </section>

                 <div className="text-center pb-8">
                     <p className="text-slate-400 dark:text-slate-600 text-xs font-medium">FlowPilot AI Core v2.4</p>
                     <p className="text-slate-300 dark:text-slate-700 text-[10px] mt-1">© 2024 FlowPilot Inc.</p>
                 </div>
            </main>
            <BottomNav />
        </div>
    );
};