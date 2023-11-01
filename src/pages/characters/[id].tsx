import Layout from '@/components/global/Layout'
import { fetchCharacterById } from '@/lib/services/characters/characterServices'
import CharacterType from '@/lib/types/CharacterType'
import { Box, Container, Typography } from '@mui/material'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import themeValue from '@/lib/hooks'
import CharactersList from '@/components/homepage/CharactersList'

const CharacterDetail = ({ character }: { character: CharacterType }) => {
  // const { id, name, image, status, species } = character
  const characterDetails = [
    {
      text: 'Vivo',
      srcIcon: '/svgs/pulse.svg',
    },
    {
      text: 'Humano',
      srcIcon: '/svgs/alienLight.svg',
    },
    {
      text: 'Homem',
      srcIcon: '/svgs/planetLight.svg',
    },
  ]

  console.log(character)
  return (
    <Layout>
      {/* hero */}
      <Container>
        <Box display={'flex'} marginTop={'40px'} gap={'64px'}>
          <Box
            height={'461px'}
            width={'369px'}
            sx={{ background: '#11B0C8', borderRadius: '16px' }}
          >
            Image
          </Box>
          <Box display={'flex-col'}>
            <Typography
              fontWeight={'bold'}
              fontSize={'3rem'}
              marginBottom={'32px'}
            >
              {character.name}
            </Typography>
            <Box
              display={'flex'}
              alignItems={'center'}
              columnGap={'8px'}
              fontSize={'32px'}
              marginBottom={'52px'}
            >
              <OndemandVideoIcon fontSize={'inherit'} />
              <Typography fontSize={'1.5rem'}>
                Participa de 51 episódios
              </Typography>
            </Box>
            <Box display={'flex'} gap={'24px'}>
              {characterDetails.map((item, index) => (
                <Box
                  key={index}
                  display='flex'
                  alignItems={'center'}
                  gap={'4px'}
                >
                  <Image
                    width={32}
                    height={32}
                    src={item.srcIcon}
                    alt={'pulse'}
                    style={{
                      filter: themeValue('invert(0%)', 'invert(100%)'),
                    }}
                  />
                  <Typography fontSize={'1.5rem'} color='text.primary'>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        {/* Mais Personagens */}
        <Box display={'flex'} gap={'16px'} margin={'114px 0 64px'}>
          <img src='/svgs/charactersSmile.svg' alt='icone-de-personagens' />
          <Typography
            fontSize={'1.5rem'}
            fontWeight={'bold'}
            lineHeight={'normal'}
          >
            Mais <br />
            Personagens
          </Typography>
        </Box>
        {/* <CharactersList characters={characters} /> */}
      </Container>
    </Layout>
  )
}

interface CharacterDetailProps {
  character: CharacterType
}

export const getServerSideProps: GetServerSideProps<
  CharacterDetailProps
> = async ({ params }) => {
  const { id } = params as { id: string }

  try {
    if (!id) {
      throw new Error('ID is missing.')
    }
    const character = await fetchCharacterById(id)
    return {
      props: { character },
    }
  } catch (error) {
    console.error('Error fetching character data:', error)
    return {
      notFound: true,
    }
  }
}

export default CharacterDetail
