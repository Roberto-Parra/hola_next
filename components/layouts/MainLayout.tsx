import React, { FC, ReactNode } from 'react';
import Head from 'next/head'
import styles  from './MainLayout.module.css';
import { Navbar } from '../Navbar';
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
          <Head>
            <title>HomePage</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar />
    
          <main className={ `${styles.main} ${inter.className}` }>
            
          { children }
        
          </main>
        </>
      )
}
