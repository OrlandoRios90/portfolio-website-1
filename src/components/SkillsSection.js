import { Box, Image, Stack, Card, CardBody, Heading, Text, Divider, Button, } from "@chakra-ui/react"


export const SkillsSection = () => {
    const skills = [
        
        {
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
          imageAlt: 'react',
          title: 'React/Javascript',
          description: 'Specialized in building apps mainly in React, which is a Javascript library'
        },
        {
          imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--Csxe1_nf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/06o7m7lp6hka9qloq1wg.png',
          imageAlt: 'html-code',
          title: 'HTML',
          description: 'HTML and React go hand in hand when building apps and responsive websites'
        },
        {
          imageUrl: '',
          imageAlt: 'css-code',
          title: 'CSS   ',
          description: 'The above animation is an example of something I was able to achieve using CSS skills'
        },
        {
          imageUrl: 'https://i.imgur.com/Z8pLGK5.jpg',
          imageAlt: 'figma',
          title: 'Figma',
          description: 'Above is an actual screenshot of a project I worked on in Figma to design the mobile UX/UI of my final project for Front-End Developer Certification'
        },
    ]
  

      const toggleAnimation = () => {
        let status = document.getElementById("css-title");
        if (status.style.animationPlayState === "running") {
          document.getElementById("css-title").style.animationPlayState = "paused"
        } else {
          document.getElementById("css-title").style.animationPlayState = "running";
        }
      }
    
      
    

      return (
        <Box bg= "#faf8f7">
        <Heading as="h1" id="skills-title-section">
        Featured Skills
        </Heading>

        <div className="skills-section">
        {
          skills.map((object,index) => { return (
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
                {object.description}
              </Text>
              <Text color='blue.600' fontSize='2xl'>
                Link placeholder
              </Text>
            </Stack>
          </CardBody>
            <Divider />
          </Card>
          </div>
          )})
        }
        </div>
        
      </Box>
      
    
      )
    }
