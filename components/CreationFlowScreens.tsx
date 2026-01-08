import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../types';
import { BottomNav } from './BottomNav';

export const CreateWorkflowScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
            <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md">
                <button onClick={() => navigate(AppRoutes.LIBRARY)} className="flex size-10 shrink-0 items-center justify-center cursor-pointer rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-slate-900 dark:text-white">
                    <span className="material-symbols-outlined">arrow_back_ios_new</span>
                </button>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">Create Workflow</h2>
            </div>
            
            <div className="flex-1 p-4 flex flex-col gap-6 max-w-md mx-auto w-full pb-20">
                {/* Describe Card */}
                <div onClick={() => navigate(AppRoutes.CREATE_DESCRIBE)} className="group relative flex flex-col items-stretch justify-start rounded-xl shadow-lg bg-white dark:bg-[#182935] overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 active:scale-[0.99] border border-transparent dark:border-white/5 cursor-pointer">
                    <div className="w-full h-36 relative overflow-hidden">
                        <div className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBe4Du0b56IGWa6n_hQ3PPWV8wa1BI9j6hD7gY0XFxrbR74zrxZeLxgbr2wnaZWzrioi9JO5-SXvqF1tiruAmUafHQ6PhXC3prPnSB0NJp16x9MsPTjW902vbnVPFjmDu6yGqLni9nsV8kkyZGr7vKBuxmw3g0DRrym4mKKa9EXcmTWXkI2qMl6vwjWZaWNIX_jzO_my9IN4nLXvXKJOkeDljGiIA2AVOJpfGFK61qUd0CczgN0jzIdvYnO14--HX1De3SlJuBfD5cO")' }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#182935] to-transparent"></div>
                    </div>
                    <div className="flex w-full grow flex-col items-stretch justify-center gap-1 p-5 pt-0 z-10 -mt-6">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="flex items-center justify-center size-10 rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                                <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                            </div>
                        </div>
                        <p className="text-xl font-bold leading-tight mt-1">Describe in Words</p>
                        <p className="text-slate-500 dark:text-[#8eb3cc] text-base font-normal leading-relaxed mt-1">Explain what you do once. FlowPilot structures it.</p>
                        <div className="mt-5">
                            <button className="w-full flex items-center justify-center rounded-lg h-11 px-4 bg-primary text-white text-sm font-semibold tracking-wide hover:bg-blue-500 transition-colors shadow-lg shadow-primary/20">Continue</button>
                        </div>
                    </div>
                </div>

                {/* Evidence Card */}
                <div onClick={() => navigate(AppRoutes.CREATE_EVIDENCE)} className="group relative flex flex-col items-stretch justify-start rounded-xl shadow-lg bg-white dark:bg-[#182935] overflow-hidden transition-all duration-300 active:scale-[0.99] border border-transparent dark:border-white/5 cursor-pointer">
                    <div className="w-full h-36 relative overflow-hidden">
                        <div className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCcMqSP1_KI8zPhddDZNqEyBD_ubZOzzqsOJLPOjtIYp0tg1cETTEOhEprIVfXyhiChT97A-fcmTdndJMavjeF4S3ZVN64fZ6oXjGXDp8SCBGt68k-lR-nQ_rcwmkP0BaJphbYouN0aT3-UI5P7uT0Wp9Lub3lTCLku23IJTmTZAqCpldbl9mZw7htrg0VaHYuPne7s5boPhM4beCvFQG6GVyHyNe0yisTExNbkppf54AF7tg3VrrL2rt31bK95NsVq3okRu8SUsHLs")' }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#182935] to-transparent"></div>
                    </div>
                    <div className="flex w-full grow flex-col items-stretch justify-center gap-1 p-5 pt-0 z-10 -mt-6">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center justify-center size-10 rounded-full bg-slate-100 dark:bg-[#253a4b] text-primary dark:text-[#8eb3cc]">
                                <span className="material-symbols-outlined text-[20px]">folder_open</span>
                            </div>
                            <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wider border border-primary/20">Advanced</span>
                        </div>
                        <p className="text-xl font-bold leading-tight mt-1">Build From Files</p>
                        <p className="text-slate-500 dark:text-[#8eb3cc] text-base font-normal leading-relaxed mt-1">Upload files or folders that show your process.</p>
                        <div className="mt-5">
                            <button className="w-full flex items-center justify-center rounded-lg h-11 px-4 bg-slate-50 dark:bg-transparent border-2 border-slate-200 dark:border-primary/40 text-slate-700 dark:text-primary text-sm font-semibold tracking-wide hover:bg-slate-100 dark:hover:bg-primary/10 transition-colors">Upload Evidence</button>
                        </div>
                    </div>
                </div>
            </div>
            <BottomNav />
        </div>
    );
};

export const DescribeWorkflowScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark text-slate-900 dark:text-white border-x border-slate-200 dark:border-slate-800 shadow-2xl">
            <div className="flex items-center px-4 py-3 pb-2 justify-between sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
                <button onClick={() => navigate(AppRoutes.CREATE)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                    <span className="material-symbols-outlined text-[24px]">close</span>
                </button>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">New Workflow</h2>
            </div>
            
            <div className="flex-1 flex flex-col px-5 pt-4 pb-20">
                <h2 className="tracking-tight text-[28px] font-bold leading-tight text-left mb-2">Describe your repetitive task</h2>
                <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed mb-6">Tell FlowPilot what you do, step-by-step. We'll automate the rest.</p>
                
                <div className="flex flex-col flex-1 w-full gap-4 relative group">
                    <label className="flex flex-col w-full flex-1 relative">
                        <textarea autoFocus className="form-input flex w-full h-full min-h-[240px] resize-none rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 bg-white dark:bg-[#182935] border border-slate-200 dark:border-[#2f516a] focus:border-primary focus:ring-1 focus:ring-primary p-5 text-lg font-normal leading-relaxed shadow-sm transition-all duration-200 ease-in-out" placeholder="I generate AI prompts, create images, convert them to videos, then edit."></textarea>
                    </label>
                </div>

                <div className="mt-6">
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 px-1">Quick Templates</p>
                    <div className="flex gap-3 flex-wrap">
                        {['Data Entry', 'Social Media', 'Email Response'].map((tmpl, i) => (
                            <button key={i} className="group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#21394a] border border-slate-200 dark:border-[#2f516a] hover:border-primary/50 dark:hover:border-primary/50 pl-3 pr-4 transition-all active:scale-95">
                                <span className="material-symbols-outlined text-[18px] text-primary">{i === 0 ? 'table_chart' : i === 1 ? 'share' : 'mail'}</span>
                                <p className="text-slate-700 dark:text-slate-200 text-sm font-medium leading-normal">{tmpl}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-light dark:from-background-dark via-background-light dark:via-background-dark to-transparent z-50 max-w-md mx-auto">
                <button onClick={() => navigate(AppRoutes.REVIEW_UNDERSTANDING)} className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-base h-12 shadow-lg shadow-primary/25 active:scale-[0.98] transition-all transform">
                    <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                    Analyze Workflow
                </button>
            </div>
        </div>
    );
};

export const BuildEvidenceScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col max-w-md mx-auto shadow-2xl overflow-hidden bg-background-light dark:bg-background-dark border-x border-slate-200 dark:border-slate-800">
            <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
                 <button onClick={() => navigate(AppRoutes.CREATE)} className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
                </button>
                <h2 className="text-base font-semibold leading-tight tracking-tight flex-1 text-center pr-10">Build Workflow</h2>
            </div>
            
            <div className="flex-1 flex flex-col px-6 pt-4 pb-8">
                <div className="flex justify-center mb-6 mt-4">
                    <div className="relative flex items-center justify-center size-24 rounded-full bg-surface-dark border border-slate-700/50 shadow-inner">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent blur-xl"></div>
                        <span className="material-symbols-outlined text-primary text-[40px] relative z-10">topic</span>
                        <div className="absolute -right-2 top-0 size-8 rounded-full bg-surface-dark border border-slate-700/50 flex items-center justify-center shadow-lg">
                            <span className="material-symbols-outlined text-emerald-400 text-[16px]">check_circle</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-3 mb-8">
                    <h1 className="text-slate-900 dark:text-white text-[28px] font-bold leading-tight text-center tracking-tight">Build Workflow<br/>From Evidence</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-relaxed text-center max-w-[280px]">Upload files or folders that represent how you do the task.</p>
                </div>

                <div className="w-full mb-6">
                    <div className="group relative flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-slate-300 dark:border-[#2f516a] bg-slate-50 dark:bg-surface-dark/50 px-6 py-10 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5">
                        <div className="flex items-center justify-center gap-4 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500">
                             <span className="material-symbols-outlined text-4xl text-slate-400 dark:text-slate-500">image</span>
                             <span className="material-symbols-outlined text-5xl text-slate-400 dark:text-slate-500">description</span>
                             <span className="material-symbols-outlined text-4xl text-slate-400 dark:text-slate-500">movie</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <p className="text-slate-900 dark:text-white text-base font-medium">Drag & Drop Evidence</p>
                            <p className="text-slate-500 dark:text-slate-400 text-xs">or use the buttons below</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 mb-8 w-full">
                    <button onClick={() => navigate(AppRoutes.REVIEW_EVIDENCE)} className="relative w-full overflow-hidden rounded-xl h-14 bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group">
                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                         <div className="flex items-center justify-center gap-3 h-full px-6">
                            <span className="material-symbols-outlined">upload_file</span>
                            <span className="text-base font-bold tracking-wide">Select Files</span>
                         </div>
                    </button>
                    <button className="w-full rounded-xl h-14 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:border-primary/50 hover:text-primary dark:hover:text-primary active:bg-slate-50 dark:active:bg-slate-800 transition-all duration-200">
                        <div className="flex items-center justify-center gap-3 h-full px-6">
                            <span className="material-symbols-outlined">folder_open</span>
                            <span className="text-base font-semibold tracking-wide">Select Folder</span>
                        </div>
                    </button>
                </div>
                
                <div className="mt-auto">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 dark:bg-primary/10 border border-blue-100 dark:border-primary/20">
                         <span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0">info</span>
                         <p className="text-sm text-slate-600 dark:text-slate-300 leading-normal">
                             <span className="font-semibold text-slate-900 dark:text-white">Pro Tip:</span> Best results come from clear prompts, full-screen screenshots, or short video clips of the workflow.
                         </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ReviewEvidenceScreen: React.FC = () => {
    const navigate = useNavigate();
    const files = [
        { name: 'Q3 Financial Reports', size: '12 items', type: 'folder', color: 'blue' },
        { name: 'Screenshot_2023.png', size: '2.4 MB', type: 'image', color: 'purple' },
        { name: 'Screen_Recording.mp4', size: '14.5 MB', type: 'movie', color: 'pink', badge: '02:14' },
        { name: 'Project_Notes.txt', size: '12 KB', type: 'description', color: 'emerald' },
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display min-h-screen flex flex-col relative overflow-x-hidden antialiased selection:bg-primary/30">
            <div className="sticky top-0 z-20 flex items-center justify-between px-4 pt-6 pb-2 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md">
                <button onClick={() => navigate(AppRoutes.CREATE_EVIDENCE)} className="group flex size-10 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                     <span className="material-symbols-outlined text-slate-900 dark:text-white" style={{fontSize: '24px'}}>arrow_back_ios_new</span>
                </button>
                <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Review Evidence</h2>
            </div>
            
            <main className="flex-1 flex flex-col px-4 pb-32">
                 <div className="py-4">
                    <p className="text-slate-500 dark:text-[#8eb8cc] text-sm font-medium leading-normal text-center bg-slate-200/50 dark:bg-white/5 py-1.5 px-3 rounded-full mx-auto w-fit">4 Files selected • 120MB</p>
                 </div>

                 <div className="flex flex-col gap-3">
                    {files.map((file, i) => (
                        <div key={i} className="group relative flex items-center gap-4 bg-white dark:bg-card-dark p-4 rounded-xl shadow-sm border border-slate-200 dark:border-white/5 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300">
                             <div className={`flex items-center justify-center rounded-lg bg-${file.color}-100 dark:bg-${file.color}-900/20 text-${file.color}-600 dark:text-${file.color}-400 shrink-0 size-12`}>
                                 <span className="material-symbols-outlined" style={{fontSize: '24px'}}>{file.type}</span>
                             </div>
                             <div className="flex flex-col justify-center flex-1 min-w-0">
                                 <p className="text-slate-900 dark:text-white text-base font-semibold leading-normal truncate">{file.name}</p>
                                 <div className="flex items-center gap-2">
                                     <p className="text-slate-500 dark:text-[#8eb8cc] text-sm font-normal leading-normal truncate">{file.size}</p>
                                     {file.badge && <span className="inline-flex items-center rounded-md bg-slate-100 dark:bg-black/40 px-1.5 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-300 ring-1 ring-inset ring-slate-500/10">{file.badge}</span>}
                                 </div>
                             </div>
                             <button className="shrink-0 size-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-400 dark:text-slate-500">
                                 <span className="material-symbols-outlined" style={{fontSize: '24px'}}>more_vert</span>
                             </button>
                        </div>
                    ))}
                 </div>
            </main>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark dark:to-transparent z-10 pt-12">
                <button onClick={() => navigate(AppRoutes.REVIEW_UNDERSTANDING)} className="w-full relative overflow-hidden group bg-primary hover:bg-primary/90 text-white h-14 rounded-xl shadow-[0_4px_20px_-4px_rgba(6,168,249,0.5)] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3">
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="material-symbols-outlined relative z-10 animate-pulse">auto_awesome</span>
                    <span className="text-lg font-bold tracking-wide relative z-10">Analyze Evidence</span>
                </button>
            </div>
        </div>
    );
};

export const ReviewUnderstandingScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
            <header className="sticky top-0 z-10 flex items-center justify-between bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 pt-6 lg:pt-4 border-b border-gray-200 dark:border-white/5">
                <button onClick={() => navigate(AppRoutes.CREATE)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-slate-900 dark:text-white">arrow_back</span>
                </button>
                <h2 className="text-base font-semibold leading-tight tracking-wide uppercase text-slate-500 dark:text-slate-400">Review</h2>
                <div className="size-10"></div>
            </header>

            <main className="flex-1 flex flex-col px-5 pb-32">
                <div className="py-6">
                    <h1 className="text-3xl font-bold leading-tight tracking-tight">Here’s what I <span className="text-primary">understood</span></h1>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Review the AI's interpretation before generating your workflow.</p>
                </div>

                <section className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-lg font-bold">Detected Goal</h2>
                        <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-600 dark:text-green-400 ring-1 ring-inset ring-green-600/20">
                            <span className="material-symbols-outlined text-[14px]">verified</span>98% Match
                        </span>
                    </div>
                    <div className="group relative rounded-2xl bg-white dark:bg-surface-dark p-1 ring-1 ring-slate-200 dark:ring-white/10 transition-all focus-within:ring-2 focus-within:ring-primary shadow-sm dark:shadow-none">
                        <div className="absolute right-4 top-4 text-slate-400">
                             <span className="material-symbols-outlined text-sm">edit</span>
                        </div>
                        <textarea readOnly className="block w-full resize-none border-0 bg-transparent py-3 pl-4 pr-10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6 min-h-[100px]" defaultValue="Automate sending monthly invoices to clients from Google Drive folders and notify me on Slack."></textarea>
                    </div>
                </section>

                <section className="mb-6 grid grid-cols-1 gap-4">
                     <div>
                        <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider text-xs">Category</h2>
                        <div className="flex items-center gap-3 rounded-xl bg-white dark:bg-surface-dark p-4 ring-1 ring-slate-200 dark:ring-white/10 shadow-sm dark:shadow-none">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                                <span className="material-symbols-outlined">attach_money</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium">Finance & Accounting</span>
                                <span className="text-xs text-slate-500 dark:text-slate-400">Invoicing Sub-category</span>
                            </div>
                        </div>
                     </div>
                </section>

                <section className="mb-6">
                     <div className="flex items-center justify-between mb-3">
                        <h2 className="text-lg font-bold">App Sequence</h2>
                        <button className="text-xs font-medium text-primary hover:text-primary-dark">Edit Flow</button>
                     </div>
                     <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
                         {[
                             { name: 'Drive', icon: 'folder', color: 'blue' },
                             { name: 'Gmail', icon: 'mail', color: 'red' },
                             { name: 'Slack', icon: 'chat', color: 'purple' }
                         ].map((app, i) => (
                             <React.Fragment key={i}>
                                 <div className="flex shrink-0 items-center gap-2 rounded-xl bg-white dark:bg-surface-dark p-2 pr-4 ring-1 ring-slate-200 dark:ring-white/10 shadow-sm dark:shadow-none">
                                     <div className={`flex size-8 items-center justify-center rounded-lg bg-${app.color}-500/20`}>
                                         <span className={`material-symbols-outlined text-${app.color}-400 text-sm`}>{app.icon}</span>
                                     </div>
                                     <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{app.name}</span>
                                 </div>
                                 {i < 2 && <span className="material-symbols-outlined text-slate-400 text-sm shrink-0">arrow_forward</span>}
                             </React.Fragment>
                         ))}
                     </div>
                </section>
                
                <section>
                    <h2 className="text-lg font-bold mb-3">Variables to capture</h2>
                    <div className="flex flex-col gap-3">
                        {[
                            { label: 'Client Name', source: 'Source: Filename structure', icon: 'person', checked: true },
                            { label: 'Invoice Date', source: 'Source: File metadata', icon: 'calendar_today', checked: true },
                            { label: 'Email Body', source: 'Source: AI Generation (Optional)', icon: 'description', checked: false },
                        ].map((v, i) => (
                            <label key={i} className="relative flex cursor-pointer items-start gap-3 rounded-xl bg-white dark:bg-surface-dark p-4 ring-1 ring-slate-200 dark:ring-white/10 shadow-sm dark:shadow-none transition-colors hover:bg-slate-50 dark:hover:bg-surface-highlight">
                                <div className="flex h-6 items-center">
                                    <input type="checkbox" defaultChecked={v.checked} className="h-5 w-5 rounded border-slate-300 bg-transparent text-primary focus:ring-offset-surface-dark focus:ring-primary dark:border-white/20 dark:checked:bg-primary" />
                                </div>
                                <div className="flex flex-1 flex-col">
                                    <span className="text-sm font-medium">{v.label}</span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">{v.source}</span>
                                </div>
                                <span className="material-symbols-outlined text-slate-400 text-lg">{v.icon}</span>
                            </label>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="fixed bottom-0 left-0 right-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-slate-200 dark:border-white/5 p-5 pb-8">
                <button onClick={() => navigate(AppRoutes.PROPOSED_WORKFLOW)} className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-white shadow-glow transition-all hover:bg-primary-dark active:scale-[0.98]">
                    <span>Confirm & Generate Workflow</span>
                    <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">auto_awesome</span>
                </button>
            </footer>
        </div>
    );
};

export const ProposedWorkflowScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
            <header className="sticky top-0 z-10 flex items-center justify-between bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 border-b border-slate-200 dark:border-slate-800">
                <button onClick={() => navigate(AppRoutes.REVIEW_UNDERSTANDING)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                    <span className="material-symbols-outlined text-slate-900 dark:text-white">arrow_back_ios_new</span>
                </button>
                <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Proposed Workflow</h2>
            </header>
            
            <main className="flex-1 pb-32">
                <div className="px-6 py-6">
                    <h3 className="sr-only">Workflow Timeline</h3>
                    <div className="grid grid-cols-[48px_1fr] gap-x-0">
                        {/* Steps */}
                        {[
                            { title: 'Trigger: New Email Received', sub: 'Listening to inbox /Finance', icon: 'mail', iconBg: 'bg-primary/10', iconBorder: 'border-primary/20', iconColor: 'text-primary' },
                            { title: 'Action: Extract Invoice PDF', sub: 'Parses attachment using OCR', icon: 'description', iconBg: 'bg-slate-200 dark:bg-surface-dark', iconBorder: 'border-slate-300 dark:border-slate-700', iconColor: 'text-slate-600 dark:text-slate-300' },
                            { title: 'Action: Upload to Drive', sub: 'Dest: /Finance/Invoices/2023', icon: 'cloud_upload', iconBg: 'bg-slate-200 dark:bg-surface-dark', iconBorder: 'border-slate-300 dark:border-slate-700', iconColor: 'text-slate-600 dark:text-slate-300', last: true }
                        ].map((step, i) => (
                            <React.Fragment key={i}>
                                <div className="flex flex-col items-center pt-1">
                                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border ${step.iconBg} ${step.iconBorder} ${step.iconColor} z-10`}>
                                        <span className="material-symbols-outlined text-[20px]">{step.icon}</span>
                                    </div>
                                    {!step.last && <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-full grow my-1"></div>}
                                </div>
                                <div className={`flex flex-col ${step.last ? 'pb-2' : 'pb-8'} pt-1 pl-2`}>
                                    <p className="text-base font-semibold leading-normal">{step.title}</p>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal mt-1">{step.sub}</p>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="px-4 mb-6">
                    <div className="relative overflow-hidden rounded-xl bg-amber-50 dark:bg-[#1e293b] border border-amber-200 dark:border-amber-500/20 shadow-sm">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
                        <div className="p-4 flex items-start gap-3">
                            <div className="shrink-0 text-amber-600 dark:text-amber-500 mt-0.5">
                                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-bold leading-tight">AI Assumption</p>
                                <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-relaxed">
                                    We assumed the invoice date format is <span className="font-mono text-xs bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded text-slate-800 dark:text-slate-300">DD/MM/YYYY</span> based on previous files found in this folder.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <h3 className="px-6 pb-3 pt-2 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Clarifying Questions</h3>
                    {[
                        { q: 'Notify finance team via Slack?', sub: 'Channel: #finance-alerts', checked: true },
                        { q: 'Archive email after processing?', checked: false },
                        { q: 'Require approval for amounts > $1k?', checked: true }
                    ].map((item, i) => (
                        <div key={i} className={`flex items-center justify-between gap-4 bg-transparent px-6 py-4 ${i < 2 ? 'border-b border-slate-200 dark:border-slate-800/50' : ''}`}>
                            <div className="flex flex-col">
                                <p className="text-base font-medium leading-normal">{item.q}</p>
                                {item.sub && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{item.sub}</p>}
                            </div>
                            <div className="shrink-0">
                                <label className="relative flex h-[32px] w-[52px] cursor-pointer items-center rounded-full border-2 border-transparent bg-slate-300 dark:bg-slate-700 transition-colors duration-200 has-[:checked]:bg-primary has-[:checked]:border-primary hover:opacity-90">
                                    <input type="checkbox" defaultChecked={item.checked} className="peer invisible absolute" />
                                    <div className="absolute left-[2px] h-6 w-6 rounded-full bg-white shadow-sm transition-all duration-200 peer-checked:translate-x-5"></div>
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <div className="fixed bottom-0 left-0 right-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 pb-8 pt-4 px-4">
                <button onClick={() => navigate(AppRoutes.WORKFLOW_READY.replace(':id', 'daily-report-sync'))} className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 shadow-lg shadow-primary/25 transition-transform active:scale-[0.98] hover:bg-blue-500">
                    <span className="text-white text-base font-bold tracking-wide">Confirm & Save Workflow</span>
                    <span className="material-symbols-outlined text-white text-[20px]">check</span>
                </button>
            </div>
        </div>
    );
};