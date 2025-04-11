import { Open_Sans } from "next/font/google";
import React from "react";


const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});


const withProviders = Story => {
    return(<div style={{ fontFamily: openSans.variable }}>
      <Story />
    </div>)
}


export const globalDecorator = [withProviders];
