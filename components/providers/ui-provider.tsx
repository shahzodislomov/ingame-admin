'use client'

import React from 'react'
import { NextUIProvider } from "@nextui-org/react";
import { ChildProps } from '@/types';

const UiProvider = ({ children }: ChildProps) => {
     return (
          <NextUIProvider>
               {children}
          </NextUIProvider>
     )
}

export default UiProvider