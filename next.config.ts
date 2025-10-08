import type { NextConfig } from "next";
import { metadata } from './app/layout';

const nextConfig: NextConfig = {
  typescript:{
    ignoreBuildErrors:true
  },
  eslint:{
    ignoreDuringBuilds:true
  },
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'res.cloudinary.com',
        port:''
      }
    ]
  }
};

export default nextConfig;
