import type { Metadata } from 'next';
import './globals.css';
import { Sidebar } from '@/components/Sidebar';
import { BottomNavigation } from '@/components/BottomNavigation';
import { AuthProvider } from '@/components/AuthProvider';
import { ProgressProvider } from '@/components/ProgressProvider';

export const metadata: Metadata = {
  title: 'Método Glúteo 3D - Treinamento de 21 Dias',
  description: 'Programa de treinos voltado para mulheres que desejam melhorar a firmeza, projeção e formato dos glúteos.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#F9FAFB] text-[#111111] antialiased selection:bg-violet-100 selection:text-violet-900" suppressHydrationWarning>
        <AuthProvider>
          <ProgressProvider>
            <div className="flex min-h-screen">
              <Sidebar />
              <main className="flex-1 pb-20 sm:pb-0">
                {children}
              </main>
            </div>
            <BottomNavigation />
          </ProgressProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
