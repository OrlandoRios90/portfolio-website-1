import { Box, Image, Stack, Card, CardBody, Heading, Text, Divider, Button, } from "@chakra-ui/react"


export const SkillsSection = () => {
    const skills = [
        
        {
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
          imageAlt: 'react',
          title: 'Javascript/React',
          
        },
        {
          imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--Csxe1_nf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/06o7m7lp6hka9qloq1wg.png',
          imageAlt: 'html-code',
          title: 'HTML',
        },
        {
          imageUrl: '',
          imageAlt: 'css-code',
          title: 'CSS   ',
        },
        {
          imageUrl: 'https://i.imgur.com/Z8pLGK5.jpg',
          imageAlt: 'figma',
          title: 'Figma',
        },
    ]
  

      const toggleAnimation = () => {
        let status = document.getElementById("css-title");
        if (status.style.animationPlayState == "running") {
          document.getElementById("css-title").style.animationPlayState = "paused"
        } else {
          document.getElementById("css-title").style.animationPlayState = "running";
        }
      }
    
      
    

      return (
        <Box
        bg= "#faf8f7"
        >
        <Heading as="h1" id="skills-title-section">
        Featured Skills
        </Heading>

        <div className="skills-section">
        {skills.map((object,index) => { return (
        <div id="skills-card">
        <Card maxW='sm'>
        <CardBody>
          
          {object.imageUrl ? <Image
            src= {object.imageUrl}
            alt= {object.imageAlt}
            borderRadius='lg' 
          /> : <h1 id="css-title">Animated in CSS.</h1> }
           
          <Stack mt='6' spacing='1'>
            <Heading size='md'>
              {object.title} 
              {object.imageUrl ? null
               : <Button colorScheme='teal' size='xs' onClick={toggleAnimation}>
                Toggle animation
              </Button>}
            </Heading>
            <Text>
              Lorem ipsum
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
        </div>
        )})}
        </div>
        
      </Box>
      
      
    
      )
    }
