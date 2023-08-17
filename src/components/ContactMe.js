import React from "react";
import { useFormik } from "formik";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
    Center,
} from "@chakra-ui/react";
import * as Yup from 'yup';


export const ContactMe = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '', email: '',
            type: 'hireMe',
            comment: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            comment: Yup.string().min(25, "Must be at least 25 characters").required('Required')
        }),
    });


    return (
        <div id="ContactMe">
        <Center bg="#faf8f7">
            <Box>
                <Heading as="h1" id="contact-me-title">
                    Contact me
                </Heading>
                <VStack w="600px" p={16} alignItems="flex-start">
                    <Box p={6} rounded="md" w="100%">
                        <form onSubmit={formik.handleSubmit}>
                            <VStack spacing={4}>
                                <FormControl isInvalid={
                                    Boolean(formik.errors.firstName) && Boolean(formik.touched.firstName)
                                }>
                                    <FormLabel htmlFor="firstName">Name</FormLabel>
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        {...formik.getFieldProps("firstName")}
                                    />
                                    <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={
                                    Boolean(formik.errors.email) && Boolean(formik.touched.email)
                                }>
                                    <FormLabel htmlFor="email">Email Address</FormLabel>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        {...formik.getFieldProps("email")}
                                    />
                                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                                    <Select id="type" name="type"
                                        {...formik.getFieldProps("type")}
                                    >
                                        <option value="hireMe">Job Opportunity</option>
                                        <option value="openSource">Freelance Project</option>
                                        <option value="other">Other</option>
                                    </Select>
                                </FormControl>
                                <FormControl isInvalid={
                                    Boolean(formik.errors.comment) && Boolean(formik.touched.comment)
                                }>
                                    <FormLabel htmlFor="comment">Your message</FormLabel>
                                    <Textarea
                                        id="comment"
                                        name="comment"
                                        height={125}
                                        {...formik.getFieldProps("comment")}
                                    />
                                    <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                                </FormControl>
                                <Button type="submit" colorScheme="blue" width="full">
                                    Submit
                                </Button>
                            </VStack>
                        </form>
                    </Box>
                </VStack>
            </Box>
        </Center>
        </div>
    );
};


