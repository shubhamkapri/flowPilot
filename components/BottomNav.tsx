import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppRoutes } from '../types';

export const BottomNav: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (route: string) => location.pathname === route;

    const navItems = [
        { icon: 'grid_view', label: 'Library', route: AppRoutes.LIBRARY },
        { icon: 'explore', label: 'Explore', route: AppRoutes.DEMOS },
        // Create is special, handled separately in render
        { icon: 'school', label: 'Learn', route: AppRoutes.LEARN },
        { icon: 'settings', label: 'Settings', route: AppRoutes.SETTINGS },
    ];

    return (
        <nav className="fixed bottom-0 w-full h-[80px] bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl border-t border-slate-200 dark:border-white/5 flex justify-around items-start pt-3 z-40 pb-safe">
            {navItems.slice(0, 2).map((item) => (
                <button
                    key={item.route}
                    onClick={() => navigate(item.route)}
                    className={`flex flex-col items-center gap-1 w-16 group transition-colors ${isActive(item.route) ? 'text-primary' : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                >
                    <div className="relative">
                        <span className={`material-symbols-outlined text-[26px] group-hover:-translate-y-1 transition-transform ${isActive(item.route) ? 'fill-current' : ''}`}>
                            {item.icon}
                        </span>
                        {isActive(item.route) && (
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>
                        )}
                    </div>
                    <span className="text-[10px] font-medium">{item.label}</span>
                </button>
            ))}

            {/* Create Button (FAB style interaction but in tab bar flow) */}
             <div className="relative -top-5">
                 <button
                    onClick={() => navigate(AppRoutes.CREATE)}
                    className="flex items-center justify-center size-14 rounded-full bg-primary text-white shadow-[0_8px_20px_rgb(6,168,249,0.4)] hover:shadow-[0_8px_25px_rgb(6,168,249,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 group"
                 >
                    <span className="material-symbols-outlined text-[32px]">add</span>
                 </button>
             </div>

            {navItems.slice(2).map((item) => (
                <button
                    key={item.route}
                    onClick={() => navigate(item.route)}
                    className={`flex flex-col items-center gap-1 w-16 group transition-colors ${isActive(item.route) ? 'text-primary' : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                >
                    <div className="relative">
                        <span className={`material-symbols-outlined text-[26px] group-hover:-translate-y-1 transition-transform ${isActive(item.route) ? 'fill-current' : ''}`}>
                            {item.icon}
                        </span>
                        {isActive(item.route) && (
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>
                        )}
                    </div>
                    <span className="text-[10px] font-medium">{item.label}</span>
                </button>
            ))}
        </nav>
    );
};