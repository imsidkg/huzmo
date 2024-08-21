'use client'
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";

interface ClientProviderProps {
  children: React.ReactNode;
}
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({children} :ClientProviderProps) => {
    return(
      //@ts-ignore
   <ClerkProvider>
    <ConvexProviderWithClerk useAuth= {useAuth} client = {convex}>
        {children}
    </ConvexProviderWithClerk>
   </ClerkProvider>
    )

};
