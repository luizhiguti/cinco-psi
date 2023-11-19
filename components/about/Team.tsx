import Box from '@/lib/components/Box';
import Button from '@/lib/components/Button';
import Card, { CardBody, CardHeader } from '@/lib/components/Card';
import Icon from '@/lib/components/Icon';
import IconButton from '@/lib/components/IconButton';
import Image from '@/lib/components/Image';
import { Heading, Text } from '@/lib/components/Typography';
import {
  mdiInstagram,
  mdiChevronRightCircle,
  mdiChevronLeftCircle,
} from '@mdi/js';
import NextLink from 'next/link';
import { useState } from 'react';
import Slider, { Settings as SliderSettings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

interface ImageSlideProps {
  imgSrc: string;
  imgAlt: string;
}
interface ContentSlideProps {
  title: string;
  subtitle: string;
  href: string;
  description: string;
}

type SlideData = ImageSlideProps | ContentSlideProps;

function CustomSlide(props: SlideData) {
  const isImageSlide = 'imgSrc' in props;
  return isImageSlide ? (
    <Image
      src={props.imgSrc}
      alt={props.imgAlt}
      height='50vh'
      objectFit='contain'
      width='100%'
    />
  ) : (
    <Box>
      <Card>
        <CardHeader>
          <Heading fontSize='3xl'>{props.title}</Heading>
          <NextLink href={props.href} target='_blank'>
            <Icon path={mdiInstagram} mr={2} />
            {props.subtitle}
          </NextLink>
        </CardHeader>
        <CardBody>
          <Text>{props.description}</Text>
        </CardBody>
      </Card>
    </Box>
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
        <Icon path={mdiChevronLeftCircle} boxSize='auto' color='orange' />
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
        <Icon path={mdiChevronRightCircle} boxSize='auto' color='orange' />
      </IconButton>
    </>
  );
}

export default function Team() {
  const sliderSettings: SliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  const [slider, setSlider] = useState<Slider | null>(null);
  const sliderData: SlideData[] = [
    {
      imgSrc: '/static/psis/namoradinha.png',
      imgAlt: 'Stephani',
    },
    {
      title: 'Stephani',
      subtitle: '@stephani_almeida',
      href: 'https://www.instagram.com/stephani_almeida',
      description: 'Uma grande de uma gostosa',
    },
  ];

  return (
    <Card align='center' p={12}>
      <Box width='80%'>
        <CustomArrows slider={slider} />
        <Slider {...sliderSettings} ref={(slider) => setSlider(slider)}>
          {sliderData.map((it, index) => (
            <CustomSlide {...it} key={index} />
          ))}
        </Slider>
      </Box>
    </Card>
  );
}
