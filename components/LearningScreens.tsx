import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../types';
import { BottomNav } from './BottomNav';

export const LearnScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased selection:bg-primary selection:text-white pb-24 min-h-screen">
            <header className="pt-8 px-5 pb-4 sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-3xl font-bold tracking-tight">Learn</h1>
                    <div className="h-10 w-10 rounded-full bg-surface-highlight flex items-center justify-center overflow-hidden border border-surface-highlight">
                         <img alt="User Profile" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0QYL0IltHswb636yPo4JA4OQwb9wnx40pHVzhVVo05e6LOOAOFwII_ANPLO9vx3TTVGEwObOOITOX15lChYbn4nf_ymmk-eGnB4LD5S0sIwbkJdjH6gKMfMg2WCLEeV04J4fGx_NjhU5f-4BixBijqOUgjymMzapPtQURuFt-on9CpLsjDcsM2SesYhXOd0Y46kUK0VOBh03GQ3Oqb9RlnwHK_6u86PLjF4OCgIFmrw8AbaL-y12N28KDZtvwOmQVvW8IjSz4B7Mt" />
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary">
                        <span className="material-symbols-outlined text-[20px]">search</span>
                    </div>
                    <input className="block w-full pl-10 pr-3 py-3 rounded-xl border-none bg-white dark:bg-surface-dark dark:text-white placeholder-slate-500 dark:placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm" placeholder="Search guides, tutorials, and tips..." type="text" />
                </div>
            </header>

            <main className="flex flex-col gap-6">
                <section className="px-5">
                    <div className="bg-gradient-to-r from-surface-dark to-[#13242e] rounded-xl p-4 border border-surface-highlight/30 shadow-lg">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Current Path</p>
                                <h3 className="text-lg font-bold text-white">Mastering Automation</h3>
                            </div>
                            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-[20px]">trending_up</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between text-sm text-text-secondary mb-2">
                            <span>Course Progress</span>
                            <span className="text-white font-medium">65%</span>
                        </div>
                        <div className="w-full bg-surface-highlight rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{width: '65%'}}></div>
                        </div>
                    </div>
                </section>

                <section className="w-full overflow-x-auto no-scrollbar pl-5">
                    <div className="flex gap-3 pr-5">
                        <button className="flex h-9 shrink-0 items-center justify-center px-5 rounded-full bg-primary text-white shadow-md shadow-primary/20 transition-transform active:scale-95 text-sm font-semibold">All</button>
                        {['Getting Started', 'Advanced', 'AI Tips', 'Troubleshooting'].map(cat => (
                             <button key={cat} className="flex h-9 shrink-0 items-center justify-center px-5 rounded-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-highlight text-slate-600 dark:text-text-secondary hover:text-slate-900 dark:hover:text-white transition-colors active:scale-95 text-sm font-medium">{cat}</button>
                        ))}
                    </div>
                </section>

                <section className="px-5">
                    <div className="flex items-center justify-between mb-3">
                         <h2 className="text-xl font-bold text-slate-900 dark:text-white">Featured</h2>
                    </div>
                    <div onClick={() => navigate(AppRoutes.TUTORIAL)} className="group relative overflow-hidden rounded-2xl bg-white dark:bg-surface-dark shadow-lg border border-slate-200 dark:border-surface-highlight/50 cursor-pointer">
                        <div className="h-48 w-full bg-cover bg-center relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzJYdnVdrtikFRaaz1Up4U3BgJxQ8-wueJilmZ9Qf3yO2bp0njBFnJsRsN60VklBzOLjR6L25Aly5ld6wJTd0hLALE_nsb98nMLUdbdaOiM2gOT0rNcD4g8q8pPwnWLT-qM2X0Z8KaigtlShDeT7IWa2WxSxEKoi0RCPJ0ZB3jS6Ukrz-yeS-Q06Pe7rcxmSsrXmaFLB1hS9HQ3DhwU6zYsuywR2SxusETKlEFpYc3Vvn6Fb-zOGN5Lg5fblpYLx2u-CalzmpL804O")' }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute top-3 left-3">
                                <span className="inline-flex items-center rounded-md bg-white/10 px-2 py-1 text-xs font-medium text-white backdrop-blur-md ring-1 ring-inset ring-white/20">New Update</span>
                            </div>
                        </div>
                        <div className="p-4 relative -mt-12 pt-14 dark:pt-4">
                             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white dark:via-surface-dark to-white dark:to-surface-dark -z-10 h-full w-full"></div>
                             <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">Integrating AI with Google Sheets</h3>
                             <p className="text-slate-500 dark:text-text-secondary text-sm mb-4 line-clamp-2">Learn how to automate your spreadsheets with simple prompts and connect them to your daily workflows.</p>
                             <div className="flex items-center justify-between">
                                 <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-text-secondary">
                                     <div className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span><span>8 min read</span></div>
                                     <div className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">signal_cellular_alt</span><span>Intermediate</span></div>
                                 </div>
                                 <button className="bg-primary hover:bg-primary/90 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors flex items-center gap-1">Start <span className="material-symbols-outlined text-[16px]">arrow_forward</span></button>
                             </div>
                        </div>
                    </div>
                </section>

                <section className="px-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Latest Guides</h2>
                        <a href="#" className="text-sm text-primary font-medium hover:text-primary/80">View all</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        {[
                            { title: 'Your First Workflow', sub: 'Understanding triggers and actions.', badge: 'Beginner', badgeColor: 'text-primary', time: '5 min video', icon: 'play_circle', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX1Xm3lbqwkkLZHqbDOhsOk06YBI2P4tYQ7YQfLhrqm61HUPlNas-CsBo7iNp_FCWPQlixBOqjnmef7CGReibejaCX2GP_K7fDhvXFQvSkRc6FPbfN-sZ9wGR8wYNtqrkO2Knb_00P9yobL8DaPlMa8V4tpu_fbvUA4Vf8cUjmZPjZOuPPrkzOaVNYw6ZoXLloIiUZrNYreuIsU-7F-ksJT4J6MRL4iqOMXXspF_k0sXobprJnRvNpzfLwBk2pvoOWCLk3Lp4wl-2g' },
                            { title: 'Complex Logic Loops', sub: 'How to handle conditional branching.', badge: 'Advanced', badgeColor: 'text-purple-400', time: '12 min read', icon: 'description', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRfYINgDN4iZiHuo6QG_fPpx_7JsrM36pNgeqDp2YrOhl0_i7RnxCk4GR_ENNCI348VJ0PIVR5FAGO9oz8OM2o71CX2u9IQzdIX3m0DDk1QjjfJbNIsebKx2sNSpl5LXP0Dwz6wSAB306zGtqeaiXsgoMeGoQ5BH1MKIIMpFbn8LTfeg9tgumFsldzrbBOg70zC8xe_JcOKG6OYgN0aocNGB5-P9hu5DceVYZKs-g7Tonj3IN4NdMpT4dyLdBAfE27xS4MrHUTDhmW' },
                            { title: 'Optimizing Battery Usage', sub: 'Keep flows running efficiently.', badge: 'Tips', badgeColor: 'text-orange-400', time: '3 min read', icon: 'description', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVc6qE-AwLIkSl53lnGRu_LjmaL5mrDa7fsAaXpOdoIPsERj2rl75t8hCuCnH_XmVec6BbtvoGey7XhZYJ3m1-PAQnBTZEUxngQieaGgbxGa84Br0m3o5iOL3bCdWsdiKD5xiHviRE_hTK8zAmknpAlHUVkNMSiswiNhFsafki6infpBusg9j9wQMIJryegQOcjpqtlDO2s5g3RrtcQaMUZYP563Zxur0THWuiVIa_D2IzH--WB7i-gETZWU7nkEnnkD5yE0KJwaiZ' }
                        ].map((guide, i) => (
                             <div key={i} className="flex gap-4 p-3 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-highlight/30 hover:border-primary/30 transition-colors cursor-pointer group shadow-sm">
                                <div className="h-24 w-24 shrink-0 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url('${guide.img}')` }}></div>
                                <div className="flex flex-col justify-between py-1 flex-1">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`text-[10px] font-bold uppercase tracking-wider ${guide.badgeColor}`}>{guide.badge}</span>
                                        </div>
                                        <h4 className="text-slate-900 dark:text-white font-semibold text-base leading-snug group-hover:text-primary transition-colors">{guide.title}</h4>
                                        <p className="text-slate-500 dark:text-text-secondary text-xs mt-1 line-clamp-1">{guide.sub}</p>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-text-secondary mt-2">
                                        <span className="material-symbols-outlined text-[14px]">{guide.icon}</span>
                                        <span>{guide.time}</span>
                                    </div>
                                </div>
                             </div>
                        ))}
                    </div>
                </section>
            </main>
            <BottomNav />
        </div>
    );
};

export const TutorialScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-white antialiased selection:bg-primary/30">
            <div className="relative flex h-full w-full max-w-md mx-auto flex-col overflow-hidden bg-background-light dark:bg-background-dark shadow-2xl min-h-screen">
                <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-white/5">
                    <button onClick={() => navigate(AppRoutes.LEARN)} className="flex items-center justify-center size-10 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-slate-700 dark:text-white">arrow_back</span>
                    </button>
                    <div className="flex items-center gap-2">
                         <button className="flex items-center justify-center size-10 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-slate-700 dark:text-white">share</span>
                         </button>
                         <button className="flex items-center justify-center size-10 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-slate-700 dark:text-white">bookmark_border</span>
                         </button>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto pb-24 no-scrollbar">
                    <div className="px-5 pt-6 pb-2">
                         <div className="flex items-center gap-3 mb-4">
                             <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary border border-primary/20">Intermediate</span>
                             <span className="flex items-center text-slate-500 dark:text-slate-400 text-xs font-medium"><span className="material-symbols-outlined text-[16px] mr-1">schedule</span> 5 min read</span>
                         </div>
                         <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-4">Building Your First API Trigger</h1>
                         <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">Learn how to connect external webhooks to FlowPilot to automate data entry automatically. This workflow saves an average of 2 hours per week.</p>
                         
                         <div className="flex flex-col gap-3 mb-8">
                             <div className="flex items-center justify-between">
                                 <div className="flex items-center gap-2">
                                     <span className="material-symbols-outlined text-primary text-lg">flag</span>
                                     <span className="text-sm font-semibold text-slate-900 dark:text-white">Tutorial Progress</span>
                                 </div>
                                 <span className="text-xs font-bold text-primary tracking-wide uppercase bg-primary/10 px-2 py-1 rounded">Step 1 of 3</span>
                             </div>
                             <div className="flex w-full gap-2">
                                 <div className="h-2 flex-1 rounded-full bg-primary shadow-[0_0_12px_rgba(6,168,249,0.5)] relative overflow-hidden">
                                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                 </div>
                                 <div className="h-2 flex-1 rounded-full bg-slate-200 dark:bg-surface-light transition-colors"></div>
                                 <div className="h-2 flex-1 rounded-full bg-slate-200 dark:bg-surface-light transition-colors"></div>
                             </div>
                         </div>
                    </div>
                    <div className="h-px w-full bg-slate-200 dark:bg-white/5 mb-8"></div>

                    <div className="flex flex-col gap-6 px-5">
                         {[
                             { id: '01', title: 'Configure the Webhook', text: "Navigate to the 'Connectors' tab and select 'New Webhook'. You will be asked to name your endpoint. Keep it descriptive.", img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmuRqn2FazaOONqNPaPO1T9Q0Watx-9YTIHWcFk4fByw3U_ODVh5dN2eqWuYnDwdg5bDL6VmC2BdGMR3-F6aHmIMu6vfs_pEIrzeNaJKKPgtmrWCTduY8DzacWBzKogrHAYX3_i2nfWeC9OkMWypgF8CNkpIS3o7nQZCJAuKdQ5oPy7IZ4r2Qk6ei5TvgCK7zw6jCYFZVNPWFF2pXHrpYUEeS53JToy0Ryf2S4LTgKX9fzHFYusCPRnTzbve9WsAWtYugd_vBaS6Db' },
                             { id: '02', title: 'Define Payload Variables', text: "Map the incoming JSON data to local variables. Use the JSON structure below as a template for your first test payload.", code: '"data": {\n  "user_id": "usr_882910",\n  "action": "trigger_flow",\n  "timestamp": 16729102\n}' },
                             { id: '03', title: 'Test the Connection', text: "Send a test request to your new endpoint. If successful, the indicator will turn green and your workflow will start automatically.", tip: "Use Postman or curl to simulate external requests before integrating with your production app." },
                         ].map((step, i, arr) => (
                             <div key={i} className="group relative flex flex-col gap-4">
                                 {i < arr.length - 1 && <div className="absolute left-[19px] top-10 bottom-[-24px] w-0.5 bg-slate-200 dark:bg-white/10 group-last:hidden"></div>}
                                 <div className="flex items-start gap-4">
                                     <div className={`relative z-10 flex shrink-0 items-center justify-center size-10 rounded-full ${i === 0 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-200 dark:bg-surface-light text-slate-500 dark:text-slate-400 group-hover:bg-primary/20 group-hover:text-primary transition-colors'} font-bold text-sm ring-4 ring-background-light dark:ring-background-dark`}>{step.id}</div>
                                     <div className="flex flex-col pt-1 w-full">
                                         <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{step.title}</h2>
                                         <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{step.text}</p>
                                         
                                         {step.img && (
                                             <div className="w-full bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-slate-200 dark:border-white/5 shadow-sm">
                                                 <div className="relative w-full aspect-video bg-surface-light">
                                                     <img alt="step visual" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" src={step.img} />
                                                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                                         <div className="bg-black/40 backdrop-blur-sm px-2 py-1 rounded text-white text-[10px] font-mono border border-white/20">/api/v1/hooks/create</div>
                                                     </div>
                                                 </div>
                                             </div>
                                         )}

                                         {step.code && (
                                             <div className="w-full bg-[#0d1117] rounded-xl overflow-hidden border border-white/10 shadow-sm relative group/code">
                                                 <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
                                                     <span className="text-xs text-slate-400 font-mono">payload.json</span>
                                                     <button className="text-xs text-primary hover:text-white transition-colors">Copy</button>
                                                 </div>
                                                 <div className="p-4 overflow-x-auto">
                                                     <pre className="text-xs font-mono leading-relaxed text-slate-300">{step.code}</pre>
                                                 </div>
                                             </div>
                                         )}

                                         {step.tip && (
                                             <div className="p-4 rounded-xl bg-blue-50 dark:bg-primary/10 border border-blue-100 dark:border-primary/20 flex gap-3 items-start">
                                                 <span className="material-symbols-outlined text-primary mt-0.5">info</span>
                                                 <div className="flex flex-col gap-1">
                                                     <p className="text-sm font-semibold text-slate-900 dark:text-white">Pro Tip</p>
                                                     <p className="text-xs text-slate-600 dark:text-slate-400">{step.tip}</p>
                                                 </div>
                                             </div>
                                         )}

                                         <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/10 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(6,168,249,0.15)] active:scale-[0.98] active:bg-primary/15 group/btn">
                                             <span className="material-symbols-outlined text-[20px] group-hover/btn:scale-110 transition-transform">check_circle</span>
                                             Mark as Complete
                                         </button>
                                     </div>
                                 </div>
                             </div>
                         ))}
                    </div>
                    <div className="h-8"></div>
                </main>

                <footer className="fixed bottom-0 w-full max-w-md bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-white/5 p-4 z-40">
                    <div className="flex gap-3">
                        <button className="flex-1 flex items-center justify-center h-12 rounded-xl bg-slate-200 dark:bg-white/5 text-slate-900 dark:text-white font-semibold text-sm hover:bg-slate-300 dark:hover:bg-white/10 transition-colors">Previous</button>
                        <button className="flex-[2] flex items-center justify-center h-12 rounded-xl bg-primary text-white font-bold text-sm shadow-[0_4px_14px_0_rgba(6,168,249,0.39)] hover:bg-primary/90 transition-all hover:shadow-[0_6px_20px_rgba(6,168,249,0.23)] active:scale-[0.98]">
                            Next Step <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export const DemoWorkflowsScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white antialiased h-screen flex flex-col overflow-hidden">
            <div className="h-12 w-full bg-background-light dark:bg-background-dark shrink-0 z-50"></div>
            <header className="flex flex-col px-4 pb-4 bg-background-light dark:bg-background-dark shrink-0 z-40">
                <div className="flex items-center justify-between mb-2">
                    <button onClick={() => navigate(AppRoutes.LIBRARY)} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-slate-900 dark:text-white">
                        <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-slate-900 dark:text-white">
                        <span className="material-symbols-outlined text-[24px]">search</span>
                    </button>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white px-2">Demo Workflows</h1>
                <p className="text-slate-500 dark:text-text-secondary text-base font-medium px-2 mt-1">Explore real-world use cases</p>
            </header>
            
            <main className="flex-1 overflow-y-auto overflow-x-hidden px-4 pb-24 scroll-smooth">
                <div className="space-y-4 pt-2">
                    {[
                        { title: 'AI Short-Form Video Creation', category: 'Content Creation', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCF66YouD8TT4nT54ygWwpvsmyS1gij_NE7-OnoDFsaFihcqf3ik7TeL57oPOixLeKCZOUVcuAkqzpNCpwrqhFNeLcLBNyZsvIjAaxiQshctIRQup6DLQvmJwF6Pt5VZipPDAajtV1qNPX0lt1oDPfyiLEMGrK_ypVbSCdV-Ado2CjFg_gJ5SlkZAfFNnUoX-UgF1EaJaD0X2BQ-O4A1NuXmyB3ZIm5atGk5NRDMOVZJrAErVMCUDwole1K3wZH7n82koU67uHhkcGi', steps: 5, vars: 3 },
                        { title: 'Customer Support Triage', category: 'Operations', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS89A4Ca9A9KQHZcHeX9JN-1zCtl5sdz0TdJQ_EFS9VaVjtQTP2P4KsQH6JTtCjORXuUQvctRbF0_UdMAhJB18A1-Fx_XqaC7k8Z_Wi3-v0HR6ABzuVpHalXtJwDpy1wXz5PNyqxMAC6t8pz60WkafRCz2c-xoO-cap2lriEKb_U2nvScTXr9l7LT0Cei4EQKy0dKuVHpE3QWbxzC6FaYdu_NhmOsNiGZWHRi_zDpBwsNmfIV9yQfOeOpW1kNY13iDhOtvKwKTJ0aG', steps: 8, vars: 2 },
                        { title: 'Monthly SEO Report', category: 'Marketing', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBF-b6QwvO7FxtnYbkz-HsFi_y2A-32FDcdMe-WNAokkq6VLdWSuf4viKLdx0pP19bXPnZFWZW3lGhC1YwImZ_Vg3dFvQ8XjzvJuGCqo7P06kVuprmJoiFVR8QJ3PnHSdALZ_26UGmsQqdvj2-8DAdu05BESQnKvXCu19vONPhFXNSDILVBVdDmt-3NRmZoThNAbDLxhuxIZiQ3Jl7Y-eBADFxmdd-ijIkV5K1b3A4O8vIPtuvPSST8EVtknX0al7cnC08d6CLehv9P', steps: 12, vars: 5 },
                        { title: 'Automated Onboarding', category: 'HR & People', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAw2walmwt_sYWtlLLHkfvTJC7eWaxkL8XtcOyVVgbgVHY8gZhVQYehEHFWCPtUwjKfuzR_7hj8ygRK3rkrCQQeMljTbnIkVtazdA5sLYNL8sooJ-pHRIlACSt6__T_oNoHKrfS-gOdGw_sLTfJxY2lyD8UggwAELNMtjSzzURW8IuGLYptl-DTAyjnU2Wv1tCBTtoLAq40mIO45qTEFCAkLqLNamLx1a50PXrK8fFYlzpreT-9omhRq71RgI8Jd2OSg0kSTYffco8N', steps: 6, vars: 4 },
                    ].map((demo, i) => (
                        <div key={i} className="bg-white dark:bg-surface-dark rounded-xl shadow-sm dark:shadow-[0_0_4px_rgba(0,0,0,0.2)] overflow-hidden transition-all hover:shadow-md border border-slate-200 dark:border-white/5">
                            <div className="w-full h-40 bg-cover bg-center relative" style={{ backgroundImage: `url("${demo.img}")` }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/10">{demo.category}</span>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{demo.title}</h3>
                                <div className="flex items-center gap-4 mt-3 mb-5 text-sm text-slate-500 dark:text-text-secondary">
                                    <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">format_list_numbered</span><span>{demo.steps} Steps</span></div>
                                    <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">tune</span><span>{demo.vars} Variables</span></div>
                                </div>
                                <button onClick={() => navigate(AppRoutes.WORKFLOW_DETAIL.replace(':id', 'demo'))} className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium py-2.5 px-4 rounded-lg transition-colors active:scale-[0.98]">
                                    <span>View Demo</span><span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="h-4"></div>
            </main>
            <BottomNav />
        </div>
    );
};