import { Header } from '../components/Header';
import { BannerImage } from '../components/Banner/style';
import BannerImg from '../assets/shelter-dashboard.svg';
import { StyledUlTitle } from '../components/List/style';
import { Button } from '../components/Button/styles';
import { PetList } from '../components/PetList';
import { ReportsList } from '../components/ReportsList';
import { ShelterDiv } from '../components/ShelterDescription/style';
import { ReportsModal } from '../components/ReportsList/ReportsModal/index';
import { useContext } from 'react';
import { ReportsContext } from '../contexts/ReportsContext';

export const Dashboard = () => {
  const { isModalOpen } = useContext(ReportsContext);

  return (
    <>
      <Header />
      <BannerImage>
        <div className='banner-content__div--img'>
          <img src={BannerImg} alt='cão onlypets' />
        </div>
      </BannerImage>
      <ShelterDiv>
        <StyledUlTitle>Abrigo dos pets!</StyledUlTitle>
        <p>
          Somos uma organização sem fins lucrativos que busca trazer um pouco de
          alegria para humanos através da adoção de animais que foram
          abandonados ou sofreram maus-tratos. Servimos como um lar temporário
          dos nossos amiguinhos antes que eles encontrem a felicidade de ter um
          novo lar e uma nova família.
        </p>
        <Button className='button__color--primary button__size--large'>
          Ver animais!
        </Button>
      </ShelterDiv>
      <PetList />
      <StyledUlTitle>Denuncias:</StyledUlTitle>
      <ReportsList />
      {isModalOpen && <ReportsModal />}
    </>
  );
};
