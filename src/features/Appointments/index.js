import React,{useState} from 'react'
import Hero from '../../components/Hero';
import PendingCard from '../../components/PendingCard';
import ConfirmCard from '../../components/ConfirmCard';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../../components/Navbar';

const Appointments = () => {
  const {t} = useTranslation();
   const [activeTab, setActiveTab] = useState('pending');
    const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className='flex flex-col'>
    <Navbar/>
      <Hero/>
      <div className=' container mx-auto mt-3'>
      <div className='flex'>
      <button
          className={`px-6 py-2 rounded-lg font-abc text-[16px] font-semibold ${activeTab === 'pending' ? ' bg-primary-color text-white' : ' bg-white text-tab_unselected'}`}
          onClick={() => handleTabChange('pending')}
        >
          {t('pending')}
        </button>

  <button
          className={`px-6 py-2 rounded-lg ${activeTab === 'confirm' ? 'bg-primary-color text-white' : 'bg-white text-tab_unselected'}`}
          onClick={() => handleTabChange('confirm')}
        >
          {t('confirm')}
        </button>

      </div>
      </div>

       <div className="bg-gray-100 p-4">
        {activeTab === 'pending' && <PendingCard />}
        {activeTab === 'confirm' && <ConfirmCard />}
      </div>
      
    </div>
  )
}

export default Appointments
