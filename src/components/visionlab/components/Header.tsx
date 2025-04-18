import React from 'react';
import { MaxWidthWrapper } from './MaxWidthWrapper';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center">
          <div className="mr-4 flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="font-bold">YouLearn</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="/courses" className="transition-colors hover:text-foreground/80">
                Courses
              </a>
              <a href="/classrooms" className="transition-colors hover:text-foreground/80">
                Classrooms
              </a>
              <a href="/dashboard" className="transition-colors hover:text-foreground/80">
                Dashboard
              </a>
            </nav>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
}; 