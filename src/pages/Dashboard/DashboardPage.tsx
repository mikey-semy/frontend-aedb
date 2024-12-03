import React, {useEffect}  from 'react';
import { useContentData } from '@/contexts';
import { MdAdd } from 'react-icons/md';
import { WidgetContainer } from '@/components/Widget/Widget.styles'


const Dashboard: React.FC = () => {
  const { setContentData } = useContentData();
 
  useEffect(() => {
    setContentData({
      caption: 'Главный экран',
      title: 'Создать виджет',
      icon: MdAdd,
      onClick: () => console.log('click'),
    });
  }, [setContentData]);
  return (
    <>
      <WidgetContainer>
        
      </WidgetContainer>
    </>
  );
};

export default Dashboard;