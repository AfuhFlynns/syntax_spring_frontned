import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const PrivacyPolicy = () => (
  <Container className="py-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h4" gutterBottom className="font-bold">
        Privacy Policy
      </Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to SyntaxSpring! Your privacy is important to us. This Privacy
        Policy outlines how we collect, use, and safeguard your information when
        you use our application.
      </Typography>
      <Typography variant="h6" className="font-semibold mt-4">
        Information We Collect
      </Typography>
      <Typography variant="body1" gutterBottom>
        We collect personal information such as your name, email address, and
        other details when you sign up or interact with our app. We may also
        collect usage data to improve your experience.
      </Typography>
      <Typography variant="h6" className="font-semibold mt-4">
        How We Use Your Information
      </Typography>
      <Typography variant="body1" gutterBottom>
        Your information is used to provide and improve our services,
        personalize your experience, and communicate important updates.
      </Typography>
      <Typography variant="h6" className="font-semibold mt-4">
        Data Security
      </Typography>
      <Typography variant="body1" gutterBottom>
        We implement robust measures to protect your data from unauthorized
        access, disclosure, or destruction. However, no method of transmission
        over the internet is 100% secure.
      </Typography>
      <Typography variant="h6" className="font-semibold mt-4">
        Contact Us
      </Typography>
      <Typography variant="body1" gutterBottom>
        If you have any questions about our Privacy Policy, please contact us at
        support@syntaxspring.com.
      </Typography>
    </motion.div>
  </Container>
);

const TermsOfService = () => (
  <Container className="py-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h4" gutterBottom className="font-bold">
        Terms of Service
      </Typography>
      <Typography variant="body1" gutterBottom>
        By using SyntaxSpring, you agree to the following terms and conditions.
        Please read them carefully.
      </Typography>
      <Typography variant="h6" className="font-semibold mt-4">
        User Responsibilities
      </Typography>
      <Typography variant="body1" gutterBottom>
        You agree to use SyntaxSpring only for lawful purposes and in compliance
        with all applicable laws and regulations. You are responsible for
        maintaining the confidentiality of your account.
      </Typography>
      <Typography variant="h6" className="font-semibold mt-4">
        Prohibited Activities
      </Typography>
      <Typography variant="body1" gutterBottom>
        Activities such as hacking, spreading malicious software, and other
        forms of abuse are strictly prohibited.
      </Typography>
      <Typography variant="h6" className="font-semibold mt-4">
        Termination
      </Typography>
      <Typography variant="body1" gutterBottom>
        We reserve the right to suspend or terminate your access to SyntaxSpring
        at our discretion if you violate these terms.
      </Typography>
      <Typography variant="h6" className="font-semibold mt-4">
        Limitation of Liability
      </Typography>
      <Typography variant="body1" gutterBottom>
        SyntaxSpring is provided "as is" without any warranties. We are not
        liable for any damages arising from the use of our app.
      </Typography>
      <Typography variant="h6" className="font-semibold mt-4">
        Contact Us
      </Typography>
      <Typography variant="body1" gutterBottom>
        For any questions regarding these terms, please contact us at
        support@syntaxspring.com.
      </Typography>
    </motion.div>
  </Container>
);

const LegalPages = () => (
  <Box className="bg-gray-100 min-h-screen">
    <PrivacyPolicy />
    <TermsOfService />
  </Box>
);

export default LegalPages;
