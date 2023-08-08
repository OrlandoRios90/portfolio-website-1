import { VStack, Heading, Text, Button } from "@chakra-ui/react"

export const LandingSection2 = () => {

    

    return (
        
        <div class="landing-banner">
            <img src="https://i.imgur.com/kU5F5RB.jpg" id="landing-image"></img>
            
                <div class="avatar2">
                </div>
                <div class="landing-info2">
                <VStack spacing={2}>
                    <Heading as='h2' size='xl' color="white">My name is Orlando</Heading>
                    <Text fontSize='xl' color="white">Welcome to my website</Text>
                    <Text fontSize='xl' color="white">I'm a front-end developer</Text>
                    <Text fontSize='xl' color="white">specialized in React.</Text>
                    <div id="contact-button">
                    <Button>Contact Me</Button>
                    </div>
                </VStack>
            </div>
        </div>

                  
        
    )
}