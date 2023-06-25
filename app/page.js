import Header from '@/components/Header/Header';
import MainContent from '@/components/MainContent/MainContent';
import  './page.scss';



export default function Home() {
  return (
    <div className="container">
    <Header />
    <MainContent />
    </div>
  )
}
