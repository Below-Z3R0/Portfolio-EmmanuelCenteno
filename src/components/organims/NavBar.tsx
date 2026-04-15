import { ThemeData, useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguague.tsx';
import { DayAndNightIcon, LanguageIcon } from '../../assets/Icons.tsx';
import { useState } from 'react';
import type { NavDataConfig } from '../../types/types';
import { LinkButton, Button } from '../../index';

export function NavBar({ NavData, className, classname, classNameTheme, name }: { className?: string, classname?: string, classNameTheme?: string, NavData: NavDataConfig, name?: boolean }) {
    const { ToggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <nav className={`z-20 qw:left-5 qw:right-5 left-2 right-2 max-w-241.5 p-5 mt-5 rounded-2xl fixed mx-auto flex gap-6 items-center justify-between bg-page/80 backdrop-blur-xl border border-border-subtle shadow-2xl ${classname}`}>
            {name && <h1 className='font-bold tracking-tight'>Emmanuel.Dev</h1>}
            <div className={`flex gap-4 items-center ${className}`}>
                {NavData[language].map((item, index) => (
                    <LinkButton key={index} link={item.link} txt={item.txt} className='text-dim hover:text-main transition-colors text-sm font-medium' />
                ))}
                <Button
                    svg={LanguageIcon}
                    className='size-7 z-50 '
                    fillcolor='text-main'
                    onClick={() => toggleLanguage(language === 'Spanish' ? 'English' : 'Spanish')}
                />
                <Button
                    svg={DayAndNightIcon}
                    className='size-7 z-50 '
                    fillcolor='text-main'
                    onClick={() => setIsOpen(isOpen === false ? true : false)}
                />

                {isOpen === false
                    ? <div className=' hidden'> </div>
                    :
                    <div className={`-z-10 mt-32 ml-66 mx-auto fixed  w-40 rounded-md p-2 gap-2 flex flex-col items-end bg-page/80 backdrop-blur-xl border border-border-subtle shadow-2xl ${classNameTheme}`}>
                        {ThemeData.map((cat, index) => (
                            <Button onClick={() => ToggleTheme(cat)} key={index} txt={cat} className='flex items-start h-8 w-full p-1 rounded-md' />
                        ))}
                    </div>
                }
            </div>
        </nav>
    )
}