import { Avatar, VStack, Heading, Text } from "@chakra-ui/react"

export const LandingSection = () => {

    

    return (
        
        <div class="landing-banner">
            <img src="https://images.pexels.com/photos/7974/pexels-photo.jpg" id="landing-image"></img>
            
                <div class="avatar">
                    <img src="https://i.imgur.com/PNdIfVI.jpg" id="avatar-pic"/>
                </div>
                <div class="landing-info">
                <VStack spacing={2}>
                    <Heading as='h2' size='xl' color="white">My name is Orlando</Heading>
                    <Text fontSize='xl' color="white">Welcome to my website,</Text>
                    <Text fontSize='xl' color="white">which is written in React and HTML</Text>
                    
                </VStack>
            </div>
        </div>

                  
        
    )
}

