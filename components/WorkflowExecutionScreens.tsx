import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../types';

export const WorkflowDetailScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white pb-32 selection:bg-primary/30">
            <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-white/5">
                <button onClick={() => navigate(AppRoutes.LIBRARY)} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-slate-700 dark:text-white">
                    <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>arrow_back_ios_new</span>
                </button>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Workflow Details</span>
                <div className="w-10"></div>
            </nav>

            <main className="w-full max-w-lg mx-auto flex flex-col gap-6 px-4 pt-6">
                <header>
                    <div className="flex items-start justify-between mb-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                            <span className="material-symbols-outlined text-[14px]">science</span>
                            Demo
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">ID: #WF-2942</span>
                    </div>
                    <h1 className="text-3xl font-bold leading-tight tracking-tight mb-2 text-slate-900 dark:text-white">AI Short-Form Video Creation</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Last run 2 hours ago by System</p>
                </header>

                <section>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 ml-1">Workflow Goal</h3>
                    <div className="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-white/5 relative overflow-hidden group">
                         <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/20 transition-all duration-500"></div>
                         <p className="text-base leading-relaxed text-slate-700 dark:text-slate-200 relative z-10">
                            Generates a script, creates a voiceover, selects stock footage, and edits a 60-second vertical video for social media automatically.
                         </p>
                    </div>
                </section>

                <section>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 ml-1">App Sequence</h3>
                    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                         {[
                             { name: 'ChatGPT', sub: 'Scripting', icon: 'smart_toy', color: '#74aa9c' },
                             { name: 'ElevenLabs', sub: 'Voiceover', icon: 'record_voice_over', color: '#f97316' }, // Orange
                             { name: 'Pexels', sub: 'Visuals', icon: 'image', color: '#22c55e' }, // Green
                             { name: 'CapCut', sub: 'Editing', icon: 'movie_edit', color: '#ffffff' }
                         ].map((app, i, arr) => (
                             <React.Fragment key={i}>
                                <div className="flex-shrink-0 flex items-center gap-3 bg-white dark:bg-surface-dark pl-3 pr-4 py-3 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm">
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${app.color}20`, color: app.color === '#ffffff' ? 'white' : app.color }}>
                                        <span className="material-symbols-outlined text-lg">{app.icon}</span>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{app.sub}</div>
                                        <div className="text-sm font-semibold text-slate-900 dark:text-white">{app.name}</div>
                                    </div>
                                </div>
                                {i < arr.length - 1 && (
                                    <div className="flex items-center justify-center text-slate-300 dark:text-slate-600">
                                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                    </div>
                                )}
                             </React.Fragment>
                         ))}
                    </div>
                </section>

                <section>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 ml-1">Detected Variables</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Video Topic', 'Target Audience', 'Tone'].map((v, i) => (
                             <div key={i} className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-lg text-sm font-medium">
                                <span className="material-symbols-outlined text-[16px]">{i === 0 ? 'data_object' : i === 1 ? 'group' : 'tune'}</span>
                                {`{${v}}`}
                             </div>
                        ))}
                        <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 px-3 py-1.5 rounded-lg text-sm font-medium">
                            <span className="material-symbols-outlined text-[16px]">folder_open</span>
                            {`{Output Folder}`}
                        </div>
                    </div>
                </section>

                <section>
                     <div className="flex items-center justify-between mb-3 ml-1">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Abstract Steps</h3>
                        <span className="text-xs font-medium text-primary cursor-pointer hover:underline">View Logic Graph</span>
                     </div>
                     <div className="space-y-3">
                         {[
                             { id: 1, title: 'Generate Script Concept', sub: 'GPT-4 Turbo • ~400 tokens' },
                             { id: 2, title: 'Synthesize Audio', sub: 'ElevenLabs API • Adam Voice' },
                             { id: 3, title: 'Match Visual Assets', sub: 'Pexels Search • Abstract/Tech' },
                             { id: 4, title: 'Render Final Output', sub: 'Local Process • 1080x1920' },
                         ].map(step => (
                             <div key={step.id} className="group bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-white/5 overflow-hidden transition-all hover:border-primary/50">
                                 <button className="w-full flex items-center justify-between p-4 text-left">
                                     <div className="flex items-center gap-4">
                                         <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 font-bold text-sm border border-slate-200 dark:border-white/10 group-hover:border-primary/50 group-hover:text-primary transition-colors">
                                             {step.id}
                                         </div>
                                         <div>
                                             <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{step.title}</h4>
                                             <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{step.sub}</p>
                                         </div>
                                     </div>
                                     <span className="material-symbols-outlined text-slate-400 transition-transform group-hover:text-primary">expand_more</span>
                                 </button>
                             </div>
                         ))}
                     </div>
                </section>
            </main>

            <footer className="fixed bottom-0 left-0 w-full z-40">
                <div className="h-12 w-full bg-gradient-to-b from-transparent to-background-light dark:to-background-dark pointer-events-none"></div>
                <div className="bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl border-t border-slate-200 dark:border-white/5 p-4 pb-8">
                    <div className="max-w-lg mx-auto flex flex-col gap-3">
                        <button onClick={() => navigate(AppRoutes.RUN_WORKFLOW.replace(':id', 'demo'))} className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                             <span className="material-symbols-outlined">auto_fix_high</span>
                             Create Similar Workflow
                        </button>
                        <button onClick={() => navigate(AppRoutes.LIBRARY)} className="w-full bg-transparent hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 font-medium py-3.5 px-6 rounded-xl transition-colors">
                             Back
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export const RunWorkflowScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark font-display antialiased min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-white">
            <header className="flex items-center px-4 py-3 justify-between sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
                 <button onClick={() => navigate(-1)} className="text-black dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                     <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
                 </button>
                 <h2 className="text-black dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Run Workflow</h2>
                 <div className="size-10"></div>
            </header>

            <main className="flex-1 flex flex-col w-full max-w-[480px] mx-auto px-4 pb-24">
                <div className="py-4">
                    <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed">Configure your parameters to start the AI agent.</p>
                </div>

                <div className="flex flex-col gap-5 mt-2">
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-900 dark:text-white text-base font-medium leading-normal" htmlFor="topic">Topic</label>
                        <input className="form-input w-full rounded-xl border border-gray-300 dark:border-[#2f566a] bg-white dark:bg-surface-dark focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary h-14 px-4 text-base text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-text-secondary transition-all shadow-sm" id="topic" placeholder="e.g., Market Research" type="text" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-900 dark:text-white text-base font-medium leading-normal" htmlFor="style">Writing Style</label>
                        <div className="relative flex w-full items-center">
                             <input className="form-input w-full rounded-xl border border-gray-300 dark:border-[#2f566a] bg-white dark:bg-surface-dark focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary h-14 px-4 pr-12 text-base text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-text-secondary transition-all shadow-sm" id="style" placeholder="e.g., Professional" type="text" />
                             <div className="absolute right-0 top-0 bottom-0 flex items-center pr-4 pointer-events-none text-gray-400 dark:text-text-secondary">
                                 <span className="material-symbols-outlined">unfold_more</span>
                             </div>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-text-secondary px-1">Choose a preset or type your own style.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                         <label className="text-gray-900 dark:text-white text-base font-medium leading-normal" htmlFor="duration">Duration (mins)</label>
                         <div className="relative">
                             <input className="form-input w-full rounded-xl border border-gray-300 dark:border-[#2f566a] bg-white dark:bg-surface-dark focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary h-14 px-4 text-base text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-text-secondary transition-all shadow-sm" id="duration" placeholder="30" type="number" defaultValue="30" />
                             <div className="absolute right-0 top-0 bottom-0 flex items-center pr-4 pointer-events-none text-gray-400 dark:text-text-secondary">
                                 <span className="material-symbols-outlined text-[20px]">schedule</span>
                             </div>
                         </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-900 dark:text-white text-base font-medium leading-normal" htmlFor="platform">Target Platform</label>
                        <div className="relative">
                             <select className="form-select w-full rounded-xl border border-gray-300 dark:border-[#2f566a] bg-white dark:bg-surface-dark focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary h-14 px-4 pr-10 text-base text-gray-900 dark:text-white transition-all shadow-sm appearance-none" id="platform" defaultValue="">
                                 <option disabled value="">Select Platform</option>
                                 <option value="linkedin">LinkedIn</option>
                                 <option value="twitter">Twitter / X</option>
                                 <option value="medium">Medium</option>
                                 <option value="email">Email Newsletter</option>
                             </select>
                             <div className="absolute right-0 top-0 bottom-0 flex items-center pr-4 pointer-events-none text-gray-400 dark:text-text-secondary">
                                 <span className="material-symbols-outlined">expand_more</span>
                             </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="fixed bottom-0 left-0 w-full bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-[#2f566a] p-4 pb-8 z-20">
                <div className="max-w-[480px] mx-auto">
                    <button onClick={() => navigate(AppRoutes.STEP_EXECUTION.replace(':id', 'run-1'))} className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl shadow-[0_0_20px_-5px_rgba(6,168,249,0.5)] flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                        <span className="material-symbols-outlined">auto_awesome</span>
                        Generate Steps
                    </button>
                </div>
            </div>
            
            <div className="fixed top-20 right-[-100px] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] pointer-events-none -z-10"></div>
            <div className="fixed bottom-[-50px] left-[-50px] w-[200px] h-[200px] bg-cyan-500/10 rounded-full blur-[60px] pointer-events-none -z-10"></div>
        </div>
    );
};

export const WorkflowReadyScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden transition-colors duration-200">
             <div className="h-6 w-full shrink-0"></div>
             <div className="flex flex-1 flex-col items-center justify-center px-6 pt-10 pb-6 w-full max-w-md mx-auto">
                 <div className="group relative flex items-center justify-center mb-8">
                     <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-110"></div>
                     <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-background-light dark:bg-[#182935] border border-primary/30 shadow-[0_0_25px_-5px_rgba(6,148,249,0.5)]">
                         <span className="material-symbols-outlined text-primary text-[48px]">check_circle</span>
                     </div>
                 </div>
                 
                 <h1 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight text-center mb-3">Your workflow is ready</h1>
                 <p className="text-slate-600 dark:text-[#8eb3cc] text-base font-normal leading-normal text-center mb-10 max-w-[280px]">Ready to deploy 'Daily Report Sync' to your scheduled tasks.</p>
                 
                 <div className="w-full mb-auto">
                     <div className="flex items-center gap-4 rounded-xl bg-white dark:bg-[#182935] p-4 shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_0_4px_rgba(0,0,0,0.2)] border border-slate-200 dark:border-slate-700/50">
                         <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800 relative">
                             <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBkphZQXCbFXnbAHhtcAxtULwClO758BSgvVtFcawPkKv1LsLR2F__b8K1b0KKRm5rTAjHhJB_VCyv3ls2jCQG32wfovEdvRizJXP71oFtEGuOy0K1XXpL_0jdO_KcGvKjJ2dmUpFwceoJt_F8rw4pSCY2duerh8y7ipAPvXdWCCjCeVhQgMjhBhQPLnHvUkesTlZVD0ve2eYC3z72oIaosrRrZ9dFEFnWjozVSMdYRqVHYik7zY1NIU5ZWuFXhNBHx5xLR5zTmlbQU")' }}></div>
                         </div>
                         <div className="flex flex-col gap-1 flex-1 min-w-0">
                             <p className="text-slate-900 dark:text-white text-base font-bold leading-tight truncate">Daily Report Sync</p>
                             <div className="flex items-center gap-2">
                                 <span className="material-symbols-outlined text-primary text-[16px]">schema</span>
                                 <p className="text-slate-500 dark:text-[#8eb3cc] text-sm font-normal leading-normal">5 steps configured</p>
                             </div>
                         </div>
                         <div className="text-primary">
                             <span className="material-symbols-outlined">arrow_forward_ios</span>
                         </div>
                     </div>
                 </div>

                 <div className="flex w-full flex-col gap-3 mt-8">
                     <button onClick={() => navigate(AppRoutes.STEP_EXECUTION.replace(':id', 'daily-report'))} className="group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-6 bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 transition-all duration-200">
                         <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                         <span className="material-symbols-outlined mr-2">play_arrow</span>
                         <span className="text-base font-bold tracking-[0.015em] relative z-10">Run Workflow</span>
                     </button>
                     <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-6 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white border border-transparent hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-200">
                         <span className="material-symbols-outlined mr-2 text-slate-500 dark:text-[#8eb3cc]">edit</span>
                         <span className="text-base font-semibold tracking-[0.015em]">Edit Workflow</span>
                     </button>
                     <button onClick={() => navigate(AppRoutes.LIBRARY)} className="flex w-full cursor-pointer items-center justify-center rounded-lg h-12 px-6 mt-2 text-slate-500 dark:text-[#8eb3cc] hover:text-slate-900 dark:hover:text-white transition-colors duration-200">
                         <span className="text-sm font-medium">Back to Library</span>
                     </button>
                 </div>
             </div>
        </div>
    );
};

export const StepExecutionScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased h-screen flex flex-col overflow-hidden">
             <div className="shrink-0 pt-2">
                 <div className="flex items-center px-4 py-3 justify-between">
                     <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors">
                         <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                     </button>
                     <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Step Execution</h2>
                     <div className="size-10"></div>
                 </div>
                 <div className="flex flex-col gap-2 px-6 pt-2 pb-4">
                     <div className="flex justify-between items-end">
                         <h3 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight">Step 1 of 4</h3>
                         <span className="text-primary text-sm font-medium mb-1">25% Complete</span>
                     </div>
                     <div className="h-1.5 w-full bg-slate-200 dark:bg-surface-highlight rounded-full overflow-hidden">
                         <div className="h-full bg-primary rounded-full" style={{ width: '25%' }}></div>
                     </div>
                 </div>
             </div>
             
             <div className="flex-1 overflow-y-auto custom-scrollbar px-4 pb-24 space-y-4">
                 <div className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-white/5">
                     <div className="flex gap-4">
                         <div className="text-primary flex items-center justify-center rounded-xl bg-primary/10 shrink-0 size-12">
                             <span className="material-symbols-outlined text-[24px]">info</span>
                         </div>
                         <div className="flex flex-1 flex-col justify-center">
                             <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Step Intent</p>
                             <p className="text-slate-900 dark:text-white text-sm leading-relaxed">Generate a summary of the meeting notes for the weekly report.</p>
                         </div>
                     </div>
                 </div>
                 
                 <div className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-white/5">
                     <div className="flex items-center gap-4">
                         <div className="text-white flex items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 shrink-0 size-12 shadow-inner">
                             <span className="material-symbols-outlined text-[24px]">smart_toy</span>
                         </div>
                         <div className="flex flex-col justify-center">
                             <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Tool Name</p>
                             <p className="text-slate-900 dark:text-white text-base font-semibold">ChatGPT 4</p>
                         </div>
                         <div className="ml-auto">
                             <span className="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-500 ring-1 ring-inset ring-green-500/20">Active</span>
                         </div>
                     </div>
                 </div>
                 
                 <div className="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-white/5 flex flex-col gap-3">
                     <div className="flex justify-between items-center">
                         <label className="text-slate-900 dark:text-white text-base font-bold flex items-center gap-2">
                             <span className="material-symbols-outlined text-primary text-[20px]">terminal</span>
                             Prompt
                         </label>
                         <button className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-primary text-sm font-medium">
                             <span className="material-symbols-outlined text-[18px]">content_copy</span>
                             <span>Copy</span>
                         </button>
                     </div>
                     <div className="bg-slate-50 dark:bg-black/20 rounded-xl p-4 border border-slate-200 dark:border-white/5 relative group/prompt">
                         <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-relaxed font-display whitespace-pre-wrap select-all">Please summarize the following text into 3 bullet points, highlighting action items and deadlines. Ensure the tone is professional and concise. Focus on deliverables mentioned in the second half of the transcript.</p>
                         <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-slate-50 dark:from-[#0c161b] to-transparent pointer-events-none rounded-b-xl opacity-0"></div>
                     </div>
                     <p className="text-slate-400 dark:text-slate-500 text-xs italic">Copy this prompt and paste it into the tool.</p>
                 </div>
             </div>

             <div className="absolute bottom-0 w-full bg-white/80 dark:bg-[#0f1c23]/90 backdrop-blur-lg border-t border-slate-200 dark:border-white/5 p-4 z-20">
                 <div className="flex gap-3 max-w-md mx-auto">
                     <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-surface-highlight hover:bg-slate-50 dark:hover:bg-white/5 text-slate-900 dark:text-white font-semibold transition-colors shadow-sm">
                         <span>Open App</span>
                         <span className="material-symbols-outlined text-[20px] opacity-70">open_in_new</span>
                     </button>
                     <button onClick={() => navigate(AppRoutes.WORKFLOW_COMPLETED.replace(':id', 'result'))} className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-primary hover:bg-sky-400 text-white font-bold transition-all shadow-lg shadow-primary/20">
                         <span>Next Step</span>
                         <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                     </button>
                 </div>
                 <div className="h-4 w-full"></div>
             </div>
        </div>
    );
};

export const WorkflowCompletedScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display overflow-x-hidden text-slate-900 dark:text-white selection:bg-primary selection:text-white">
            <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pt-10 pb-2 justify-between sticky top-0 z-10 border-b border-transparent dark:border-white/5 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
                 <div onClick={() => navigate(AppRoutes.LIBRARY)} className="flex size-12 shrink-0 items-center justify-start text-slate-500 dark:text-white">
                     <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">close</span>
                 </div>
                 <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">FlowPilot</h2>
                 <div className="flex w-12 items-center justify-end">
                     <p className="text-primary text-base font-bold leading-normal tracking-[0.015em] shrink-0 cursor-pointer hover:opacity-80">Help</p>
                 </div>
            </div>

            <div className="flex-1 flex flex-col justify-center px-4 py-6 w-full max-w-[480px] mx-auto gap-8">
                 <div className="flex flex-col items-center gap-6 animate-fade-in">
                     <div className="flex items-center justify-center size-24 rounded-full bg-primary/10 border border-primary/20 shadow-[0_0_25px_-5px_rgba(6,168,249,0.3)] text-primary mb-2">
                         <span className="material-symbols-outlined text-[48px]">check_circle</span>
                     </div>
                     <div className="flex w-full flex-col items-center gap-2">
                         <p className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em] text-center">Workflow Completed</p>
                         <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal text-center max-w-[320px]">
                             <span className="font-semibold text-slate-700 dark:text-slate-200">Image Resizer V2</span> ran successfully without any errors.
                         </p>
                     </div>
                 </div>

                 <div className="flex w-full gap-4">
                     <div className="flex flex-1 flex-col gap-2 rounded-xl p-5 border border-slate-200 dark:border-[#2f566a] bg-white dark:bg-card-dark shadow-sm">
                         <div className="flex items-center gap-2">
                             <span className="material-symbols-outlined text-primary text-[20px]">timer</span>
                             <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">Duration</p>
                         </div>
                         <p className="text-slate-900 dark:text-white tracking-tight text-2xl font-bold leading-tight">00:45s</p>
                     </div>
                     <div className="flex flex-1 flex-col gap-2 rounded-xl p-5 border border-slate-200 dark:border-[#2f566a] bg-white dark:bg-card-dark shadow-sm">
                         <div className="flex items-center gap-2">
                             <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
                             <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">Status</p>
                         </div>
                         <p className="text-slate-900 dark:text-white tracking-tight text-2xl font-bold leading-tight">100%</p>
                     </div>
                 </div>

                 <div className="flex w-full flex-col items-stretch gap-3 mt-4">
                     <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-primary hover:bg-primary/90 transition-all active:scale-[0.98] text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/25">Run Again</button>
                     <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-transparent border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-white/5 transition-all active:scale-[0.98] text-slate-700 dark:text-white text-base font-bold leading-normal tracking-[0.015em]">Edit Workflow</button>
                     <button onClick={() => navigate(AppRoutes.LIBRARY)} className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors text-sm font-semibold leading-normal tracking-[0.015em]">Back to Library</button>
                 </div>
            </div>
            
            <nav className="flex gap-2 border-t border-slate-200 dark:border-[#213c4a] bg-white dark:bg-[#182b35] px-4 pb-8 pt-2 sticky bottom-0 z-20">
                {/* Simplified Nav for this screen */}
                <button onClick={() => navigate(AppRoutes.LIBRARY)} className="flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-slate-400 dark:text-[#8eb8cc] hover:text-primary dark:hover:text-white group transition-colors">
                     <div className="flex h-8 items-center justify-center group-hover:-translate-y-0.5 transition-transform"><span className="material-symbols-outlined">book_2</span></div>
                     <p className="text-xs font-medium leading-normal tracking-[0.015em]">Library</p>
                </button>
                <button onClick={() => navigate(AppRoutes.CREATE)} className="flex flex-1 flex-col items-center justify-end gap-1 text-primary group">
                     <div className="flex h-8 items-center justify-center group-hover:-translate-y-0.5 transition-transform"><span className="material-symbols-outlined">add_circle</span></div>
                     <p className="text-xs font-medium leading-normal tracking-[0.015em]">Create</p>
                </button>
                <button onClick={() => navigate(AppRoutes.LEARN)} className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-[#8eb8cc] hover:text-primary dark:hover:text-white group transition-colors">
                     <div className="flex h-8 items-center justify-center group-hover:-translate-y-0.5 transition-transform"><span className="material-symbols-outlined">lightbulb</span></div>
                     <p className="text-xs font-medium leading-normal tracking-[0.015em]">Learn</p>
                </button>
                <button onClick={() => navigate(AppRoutes.SETTINGS)} className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-[#8eb8cc] hover:text-primary dark:hover:text-white group transition-colors">
                     <div className="flex h-8 items-center justify-center group-hover:-translate-y-0.5 transition-transform"><span className="material-symbols-outlined">settings</span></div>
                     <p className="text-xs font-medium leading-normal tracking-[0.015em]">Settings</p>
                </button>
            </nav>
        </div>
    );
};