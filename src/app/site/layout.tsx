import Navbar from '@/components/site/navbar';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='h-full'>
      <Navbar />
      {children}
    </main>
  );
};

export default layout;
