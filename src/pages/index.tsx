import type { NextPage } from 'next'
import Lista from '../ui/components/Lista/Lista';
import Titulo from '../ui/components/Titulo/Titulo';

const Home: NextPage = () => {
  return (
    <div >
      <Titulo 
        titulo="" 
        subtitulo={
        <span>            
          Com um pequeno valor mensal, você <br />
          pode <strong>adotar um pet virtualmente</strong>
        </span>
        } />

        <Lista
          pets={[
            {
              id: 1,
              nome: 'Bidu',
              historia: 'kcndkcnkdncdnkcsnkc',
              foto: 'https://www.petlove.com.br/dicas/wp-content/uploads/2020/10/Cachorro-culpa-Petlove.jpg'
            },
            {
              id: 2,
              nome: 'Scooby-doo',
              historia: 'ola q tal',
              foto: 'https://s2.glbimg.com/zv9Giu26ZNgHbs3O1eu5fuI8RFc=/0x0:607x426/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_ba3db981e6d14e54bb84be31c923b00c/internal_photos/bs/2021/x/L/vNU8n5S3icJhszkvj8QQ/2020-02-27-vira-lata.jpg'
            },
          ]}
        />
    </div>
  )
}

export default Home
