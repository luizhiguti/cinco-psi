import Box from '@/lib/components/Box';
import Card, { CardBody, CardHeader } from '@/lib/components/Card';
import Icon from '@/lib/components/Icon';
import IconButton from '@/lib/components/IconButton';
import Image from '@/lib/components/Image';
import List, { ListItem } from '@/lib/components/List';
import { Heading, Text } from '@/lib/components/Typography';
import styles from '@/styles/about.module.scss';
import { useBreakpointValue } from '@chakra-ui/react';
import {
  mdiChevronLeftCircle,
  mdiChevronRightCircle,
  mdiInstagram,
  mdiLightbulbOnOutline,
} from '@mdi/js';
import NextLink from 'next/link';
import { useState } from 'react';
import Slider, { Settings as SliderSettings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

interface ImageSlideProps {
  imgSrc: string | string[];
  imgAlt: string;
}
interface ContentSlideProps {
  title: string;
  subtitle?: string;
  postscript?: string;
  href?: string;
  description: string;
}

type SlideData = ImageSlideProps | ContentSlideProps;

function CustomSlide(props: SlideData) {
  const isImageSlide = 'imgSrc' in props;
  const sliderSettings: SliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: useBreakpointValue({ base: false, md: true }),
    swipe: false,
  };
  return !isImageSlide ? (
    // For slides with text
    <Card>
      <CardHeader fontSize={{ base: 'lg', md: 'xl' }}>
        <Heading>{props.title}</Heading>
        {props.href && (
          <NextLink href={props.href} target='_blank'>
            <Icon path={mdiInstagram} mr={2} />
            {props.subtitle}
          </NextLink>
        )}
      </CardHeader>
      <CardBody>
        <Text fontSize={{ base: 'md', md: 'lg' }}>{props.description}</Text>
        <List
          display={props.postscript ? 'block' : 'none'}
          m={2}
          p={2}
          bg='brown'
          alignContent='center'
          justifyItems='center'
        >
          <ListItem
            fontSize={{ base: 'md', md: 'lg' }}
            display='flex'
            flexDir='row'
            alignItems='center'
            textAlign='center'
          >
            <Icon
              path={mdiLightbulbOnOutline}
              boxSize={{ base: '15%', md: '10%' }}
              mr={2}
              color='green'
            />
            {props.postscript}
          </ListItem>
        </List>
      </CardBody>
    </Card>
  ) : Array.isArray(props.imgSrc) ? (
    // For slides with multiple pictures
    <Slider {...sliderSettings}>
      {props.imgSrc.map((it, index) => (
        <Image
          key={index}
          src={it}
          alt={props.imgAlt}
          height='70vh'
          objectFit='contain'
          width='100%'
        />
      ))}
    </Slider>
  ) : (
    // For slides with a single picture
    <>
      <Image
        src={props.imgSrc}
        alt={props.imgAlt}
        height='75vh'
        objectFit='contain'
        width='100%'
      />
      <Text
        display={{ base: 'block', md: 'none' }}
        textAlign='center'
        fontStyle='italic'
        fontSize='xl'
        p={2}
      >
        {props.imgAlt}
      </Text>
    </>
  );
}

function CustomArrows({ slider }: { slider: Slider | null }) {
  return (
    <>
      {/* Left Icon */}
      <IconButton
        aria-label='left-arrow'
        borderRadius='full'
        position='absolute'
        top='50%'
        left='25px'
        transform='translate(0%, -50%)'
        zIndex={2}
        onClick={() => slider?.slickPrev()}
        size='sm'
        colorScheme='surface'
      >
        <Icon path={mdiChevronLeftCircle} boxSize='auto' color='brown' />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label='right-arrow'
        borderRadius='full'
        position='absolute'
        top='50%'
        right='25px'
        transform='translate(0%, -50%)'
        zIndex={2}
        onClick={() => slider?.slickNext()}
        size='sm'
        colorScheme='surface'
      >
        <Icon path={mdiChevronRightCircle} boxSize='auto' color='brown' />
      </IconButton>
    </>
  );
}

export default function AboutUs() {
  const sliderSettings: SliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 6000,
    slidesToShow: useBreakpointValue({ base: 1, md: 2 }),
    slidesToScroll: useBreakpointValue({ base: 1, md: 2 }),
    draggable: useBreakpointValue({ base: true, md: false }),
  };
  const [slider, setSlider] = useState<Slider | null>(null);
  const sliderData: SlideData[] = [
    {
      imgSrc: [
        '/static/psis/as_psis.jpg',
        '/static/psis/as_psis_1.jpg',
        '/static/psis/as_psis_2.jpg',
        '/static/psis/as_psis_3.jpg',
      ],
      imgAlt: 'As Psis',
    },
    {
      title: 'As Psis',
      subtitle: '@cinco.psi',
      href: 'https://www.instagram.com/cinco.psi',
      description: `O cinco.psi é composto por mulheres que tiveram seus caminhos
      ligados pela Psicologia. Trilhando uma jornada com muito
      companheirismo, risos, choros, abraços e aprendizados. Estas cinco
      mulheres decidiram que era hora de expandir essa rede de acolhimento
      A logotipo se baseia na perspectiva de que a Psicologia é uma árvore
      com diversas ramificações de galhos, folhas e frutos. Portanto, o
      cinco.psi acredita que com a promoção de Saúde Mental é possível
      contribuir para a Ramificação desta árvore que é a psicologia,
      visando produzir frutos de acolhimento e vulnerabilidade.`,
    },
    {
      imgSrc: '/static/psis/andreza.jpg',
      imgAlt: 'Andreza',
    },
    {
      title: 'Andreza',
      description: `Psicóloga Clínica e Organizacional, Pós Graduada em Psicologia
      Organizacional e do Trabalho com foco na Terapia Cognitiva
      Comportamental - 01ª Região - DF 25189.`,
      postscript:
        'Uma curiosidade sobre mim: Eu amo chocolate, quase que uma chocólatra',
    },
    {
      imgSrc: '/static/psis/luanna.jpg',
      imgAlt: 'Luanna',
    },
    {
      title: 'Luanna',
      description: `Psicóloga Clínica, Pós Graduanda em Avaliação Psicológica. 
      Incentivadora do autoconhecimento como ferramenta de transformação  - 
      CRP 01/24996.
      Uma curiosidade sobre mim: Faço quase tudo ouvindo música e amo poemas`,
      postscript: `Uma curiosidade sobre mim: Faço quase tudo ouvindo música e amo poemas`,
    },
    {
      imgSrc: '/static/psis/stephani.jpg',
      imgAlt: 'Stephani',
    },
    {
      title: 'Stephani',
      subtitle: '@stephani_almeida',
      href: 'https://www.instagram.com/stephani_almeida',
      description: `Psicóloga Clínica e Organizacional, Pós Graduanda em Avaliação
      Psicológica com foco na Terapia Cognitiva Comportamental - 01ª Região -
      DF 25024.`,
      postscript: `Uma curiosidade sobre mim: Eu amo ler livros e jogar jogos online`,
    },
  ];

  return (
    <Card className={styles.fillHeight} align='center' p={{ base: 4, md: 12 }}>
      <Box width={{ base: '100%', md: '80%' }}>
        {useBreakpointValue({ base: false, md: true }) && (
          <CustomArrows slider={slider} />
        )}
        <Slider {...sliderSettings} ref={(slider) => setSlider(slider)}>
          {sliderData.map((it, index) => (
            <CustomSlide {...it} key={index} />
          ))}
        </Slider>
      </Box>
    </Card>
  );
}
