
import { ConvexClientProvider } from '../../providers/convex-client-provider'
import ModalProvider from '../../providers/ModalProvider';
import './globals.css'
import { Toaster } from "@/components/ui/sonner";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <html lang="en">
        <body>
        <ConvexClientProvider>
        <Toaster />
        <ModalProvider/>
          {children}
        </ConvexClientProvider>
        </body>
      </html>
  
  )
}