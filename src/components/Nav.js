import { Box, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef } from "react";

export const Nav = () => {

    const socials = [
        {
            icon: faGithub,
            url: "https://github.com/OrlandoRios90"
        },
        {
            icon: faLinkedin,
            url: "https://www.linkedin.com/in/orlando-rios-68ba4990/"
        }
    ]

    const socialUrls = socials.map((socialObject, index) => {
        return <a href={socialObject.url} key={index} target="_blank"><FontAwesomeIcon icon={socialObject.icon} size="2x" /></a>
        }
    )
    
    const headerRef = useRef(null);


    useEffect(() => {
        let currScrollPos = window.scrollY;

        const handleScroll = () => {
            let prevScrollPos = window.scrollY;
            const headerElement = headerRef.current;

            if (currScrollPos > prevScrollPos ){
                headerElement.style.transform = "translateY(0)";
            } else {
                headerElement.style.transform = "translateY(-200px)";
            }

            currScrollPos = prevScrollPos;
        }

        window.addEventListener("scroll", handleScroll);

        return () =>  window.removeEventListener("scroll", handleScroll) 

    }, [])


    return (
        <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        backgroundColor={window.scrollY == 0 ? false : "#18181b"}
        ref= {headerRef}
        >
            <Box color="white" width="100%" margin="0 auto">
                <HStack
                px={15}
                py={2}
                justifyContent="space-between"
                alignItems="center"
                >
                    <nav><HStack spacing={15}>{socialUrls}</HStack></nav>
                    <nav> Hello</nav>
                </HStack>
            </Box>
    
        </Box>
    )
}