import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../types';

export const SplashScreen: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(AppRoutes.WELCOME);
        }, 2000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="relative flex h-screen w-full flex-col overflow-hidden items-center justify-center bg-background-light dark:bg-background-dark">
            <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,_rgba(6,168,249,0.15)_0%,_rgba(16,27,34,0)_70%)]"></div>
            <div className="relative z-10 flex flex-col items-center">
                <div className="relative mb-8 group animate-pulse">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-400 rounded-2xl blur opacity-25"></div>
                    <div className="relative w-24 h-24 bg-surface-dark rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl">
                        <span className="material-symbols-outlined text-primary text-5xl">smart_toy</span>
                    </div>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">FlowPilot</h1>
                <p className="text-slate-500 dark:text-slate-400 text-lg font-light tracking-wide text-center">
                    Automate thinking,<br/>not tapping.
                </p>
            </div>
            <div className="absolute bottom-10 text-slate-400 dark:text-slate-600 text-xs font-medium tracking-wider uppercase opacity-60">
                Version 1.0.0
            </div>
        </div>
    );
};

export const WelcomeScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark">
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-[20%] -right-[20%] w-[80%] h-[60%] rounded-full bg-primary/10 blur-[100px]"></div>
                <div className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[40%] rounded-full bg-primary/5 blur-[80px]"></div>
            </div>
            
            <div className="relative z-10 flex flex-1 flex-col pt-4 pb-8 h-full">
                 <div className="flex-1 flex flex-col justify-center items-center px-4 pt-12 pb-4">
                    <div className="w-full max-w-sm">
                        <div className="relative w-full aspect-[4/5] max-h-[45vh] bg-center bg-no-repeat bg-cover rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/5" 
                             style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJ0ETrC_r0lKmM6lXAgFPI9I4xXx0wLHacSzThgQWhOBP5qC5vMXrMYh7MXFSieBZUUfzTcACKVV2v1MGxJFeg0FMYjp-MWD1JT6u-dhPhgzNC3MtOjoSXu2cfzVrYv_bsnCV0chos_UKaoRTwbf4WmTo_2RwOuuvF956_Sn8a6LSIA8FB63-c9F12XQv6TLZQ1SW-1mkHbYP7W1vSkOoNwg2AQhtEd9aWVs315D-Riovazy4a4E_Ws5oRrtzbBxUzZpHAXv6-0379")' }}>
                             <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
                        </div>
                    </div>
                 </div>

                 <div className="flex flex-col items-center px-6 pb-2">
                    <h1 className="text-slate-900 dark:text-white tracking-tight text-[36px] font-bold leading-[1.1] text-center mb-4">
                        Think Once.<br/><span className="text-primary">Reuse Forever.</span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-lg font-normal leading-relaxed text-center max-w-[320px]">
                        FlowPilot turns your repeated digital work into reusable workflows.
                    </p>
                 </div>

                 <div className="w-full flex flex-col items-center gap-4 px-6 pt-10 pb-6 mt-auto">
                    <button onClick={() => navigate(AppRoutes.LIBRARY)} className="group relative w-full max-w-[400px] cursor-pointer overflow-hidden rounded-xl h-14 bg-primary text-white text-[17px] font-semibold tracking-wide shadow-lg shadow-primary/25 transition-transform active:scale-[0.98]">
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Get Started
                            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                        </span>
                    </button>
                    <button className="w-full max-w-[400px] cursor-pointer rounded-lg h-10 flex items-center justify-center bg-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors">
                        Already have an account? <span className="text-primary ml-1">Sign in</span>
                    </button>
                    <div className="flex gap-4 mt-2">
                         <button onClick={() => navigate(AppRoutes.INFO_HOW_IT_WORKS)} className="text-xs text-slate-400 hover:text-primary">How it works</button>
                         <button onClick={() => navigate(AppRoutes.INFO_NO_TRICKS)} className="text-xs text-slate-400 hover:text-primary">Safety</button>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export const NoTricksScreen: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark">
             <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
             <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
             
             <div className="relative z-10 flex items-center p-4 pt-6 justify-between w-full">
                <button onClick={() => navigate(AppRoutes.WELCOME)} className="flex size-10 items-center justify-center rounded-full text-slate-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
                </button>
                <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] text-center absolute left-1/2 -translate-x-1/2">
                    No Automation Tricks
                </h2>
                <div className="size-10"></div>
             </div>

             <div className="flex-1 overflow-y-auto z-10 pb-6">
                <div className="flex flex-col items-center justify-center pt-8 pb-4 px-6 gap-8 w-full max-w-md mx-auto">
                    <div className="flex flex-col items-center gap-6">
                        <div className="relative flex items-center justify-center size-24 rounded-full bg-gradient-to-br from-white dark:from-card-dark to-slate-100 dark:to-background-dark border border-slate-200 dark:border-white/10 shadow-[0_0_30px_-5px_rgba(6,166,242,0.3)]">
                            <span className="material-symbols-outlined text-primary text-[48px]">verified_user</span>
                            <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse"></div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 w-full">
                         {[
                             { icon: 'touch_app', title: 'No auto-clicking', desc: 'We do not simulate clicks without your direct action. Your interaction is genuine.' },
                             { icon: 'layers_clear', title: 'No background control', desc: 'The app stops completely when you close it. No hidden processes.' },
                             { icon: 'visibility_off', title: 'No accessibility abuse', desc: 'We respect system permissions strictly and only use what is necessary.' },
                         ].map((item, i) => (
                             <div key={i} className="bg-white/50 dark:bg-card-dark/60 backdrop-blur-md flex items-start gap-4 rounded-2xl border border-slate-200 dark:border-white/10 p-5 transition-transform hover:scale-[1.02] duration-300">
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-1">
                                    <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight">{item.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-relaxed">{item.desc}</p>
                                </div>
                             </div>
                         ))}
                    </div>
                </div>
             </div>
             
             <div className="w-full p-6 pb-10 z-10 flex flex-col items-center justify-center">
                <p className="text-primary/90 text-sm font-medium tracking-wide opacity-90 text-center">You stay in control. Always.</p>
             </div>
        </div>
    );
};

export const HowItWorksScreen: React.FC = () => {
     const navigate = useNavigate();
     const steps = [
         { num: '01', icon: 'fiber_manual_record', title: 'Record a workflow once', desc: 'Capture your actions in real-time to build a reusable template without writing code.' },
         { num: '02', icon: 'cached', title: 'Reuse it with new inputs', desc: 'Run the same process with different data sets instantly to scale your output.' },
         { num: '03', icon: 'content_copy', title: 'Copy exact prompts step by step', desc: 'Get the precise AI prompts needed for consistent output across any platform.' },
     ];

     return (
        <div className="relative flex h-full min-h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark">
            <header className="sticky top-0 z-10 flex items-center justify-between bg-background-light/80 dark:bg-background-dark/80 p-4 pb-2 backdrop-blur-md">
                <button onClick={() => navigate(AppRoutes.WELCOME)} className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-slate-100 dark:hover:bg-white/10 text-slate-900 dark:text-white">
                    <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                </button>
                <h1 className="flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white">How FlowPilot Works</h1>
                <div className="size-10"></div>
            </header>
            
            <main className="flex flex-1 flex-col gap-6 px-4 py-6">
                <div className="flex flex-col items-center gap-2 text-center">
                    <p className="max-w-xs text-sm font-medium text-slate-500 dark:text-slate-400">Automate your daily tasks in three simple steps.</p>
                </div>
                
                <div className="flex flex-col gap-4">
                    {steps.map((step, idx) => (
                        <div key={idx} className="group relative flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#182934] p-5 shadow-sm transition-all hover:border-primary/50 dark:shadow-none">
                            <div className="flex items-center justify-between">
                                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                                    <span className="material-symbols-outlined text-[24px]">{step.icon}</span>
                                </div>
                                <span className="font-mono text-xs font-bold text-slate-400 opacity-50 dark:text-slate-500">{step.num}</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-lg font-bold leading-tight text-slate-900 dark:text-white">{step.title}</h2>
                                <p className="text-sm font-normal leading-relaxed text-slate-500 dark:text-[#90b2cb]">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            
            <div className="mt-auto bg-background-light dark:bg-background-dark p-4">
                <div className="flex flex-col gap-3">
                    <button onClick={() => navigate(AppRoutes.DEMOS)} className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                        <span className="mr-2 material-symbols-outlined text-[20px]">explore</span>
                        Explore Demo Workflows
                    </button>
                    <button onClick={() => navigate(AppRoutes.CREATE)} className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#1c2a35] px-6 text-base font-bold text-slate-700 dark:text-white transition-colors hover:bg-slate-50 dark:hover:bg-white/5">
                        Create My Workflow
                    </button>
                </div>
                <div className="h-4"></div>
            </div>
        </div>
     );
};